import React, { useState, useEffect } from 'react';
import '../css/style.css';
import SelectKelas from "../components/select/SelectKelas";
import SelectJurusan from "../components/select/SelectJurusan";
import SelectHukuman from "../components/select/SelectHukuman";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function FormInput() {
  const [formData, setFormData] = useState({
    nama: '',
    kelas: '',
    jurusan: '',
    jam: '',
    alasan: '',
    tanggal: new Date(),
    hukuman: ''
  });

  useEffect(() => {
    // Fungsi untuk mendapatkan jam saat ini dalam format HH:mm
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0'); // Mengambil jam dalam format 2 digit
      const minutes = now.getMinutes().toString().padStart(2, '0'); // Mengambil menit dalam format 2 digit
      setFormData(prev => ({ ...prev, jam: `${hours}:${minutes}` }));
    };

    // Update jam setiap menit
    const intervalId = setInterval(updateTime, 60000);

    // Jalankan update waktu sekali ketika komponen pertama kali dimuat
    updateTime();

    // Bersihkan interval saat komponen dibersihkan
    return () => clearInterval(intervalId);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nama, kelas, jurusan, jam, alasan, tanggal, hukuman } = formData;
    if (!nama || !kelas || !jurusan || !jam || !alasan) {
      alert("Semua kolom harus diisi!");
      return;
    }

    // Format tanggal ke string "yyyy-mm-dd" hanya kalau tanggal bukan null
    const formattedData = {
      ...formData,
      tanggal: tanggal instanceof Date
        ? tanggal.toISOString().split('T')[0]
        : tanggal
    };

    const scriptURL = "https://script.google.com/macros/s/AKfycbzrLXcKz6_mO2DJ0EnpFStoycLSLPnEeOKeOsvvKeigvkn8PVa3NWw5YNKE3o-jvGfPsg/exec";

    fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formattedData)
    }).then(() => {
      alert("Data berhasil dikirim!");
      setFormData(prev => ({
        ...prev,
        nama: '',
        jam: '',
        alasan: ''
      }));
    }).catch(error => {
      console.error("Error:", error);
      alert("Terjadi kesalahan, coba lagi.");
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {/* Input Nama */}
      <input
        type="text"
        id="nama"
        placeholder="Nama"
        value={formData.nama}
        onChange={handleChange}
        className="nama-input"
      />

      <SelectKelas
        value={formData.kelas}
        onChange={(e) => setFormData(prev => ({ ...prev, kelas: e.target.value }))}
      />

      {/* Pilihan Jurusan */}
      <SelectJurusan
        value={formData.jurusan}
        onChange={(e) => setFormData(prev => ({ ...prev, jurusan: e.target.value }))}
      />

      {/* Input Jam */}
      <div className="form-jam">
       {/* Input Jam */}
        <input
          type="time"
          id="jam"
          value={formData.jam}
          onChange={handleChange}
          className="time-input"
        />
    </div>
      {/* Textarea Alasan */}
      <textarea
        id="alasan"
        placeholder="Alasan"
        value={formData.alasan}
        onChange={handleChange}
        className="textarea-alasan"
      />

      {/* Date Picker */}
      <DatePicker
        selected={formData.tanggal}
        onChange={(date) => setFormData(prev => ({ ...prev, tanggal: date }))}
        className="w-full px-4 py-2 border rounded-lg shadow focus:ring-2 focus:ring-blue-500"
        placeholderText="Tanggal"
        dateFormat="yyyy-MM-dd"
      />


      {/* Pilihan Hukuman */}
      <SelectHukuman
        value={formData.hukuman}
        onChange={(e) => setFormData(prev => ({ ...prev, hukuman: e.target.value }))}
      />

      {/* Tombol Submit */}
      <button type="submit">Kirim</button>
    </form>
  );
}
