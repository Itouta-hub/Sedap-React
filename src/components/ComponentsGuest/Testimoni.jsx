import { motion } from 'framer-motion';
import testimoni from '../../Testimoni.json';
import { FaStar, FaRegStar } from 'react-icons/fa';

export default function Testimoni() {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <FaStar key={i} className="text-yellow-400" />
      ) : (
        <FaRegStar key={i} className="text-yellow-400" />
      )
    );
  };

  return (
    <section id="testimoni" className="py-20 bg-white px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Tanggapan Customer
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimoni.map((user, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 rounded-xl p-6 shadow hover:shadow-md transition text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-4 mb-2">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <h4 className="text-lg font-semibold text-gray-800">{user.name}</h4>
              </div>
              <div className="flex items-center mb-3">
                {renderStars(user.rating)}
              </div>
              <p className="text-gray-600 text-sm">{user.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
