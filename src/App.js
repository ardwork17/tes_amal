import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DataPegawai from './Components/Pegawai/DataPegawai'
import File from './Components/File/ConvertFile'
import KalkulatorSistem from './Components/Kalkulator/KalkulatorSistem'
import AntrianSistem from './Components/Antrian/AntrianSistem'
import ListApi from './Components/DataApi/ListApi'
import CatatanSistem from './Components/Catatan/CatatanSistem'
import AvarageSistem from './Components/Avarage/AvarageSistem'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataPegawai />} />
        <Route path="/file" element={<File />} />
        <Route path="/kalkulator" element={<KalkulatorSistem />} />
        <Route path="/antrian" element={<AntrianSistem />} />
        <Route path="/list" element={<ListApi />} />
        <Route path="/catatan" element={<CatatanSistem />} />
        <Route path="/rata-rata" element={<AvarageSistem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
