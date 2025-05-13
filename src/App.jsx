import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Clock from './components/Clock';
import FormInput from './components/FormInput';

import Profil from './pages/Profil';
import DataSiswa from './pages/DataSiswa';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowContent(true), 100);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
  <div className="app">
    {loading ? (
      <div id="loader" className="loader">
        Bakal update kalo developer ga mager!!!
      </div>
    ) : (
      <>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className={`app-container ${showContent ? 'fade-in' : ''}`}>
          <main
            className="content"
            onClick={() => {
              if (sidebarOpen) setSidebarOpen(false);
            }}
          >
            {/* ⬇️ Hapus Clock & FormInput dari sini */}

            <Routes>
              <Route
                path="/"
                element={
                  <div className="page">
                    <Clock />
                    <FormInput />
                  </div>
                }
              />
              <Route
                path="/profil"
                element={
                  <div className="page">
                    <Profil />
                  </div>
                }
              />
              <Route
                path="/data-siswa"
                element={
                  <div className="page">
                    <DataSiswa />
                  </div>
                }
              />
            </Routes>
          </main>
        </div>
      </>
    )}
  </div>
  );

}
