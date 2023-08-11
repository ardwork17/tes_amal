import React, { useState } from 'react';
import Home from '../Home';

const AverageCalculator = () => {
    const [input, setInput] = useState('');
    const [numbers, setNumbers] = useState([]);
    const [average, setAverage] = useState(null);

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleAddNumber = () => {
        const newNumber = parseFloat(input);
        if (!isNaN(newNumber)) {
            setNumbers([...numbers, newNumber]);
            setInput('');
        }
    };

    const calculateAverage = () => {
        if (numbers.length === 0) {
            setAverage(null);
        } else {
            const sum = numbers.reduce((total, num) => total + num, 0);
            const avg = sum / numbers.length;
            setAverage(avg);
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <Home />
            <div className="bg-white rounded-lg shadow-md p-4">
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">Penghitungan Rata-rata Nilai</h2>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Isi Nomor"
                            value={input}
                            onChange={handleInputChange}
                        />
                        <button
                            onClick={handleAddNumber}
                            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                        >
                            Tambah
                        </button>
                    </div>
                    <div className="my-4">
                        <p>Nilai: {numbers}</p>
                    </div>
                    <button
                        onClick={calculateAverage}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Hasil Kalkulasi
                    </button>
                    {average !== null && (
                        <div className="mt-2">
                            <p>Rata-rata: {average.toFixed(2)}</p>
                        </div>
                    )}
                    {numbers.length === 0 && (
                        <p className="text-gray-500 mt-2">Tidak ada nomor yang ditambahkan.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AverageCalculator;
