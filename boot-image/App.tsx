import React, { useState } from "react";

const images: string[] = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTza1nPCJXHYmU6LlTWnMgsxcKcNGp-txfwig&s",
    "https://placehold.co/64x64/A78BFA/FFFFFF?text=THUMB1",
    "https://placehold.co/64x64/60A5FA/FFFFFF?text=THUMB2",
    "https://placehold.co/64x64/FACC15/000000?text=THUMB3",
    "https://placehold.co/64x64/34D399/FFFFFF?text=THUMB4",
    "https://placehold.co/64x64/FB7185/FFFFFF?text=THUMB5",
];

const ProductCard: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string>(images[0]);

    return (
        <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10 bg-white rounded-lg shadow-xl">
            <div>
                <div className="border rounded-xl overflow-hidden shadow-md">
                    <img
                        src={selectedImage}
                        alt="Selected product"
                        className="w-full object-contain h-[400px] bg-white"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = 'https://placehold.co/400x400/CCCCCC/000000?text=Image+Error';
                        }}
                    />
                </div>
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2 custom-scrollbar">
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            onClick={() => setSelectedImage(img)}
                            alt={`Thumbnail ${i + 1}`}
                            className={`w-20 h-20 object-contain border rounded-md cursor-pointer p-1 transition-all duration-200
                                        ${selectedImage === img ? "border-red-500 shadow-md" : "border-gray-300 hover:border-gray-400"}`}
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = 'https://placehold.co/64x64/DDDDDD/666666?text=X';
                            }}
                        />
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">MEN'S ADIDAS COURTSMASH</h2>
                <div className="flex items-center gap-2 text-yellow-500 text-xl mb-2">
                    {"★".repeat(4)}
                    {"☆"}
                    <span className="text-gray-600 text-sm ml-2">(4 Reviews)</span>
                </div>
                <p className="mb-1 text-gray-700">
                    Availability: <span className="text-green-600 font-medium">In Stock</span>
                </p>
                <p className="mb-1 text-gray-700">
                    Brand: <span className="text-gray-700">Adidas</span>
                </p>
                <p className="mb-4 text-gray-700">
                    Category: <span className="text-gray-700">Shoes</span>
                </p>

                <div className="mb-4">
                    <span className="line-through text-gray-500 text-lg mr-2">$200.00</span>
                    <span className="text-red-600 font-bold text-2xl">$180.00</span>
                    <span className="ml-3 px-3 py-1 text-sm bg-red-100 text-red-600 font-semibold rounded-full">-10%</span>
                </div>

                <p className="text-base text-gray-600 leading-relaxed mb-6">
                    Super comfortable and stylish shoes suitable for both indoor and outdoor sports. Perfect balance of comfort and performance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors duration-200 font-semibold text-lg shadow-md">
                        Add to Cart
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg shadow-md">
                        Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
