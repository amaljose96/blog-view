import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import { BlogView } from './BlogView';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BlogView />
  </React.StrictMode>,
);
