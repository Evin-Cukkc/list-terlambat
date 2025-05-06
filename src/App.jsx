import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Clock from './components/Clock';
import FormInput from './components/FormInput';

import Beranda from './pages/Beranda';
import Profil from './pages/Profil';
import DataSiswa from './pages/DataSiswa';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [halamanAktif, setHalamanAktif] = useState('beranda'); // state utama halaman

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const renderKonten = () => {
    switch (halamanAktif) {
      case 'profil':
        return <Profil />;
      case 'data-siswa':
        return <DataSiswa />;
      default:
        return <Beranda />;
    }
  };

  return (
    <div className="app">
      {loading ? (
        <div id="loader" className="loader">Loading...</div>
      ) : (
        <>
          {/* Sidebar menerima setter halaman aktif */}
          <Sidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            setHalamanAktif={setHalamanAktif}
          />

          <div className="app-container">
            <main
              className="content"
              onClick={() => {
                if (sidebarOpen) setSidebarOpen(false);
              }}
            >
              <Clock />
              <FormInput />
              {renderKonten()}
            </main>
          </div>
        </>
      )}
    </div>
  );
}
