import React, { useState, useEffect } from 'react';
import Home from '../Home';

const DiaryApp = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('diaryNotes')) || [];
        setNotes(storedNotes);
    }, []);

    useEffect(() => {
        localStorage.setItem('diaryNotes', JSON.stringify(notes));
    }, [notes]);

    const handleAddNote = () => {
        if (newNote.trim() !== '') {
            const updatedNotes = [...notes, { date: new Date().toISOString(), text: newNote }];
            setNotes(updatedNotes);
            setNewNote('');
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <Home />
            <div className="bg-white rounded-lg shadow-md p-4">
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">Aplikasi Catatan</h2>
                    <div className="mb-4">
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Tulis Catatan Disini..."
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                        />
                        <button
                            onClick={handleAddNote}
                            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                        >
                            Tambah Catatan
                        </button>
                    </div>
                    <ul>
                        {notes.map((note, index) => (
                            <li key={index} className="mb-2 border-b pb-2">
                                <div>{new Date(note.date).toLocaleString()}</div>
                                <div>{note.text}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DiaryApp;
