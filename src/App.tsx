import Location from './components/Location';
import NetworkStatus from './components/NetworkStatus';
import QuoteSection from './components/QuoteSection';
import React from 'react';

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-indigo-800 mb-4">
          🌟 GeoAware Quotes
        </h1>
        <Location />
        <NetworkStatus />
        <QuoteSection />
      </div>
    </main>
  );
}
