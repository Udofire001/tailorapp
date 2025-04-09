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
        <section className=" bg-[#f9fafb] min-h-screen py-16 px-6 sm:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <h2 className=" text-4xl sm:text-5xl font-bold mb-12 text-center text-gray-900 leading-snug">
                    Ready-Made Clothes</h2>
                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Shop;