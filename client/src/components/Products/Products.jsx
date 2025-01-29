import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;

        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/products");
                if (isMounted) {
                    setProducts(response.data.products);
                }
            } catch (err) {
                if (isMounted) {
                    setError("Failed to fetch products.");
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        const user = localStorage.getItem("user");
        if (user) {
            const parsedUser = JSON.parse(user);
            setIsAdmin(parsedUser.role === "admin");
        }

        fetchProducts();

        return () => {
            isMounted = false;
        };
    }, []);

    const handleUpdateProduct = (product) => {
        navigate('/products/edit', {
            state: {
                product: {
                    id: product._id,
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    category: product.category || '',
                    image: product.image
                }
            }
        });
    };

    const handleDeleteProduct = async (productId) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:5000/api/products/${productId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setProducts(products.filter((product) => product._id !== productId));
        } catch (err) {
            setError('Failed to delete product.');
        }
    };

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (loading) {
        return (
            <div className="products-page min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 py-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Products</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="bg-white shadow-md rounded overflow-hidden animate-pulse">
                                <div className="w-full h-48 bg-gray-300"></div>
                                <div className="p-4">
                                    <div className="h-6 bg-gray-300 mb-2 rounded"></div>
                                    <div className="h-4 bg-gray-300 mb-4 rounded"></div>
                                    <div className="flex space-x-2">
                                        <div className="h-8 w-20 bg-gray-300 rounded"></div>
                                        <div className="h-8 w-20 bg-gray-300 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="products-page min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10 relative top-14">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-8">
                    Explore Our Valentines Special Products
                </h1>
                {isAdmin && (
                    <div className="flex justify-center mb-6">
                        <Link to="/products/add">
                            <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 transition shadow-md">
                                Create Product
                            </button>
                        </Link>
                    </div>
                )}
                {error && (
                    <div className="text-red-500 text-center font-medium mb-4">
                        {error}
                    </div>
                )}
                <div className="Testing-Feature01 mb-4">
                    
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2"
                    >
                        <option value="">All Categories</option>
                        <option value="Home Decor">Home Decor</option>
                        <option value="Gifts">Gifts</option>
                        <option value="Toys">Toys</option>
                        <option value="Hampers">Hampers</option>
                        <option value="Flowers">Flowers</option>
                        <option value="Chocolates">Chocolates</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 ml-2"
                    />
                </div>
                <button
                        onClick={() => {
                            setSelectedCategory("");
                            setSearchTerm("");
                        }}
                        className="px-4 py-2 bg-yellow-400  text-white rounded-lg hover:bg-yellow-500 transition ml-2"
                    >
                        Clear
                    </button>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
                    {filteredProducts.map((product) => (
                        <div
                            key={product._id}
                            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition"
                            onClick={() => navigate('/products/detail', { state: { product } })} // Navigate to product detail on click
                        >
                            {product.image && product.image.url ? (
                                <img
                                    src={product.image.url}
                                    alt={product.title}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                            ) : (
                                <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-t-lg">
                                    <span className="text-lg font-semibold text-gray-600">
                                        No Image Available
                                    </span>
                                </div>
                            )}
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">
                                    {product.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {product.description}
                                </p>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    Price: Rs {product.price}
                                </p>

                                {isAdmin ? (
                                    <div className="flex justify-between">
                                        <button
                                            onClick={() => handleUpdateProduct(product)}
                                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                                        >
                                            Update
                                        </button>

                                        <button
                                            onClick={() => handleDeleteProduct(product._id)}
                                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => handleUpdateProduct(product)}
                                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                                    >
                                        Buy
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
