import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="p-4">
            <div className="grid justify-center grid-cols-4 gap-6">
                <Link to={'/'}> <div className="bg-blue-200 rounded-xl p-4">Data Pegawai</div></Link>
                <Link to={'/file'}> <div className="bg-blue-200 rounded-xl p-4">Konversi File PDF</div></Link>
                <Link to={'/kalkulator'}> <div className="bg-blue-200 rounded-xl p-4">Kalkulator</div></Link>
                <Link to={'/antrian'}> <div className="bg-blue-200 rounded-xl p-4">Antrian</div></Link>
                <Link to={'/list'}> <div className="bg-blue-200 rounded-xl p-4">Data List API</div></Link>
                <Link to={'/catatan'}> <div className="bg-blue-200 rounded-xl p-4">Catatan Harian</div></Link>
                <Link to={'/rata-rata'}> <div className="bg-blue-200 rounded-xl p-4">Nilai Rata-rata</div></Link>
            </div>
        </div>
    )
}

export default Home;