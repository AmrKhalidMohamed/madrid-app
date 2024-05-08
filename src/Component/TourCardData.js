import React from 'react';
import { TourCard } from './TourCard';

export function TourCardData({ data }) {
  const baseUrl = 'http://127.0.0.1:8000';

  return data.map((item) => {
    const imageUrl = item.images && item.images.length > 0 ? item.images[0].replace('public/', '') : '';

    return (
      <TourCard 
        key={item.id}
        id={item.id}
        title={item.title}
        image={imageUrl ? `${baseUrl}/storage/${imageUrl}` : ''}
      />
    );
  });
};