import React from 'react';
import { TourCard } from './TourCard';
import { Link } from 'react-router-dom';

export function TourCardData({ data }) {
  const baseUrl = 'https://madridtours-production.up.railway.app';

  return data.map((item) => {
    const imageUrl = item.images && item.images.length > 0 ? item.images[0].replace('public/', '') : '';

    return (
      <Link
        key={item.id}
        to={`${item.id}`}
        state={item}
        className="mt-16 mb-5"
      >
        <TourCard
          title={item.title}
          image={imageUrl ? `${baseUrl}/storage/${imageUrl}` : ""}
          item={item}
        />
      </Link>
    );
  });
};