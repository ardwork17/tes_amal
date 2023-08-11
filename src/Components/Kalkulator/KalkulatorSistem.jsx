import React, { useState } from 'react';
import Home from '../Home';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleNumberClick = (number) => {
        setInput(input + number);
    };

    const handleOperatorClick = (operator) => {
        setInput(input + operator);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleCalculate = () => {
        try {
            setResult(eval(input).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <Home />
            <div className="bg-white rounded-lg shadow-md p-4">
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4">Kalkulator</h2>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                        <div className="mb-2 text-right">{input}</div>
                        <div className="mb-4 text-right text-2xl font-semibold">{result}</div>
                        <div className="grid grid-cols-4 gap-2">
                            {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 'C', 0, '=', '/'].map((item) => (
                                <button
                                    key={item}
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold px-4 py-2 rounded"
                                    onClick={() => {
                                        if (typeof item === 'number') {
                                            handleNumberClick(item.toString());
                                        } else if (item === '=') {
                                            handleCalculate();
                                        } else if (item === 'C') {
                                            handleClear();
                                        } else {
                                            handleOperatorClick(item);
                                        }
                                    }}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
