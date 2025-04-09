import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
            <img 
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.tailor}</p>
                <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold">₦{product.price}</span>
                    <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-600 transition">
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
};
;
export default ProductCard;