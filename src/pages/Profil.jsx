import React from 'react';
import '../css/profil.css';

export default function Profil() {
  return (
    <div className="profil-container">
      {/* Card 1: Isi */}
      <div className="card">
        <div className="header">
          <img
            src="iconjam.png"
            alt="Foto Profil"
            className="avatar"
          />
          <div className="identitas">
            <h3>Evinn JMK</h3>
            <p>Laki-laki</p>
            <span className="badge red">TIDAK DIKETAHUI</span>
            <p className="role">Operator</p>
            <span className="badge blue">VERIFIED</span>
          </div>
        </div>

        <div className="kontak">
          <h4>Kontak</h4>
          <div className="kontak-item">
            <i className="material-icons">photo_camera</i>
            <span>@guc_real</span>
          </div>
          <div className="kontak-item">
            <i className="material-icons">phone_android</i>
            <span>08</span>
          </div>
        </div>
      </div>

      {/* Card 2: Kosong */}
      <div className="card kosong">
        {/* Kosong */}
      </div>
    </div>
  );
}
