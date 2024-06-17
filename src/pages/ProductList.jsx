// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../components/Api';
// import { getAllProducts } from '../api';  // Adjust the path as needed

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getAllProducts();
                setProducts(response.data.products);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="bg-red-50 py-16">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                {/* <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"> */}
                {products.map((product) => (
                    <div key={product.id} className="group relative w-100 bg-gray-200 border border-black rounded-lg shadow-md overflow-hidden">
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden group-hover:opacity-75 lg:aspect-none lg:h-80">
                            <img
                                width="100px"
                                height="100px"
                                src={`http://localhost:5500/products/${product.productImage}`}
                                alt={product.productName}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                        </div>
                        <div className="p-4 bg-white">
                            <h3 className="text-sm font-semibold text-gray-700">
                                <a href={product.href}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {product.productName}
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{product.productDescription}</p>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.productPrice}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* </div> */}
        </div>
    );
};

export default ProductList;
