import React from 'react';
import Bad from './Bad';
import Good from './Good';
import ErrorBoundary from './ErrorBoundary';

export default function App() {
  return (
    <>
      <ErrorBoundary>
        <Bad />
      </ErrorBoundary>
      <ErrorBoundary>
        <Good />
      </ErrorBoundary>
    </>
  );
}
