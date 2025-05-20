import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import BannerImg from '../../../public/img/AyamBkr.png';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat pt-24 pb-20 px-10 md:px-60"
      style={{ backgroundImage: `url('/img/Bg-Makanan.png')` }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center justify-between min-h-[calc(100vh-80px)] text-white">
          
          <motion.div
            className="space-y-6 max-w-xl md:ml-0 ml-auto text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Temukan Makanan <span className="text-yellow-400">Terenak</span> dari Dapur Rumah!
            </h1>
            <p className="text-lg">
              Sedap adalah aplikasi pemesanan makanan rumahan terenak, cepat, dan terpercaya.
              Hadirkan rasa hangat dari rumah ke meja makan Anda.
            </p>
            <button
              onClick={() => navigate("/register")}
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-md transition"
            >
              Mulai Sekarang
            </button>
          </motion.div>

          <motion.div
            className="flex justify-center mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={BannerImg}
              alt="Makanan lezat Sedap"
              className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
