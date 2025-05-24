import React, { useState } from 'react';
import produkData from '../../Produk.json';

export default function CekKetersediaan () {
    const [kodeProduk, setKodeProduk] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!kodeProduk || kodeProduk.length < 4) {
            alert("Kode produk tidak boleh kosong dan harus minimal 4 karakter.");
            return;
        }

        const product = produkData.find(
            p => p.kode_produk.toLowerCase() === kodeProduk.toLowerCase()
        );
        if (product) {
            if (product.stok > 0) {
                setResult({
                    status: 'success',
                    message: `Produk ${product.nama_produk} tersedia dengan harga Rp${product.harga.toLocaleString()}. Stok tersedia: ${product.stok}`
                });
            } else {
                setResult({
                    status: 'warning',
                    message: `Produk ${product.nama_produk} saat ini sedang habis.`
                });
            }
        } else {
            setResult({
                status: 'error',
                message: 'Kode produk tidak ditemukan.'
            });
        }
    };

    const getResultStyle = (status) => {
        switch (status) {
            case 'success':
                return 'bg-green-100 text-green-700 border-green-400';
            case 'warning':
                return 'bg-yellow-100 text-yellow-700 border-yellow-400';
            case 'error':
                return 'bg-red-100 text-red-700 border-red-400';
            default:
                return '';
        }
    };

    return (
       <div id="CekKetersediaan" className="bg-gradient-to-br from-gray-900 to-white py-16 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    🔍 Cek Ketersediaan Produk
                </h2>
                <p className="text-center text-gray-500 mb-8">
                        Masukkan kode produk untuk melihat apakah produk tersedia dan berapa stok yang masih ada.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-center justify-center">
                        <input
                            type="text"
                            placeholder="Contoh: Rendang"
                            value={kodeProduk}
                            onChange={(e) => setKodeProduk(e.target.value)}
                            className="w-full md:w-2/3 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl hover:bg-blue-700 transition duration-300"
                        >
                        Cek
                    </button>
                </form>
                {result && (
                    <div className={`mt-6 p-4 border-l-4 rounded-xl ${getResultStyle(result.status)}`}>
                        {result.message}
                    </div>
                )}
            </div>
        </div>
    );
};


