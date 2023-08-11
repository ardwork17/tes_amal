import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import Home from '../Home';

const TxtToPdfConverter = () => {
    const [text, setText] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setText(event.target.result);
            };
            reader.readAsText(file);
        }
    };

    const handleConvert = () => {
        const pdf = new jsPDF();
        pdf.text(text, 10, 10);
        const pdfBlob = pdf.output('blob');
        saveAs(pdfBlob, 'converted.pdf');
    };

    return (
        <div className="container mx-auto mt-8">
            <Home />
            <div className="bg-white rounded-lg shadow-md p-4">
                <div className="p-4">
                    <input type="file" onChange={handleFileChange} />
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={handleConvert}
                        disabled={!text}
                    >
                        Convert to PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TxtToPdfConverter;
