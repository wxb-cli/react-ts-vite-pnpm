import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense>
    <App />
  </Suspense>
);
