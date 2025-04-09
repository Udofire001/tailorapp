import React from "react";
import ProductCard from "./ProductCard";


// Temp placeholder products

const products = [
    {
        id: 1,
        name: "Agbada Set - Navy Blue",
        price: "18500",
        tailor: "Ade Threads",
        image: "/assets/54.png", //a asample image
    },
    {
        id: 2,
        name: "Ankara Dress - Elegant",
        price: "12500",
        tailor: "Lola Couture",
        image: "/assets/54.png",
    },
    {
        id: 3,
        name: "Casual Senator - Black",
        price: "15000",
        tailor: "Tailor X",
        image: "/assets/54.png",
    },
];


const Shop = () => {
    return (
        <section className=" bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className=" text-4xl font-bold mb-10 text-center text-gray-900">
                    Ready-Made Clothes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Shop;