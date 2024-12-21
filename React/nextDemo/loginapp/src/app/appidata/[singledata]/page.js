"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';

const ProductDetailsPage = ({ params }) => {
    const id = params.singledata;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            fetchData();
        }
    }, [id]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            const data = response.data;
            setProduct(data);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-8">
            <Head>
                <title>{product.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='max-w-[450px] flex-col m-auto text-center  self-center'>
                <h1 className="text-3xl text-center justify-center font-bold mb-4">{product.title}</h1>
                <div className="bg-white shadow-md rounded p-4">
                    <img src={product.image} alt={product.title} className="w-64 h-64 mb-4 mx-auto" />
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Price: ${product.price}
                    </button>
                    <p className="text-gray-600">{product.description}</p>
                    <div className="flex items-center item-left mt-4">
                        <span className="text-green-700 ">Rating: {product.rating.rate}</span>
                        <span className="text-green-700 ml-1">({product.rating.count} reviews)</span>
                    </div>
                </div>
                <a className='text-blue-400 p-10' href='/appidata'>Back to product list</a>
            </main>
        </div>
    );
};

export default ProductDetailsPage;
