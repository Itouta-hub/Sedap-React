import { motion } from 'framer-motion';
import { FaUtensils, FaClock, FaSmile } from 'react-icons/fa';

export default function About() {
  const items = [
    {
      icon: <FaUtensils className="text-blue-600 text-3xl" />,
      title: "Makanan Rumahan",
      desc: "Kami hanya menyajikan makanan dari dapur rumahan terpercaya dan bersih.",
    },
    {
      icon: <FaClock className="text-blue-600 text-3xl" />,
      title: "Cepat & Terpercaya",
      desc: "Pengiriman cepat dan tepat waktu langsung ke lokasi Anda.",
    },
    {
      icon: <FaSmile className="text-blue-600 text-3xl" />,
      title: "Rasa yang Membahagiakan",
      desc: "Rasa yang menggugah selera dan membawa kenangan akan masakan rumah.",
    },
  ];

  return (
    <section id="about" className="bg-orange-300 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Tentang Kami
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <strong>Sedap</strong> adalah platform pemesanan makanan rumahan yang menghadirkan rasa autentik dari dapur lokal langsung ke meja makan Anda.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start space-y-4 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div>{item.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
