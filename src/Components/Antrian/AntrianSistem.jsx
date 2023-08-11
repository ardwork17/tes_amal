import React, { useState } from 'react';
import Home from '../Home';

const QueueApp = () => {
    const [queue, setQueue] = useState([]);
    const [queueNumber, setQueueNumber] = useState(1);

    const handleTakeNumber = () => {
        setQueue([...queue, queueNumber]);
        setQueueNumber(queueNumber + 1);
    };

    const handleRemoveNumber = () => {
        if (queue.length > 0) {
            const updatedQueue = [...queue];
            updatedQueue.shift();
            setQueue(updatedQueue);
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <Home />
            <div className="bg-white rounded-lg shadow-md p-4">
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">Aplikasi Antrian</h2>
                    <h2 className="text-md font-semibold mb-2">Silahkan Ambil Antrian Anda</h2>
                    <div className="mb-4">
                        <button
                            onClick={handleTakeNumber}
                            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                        >
                            Ambil Antrian
                        </button>
                        <button
                            onClick={handleRemoveNumber}
                            className="bg-red-500 text-white px-4 py-2 rounded"
                        >
                            Selanjutnya
                        </button>
                    </div>
                    <div className="mb-2">
                        {queue.length > 0 ? (
                            <div className="text-2xl font-semibold">Nomor Antrian Saat Ini: {queue[0]}</div>
                        ) : (
                            <div className="text-gray-500">Tidak Ada Nomor Antrian</div>
                        )}
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Status Antrian</h3>
                        <ul className="list-disc list-inside">
                            {queue.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default QueueApp;
