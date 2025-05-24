import { motion } from 'framer-motion';
import products from '../../Produk.json';

function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(number);
}

export default function TopProduk() {
  return (
    <section id="produk" className="py-20 bg-gray-200 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">Produk Unggulan</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-x1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img src={product.image} alt={product.nama_produk} className="w-full h-56 object-cover" />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-800">{product.nama_produk}</h3>
                <p className="text-yellow-600 font-medium">{formatRupiah(product.harga)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
