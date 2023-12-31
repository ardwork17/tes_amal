import React, { useEffect, useState } from 'react'
import { getData, getDataNext, getDataPrev } from '../Service/DataService'
import Home from '../Home';

function List() {

    const [data, setData] = useState()

    useEffect(() => {
        GetData()
    }, [])

    const GetData = () => {
        getData().then((res) => {
            setData(res.data)
        })
    }

    const handleNextPage = (dataNext) => {
        getDataNext(dataNext).then((res) => {
            setData(res.data)
        })
    }

    const handlePreviousPage = (dataPrev) => {
        getDataPrev(dataPrev).then((res) => {
            setData(res.data)
        })
    }
    return (
        <div className="container mx-auto mt-8">
            <Home />
            <div className='bg-white rounded-2xl shadow-lg p-11 m-11'>
                <h2 className='text-2xl font-bold text-center my-3'>List Pokemon</h2>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.results?.map((item, index) => (
                            <tr key={index}>
                                <td className="border text-center px-4 py-2">{item.name}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-between mt-4">
                    <button
                        onClick={() => handlePreviousPage(data.previous)}
                        // disabled={currentPage === 1}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => handleNextPage(data.next)}
                        // disabled={currentPage === totalPages}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>

    );
}

export default List;
