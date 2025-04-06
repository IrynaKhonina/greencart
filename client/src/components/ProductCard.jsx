import React from 'react';
import {assets} from "../assets/assets.js";
import {useAppContext} from "../contex/AppContex.jsx";

export const ProductCard = ({product}) => {
    // ИЗМЕНЕНО: Убрала неиспользуемый navigate из контекста
    const {currency, addToCart, removeFromCart, cartItems} = useAppContext();

    return product && (
        <div className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full">
            <div className="group cursor-pointer flex items-center justify-center px-2">
                <img className="group-hover:scale-105 transition max-w-26 md:max-w-36"
                     src={product.image[0]} alt={product.name}/>
            </div>

            <div className="text-gray-500/60 text-sm">
                <p>{product.category}</p>
                <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
                <div className="flex items-center gap-0.5">
                    {Array(5).fill('').map((_, i) => (
                        <img key={i} className='md:w-3.5 w3'
                             src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                             alt={product.name}/>
                    ))}
                    <p>(4)</p>
                </div>

                <div className="flex items-end justify-between mt-3">
                    <p className="md:text-xl text-base font-medium text-primary">
                        {currency}${product.offerPrice} {" "}
                        <span className="text-gray-500/60 md:text-sm text-xs line-through">
                            {currency}${product.price}
                        </span>
                    </p>

                    {/* ИЗМЕНЕНО: Убрала лишний onClick с внешнего div */}
                    <div className="text-primary">
                        {!cartItems[product._id] ? (
                            <button
                                className="flex items-center justify-center gap-1
                                bg-primary/10 border border-primary/40 md:w-[80px] w-[64px] h-[34px]
                                rounded cursor-pointer hover:bg-primary/20 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation(); // Добавил остановку всплытия
                                    addToCart(product._id);
                                }}>
                                <img src={assets.cart_icon} alt='cart_icon'/>
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px]
                                         bg-primary/25 rounded select-none"
                                 onClick={(e) => e.stopPropagation()}>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeFromCart(product._id);
                                    }}
                                    className="cursor-pointer text-md px-2 h-full hover:bg-primary/40 rounded-l">
                                    -
                                </button>
                                <span className="w-5 text-center">{cartItems[product._id]}</span>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        addToCart(product._id);
                                    }}
                                    className="cursor-pointer text-md px-2 h-full hover:bg-primary/40 rounded-r">
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};