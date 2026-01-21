import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DocsLayout } from './layouts/DocsLayout';
import DocsPage from './pages/DocsPage';

function App() {
  return (
    <Routes>
      <Route element={<DocsLayout />}>
        {/* Render DocsPage for the root path */}
        <Route path="/" element={<DocsPage />} />
        {/* Render DocsPage for all other paths, letting it handle content loading internally */}
        <Route path="*" element={<DocsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
