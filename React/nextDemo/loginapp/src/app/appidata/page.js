"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Link from 'next/link';

const ApiDataPage = () => {
    const [apiData, setApiData] = useState([]);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        checkAuthentication();
        fetchData();
    }, []);

    const checkAuthentication = () => {
        const userToken = localStorage.getItem('userData');
        if (userToken) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            const data = response.data;
            setApiData(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    if (!authenticated) {
        return <div>Please log in to access this page.
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <a href="/login">Login</a>
            </button>
        </div>;
    }

    return (
        <div className="container mx-auto p-8">
            <Head>
                <title>API Data Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="text-3xl font-bold mb-4">API Data</h1>
                {apiData.map((item, index) => (
                    <Link key={index} href={`/appidata/${item.id}`}>
                        <div className="bg-white shadow-md m-5 rounded p-4 cursor-pointer">
                            <img src={item.image} alt={item.title} className="w-10 self-center h-10 mb-4" />
                            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                            <p className="text-gray-600">{item.description}</p>
                            <div className="flex items-center mt-4">
                                <button className="bg-blue-500 align-middle self-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    {item.price}
                                </button>
                                <div className="flex items-center ml-auto">
                                    <span className="text-green-700"> Rating: {item.rating.rate}</span>
                                    <span className="text-green-700 ml-1">({item.rating.count})</span>
                                </div>
                            </div>
                        </div>

                    </Link>
                ))}
            </main>
        </div>
    );
};

export default ApiDataPage;
