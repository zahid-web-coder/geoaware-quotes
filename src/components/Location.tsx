import { useEffect, useState } from 'react';
import React from 'react';
export default function Location() {
  const [location, setLocation] = useState('Detecting your location...');

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`);
          const data = await res.json();
          const city = data.address.city || data.address.town || 'Unknown City';
          const country = data.address.country || 'Unknown Country';
          setLocation(`${city}, ${country}`);
        },
        () => setLocation('Location permission denied')
      );
    } else {
      setLocation('Geolocation not supported');
    }
  }, []);

  return <p className="text-lg">📍 <strong>Location:</strong> {location}</p>;
}
