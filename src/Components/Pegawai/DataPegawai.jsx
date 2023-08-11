import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Home from '../Home'

function DataPegawai() {
    const [data, setData] = useState([]);
    const [editItemId, setEditItemId] = useState(null);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [editName, setEditName] = useState('');
    const [editAge, setEditAge] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleAdd = () => {
        const newItem = { id: Date.now(), name, age };
        setData([...data, newItem]);
        setName('');
        setAge('');
    };

    const handleEdit = (id) => {
        const itemToEdit = data.find((item) => item.id === id);
        setEditItemId(id);
        setEditName(itemToEdit.name);
        setEditAge(itemToEdit.age);
    };

    const handleUpdate = (id) => {
        const updatedData = data.map((item) =>
            item.id === id ? { ...item, name: editName, age: editAge } : item
        );
        setData(updatedData);
        setEditItemId(null);
    };

    const handleDelete = (id) => {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
    };
    return (
        <div className="container mx-auto mt-8">
            <Home />
            <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-semibold mb-4">Tambah Karyawan</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Nama"
                        value={name}
                        onChange={handleNameChange}
                        className="p-2 border border-gray-300 mr-2"
                    />
                    <input
                        type="text"
                        placeholder="Umur"
                        value={age}
                        onChange={handleAgeChange}
                        className="p-2 border border-gray-300 mr-2"
                    />
                    <button
                        onClick={handleAdd}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Tambah
                    </button>
                </div>
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">ID</th>
                            <th className="border border-gray-300 px-4 py-2">Nama</th>
                            <th className="border border-gray-300 px-4 py-2">Umur</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {editItemId === item.id ? (
                                        <input
                                            type="text"
                                            className="p-2 border border-gray-300 mr-2"
                                            value={editName}
                                            onChange={(e) => setEditName(e.target.value)}
                                        />
                                    ) : (
                                        item.name
                                    )}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {editItemId === item.id ? (
                                        <input
                                            type="text"
                                            className="p-2 border border-gray-300 mr-2"
                                            value={editAge}
                                            onChange={(e) => setEditAge(e.target.value)}
                                        />
                                    ) : (
                                        item.age
                                    )}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {editItemId === item.id ? (
                                        <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2" onClick={() => handleUpdate(item.id)}>Save</button>
                                    ) : (
                                        <button className="bg-green-500 text-white px-2 py-1 rounded mr-2" onClick={() => handleEdit(item.id)}>Edit</button>
                                    )}
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                                    >
                                        Hapur
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DataPegawai;