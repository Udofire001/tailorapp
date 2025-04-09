import React from "react";
import Shop from "./Shop";

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <img 
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-500 text-sm">By {product.tailor}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-blue-600 font-bold text-lg">₦{product.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm hover:bg-blue-700 transition">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;