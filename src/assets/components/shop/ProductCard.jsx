import React from "react";
import Shop from "./Shop";

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 flex-1 flex flex-col justify-between">
                <div className=" space-y-1">
                    <h3 className="text-xl font-semibold text-gray-800 leading-tight">{product.name}</h3>
                    <p className="text-gray-400 text-sm">By <span className="text-gray-600">{product.tailor} </span></p>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-blue-600 font-bold text-lg">₦{product.price}</span>
                    <button className="bg-blue-600 text-white py-2 px-4 text-sm font-medium rounded-full text-sm hover:bg-blue-700 transition">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;