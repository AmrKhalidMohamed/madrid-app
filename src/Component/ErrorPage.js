import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faArrowRotateLeft, faHouse } from "@fortawesome/free-solid-svg-icons";

export function ErrorPage({
  title = "Services unavailable",
  description,
  errorInfo = {},
  onRetry,
  onGoHome,
}) {
  const message = description ?? errorInfo.message ?? "We cannot reach the tours API right now.";
  const statusLabel = errorInfo.status ? `Status ${errorInfo.status}` : "Status unknown";

  return (
    <section className="relative isolate flex min-h-[calc(100vh-5rem)] w-full flex-col overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-br from-red-900 via-slate-950 to-black text-white/90 shadow-[0_0_45px_rgba(0,0,0,0.8)]">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute top-3 left-[10%] h-36 w-36 rounded-full bg-[#ff2f3c] blur-3xl animate-pulse" />
        <div className="absolute -bottom-12 right-[5%] h-48 w-48 rounded-full bg-[#00ffd2] blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_45%)]" />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-6 py-16 md:px-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 font-second text-white/80">
            <FontAwesomeIcon icon={faCircleExclamation} className="text-3xl text-orange-300" />
            <span className="text-xs uppercase tracking-[0.4em] text-orange-200/70">Connectivity</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <h1 className="font-first text-3xl font-black leading-tight text-white md:text-4xl">
              {title}
            </h1>
            <span className="rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              {statusLabel}
            </span>
          </div>
        </div>
        <p className="max-w-3xl text-lg leading-relaxed text-white/80">
          {message}
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/5 bg-white/5 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.35)] backdrop-blur">
            <p className="text-sm uppercase text-white/50">Last response</p>
            <p className="text-xl font-semibold text-white">{errorInfo.status ?? "No response"}</p>
            <p className="text-xs text-white/60">{errorInfo.statusText ?? "Server unreachable"}</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/5 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.35)] backdrop-blur">
            <p className="text-sm uppercase text-white/50">Error code</p>
            <p className="text-lg font-semibold text-emerald-300">{errorInfo.code ?? "N/A"}</p>
            <p className="text-xs text-white/60">Use this when contacting support</p>
          </div>
          <div className="rounded-2xl border border-dashed border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
            <p className="text-sm uppercase text-white/60">Retry log</p>
            <p className="text-base text-white">{errorInfo.message ?? "Retry and check connectivity."}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 pt-1">
          {onRetry && (
            <button
              onClick={onRetry}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 via-lime-300 to-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 shadow-[0_20px_65px_rgba(16,185,129,0.35)] transition hover:scale-[1.02]"
            >
              <FontAwesomeIcon icon={faArrowRotateLeft} />
              Retry
            </button>
          )}
          {onGoHome && (
            <button
              onClick={onGoHome}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/60 hover:text-emerald-300"
            >
              <FontAwesomeIcon icon={faHouse} />
              Go home
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
