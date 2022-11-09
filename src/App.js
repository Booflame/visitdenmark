import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navi from './components/Navigation';

export default function App() {
  return (
    <>
      <Navi />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}