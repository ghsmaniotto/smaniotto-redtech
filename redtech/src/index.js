import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes } from "react-router-dom";
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
