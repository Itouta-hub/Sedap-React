import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled ? 'bg-black shadow-md border-gray-900' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <span className="text-2xl md:text-3xl font-bold text-green-600 font-poppins-extrabold">
              Sedap.
            </span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex md:space-x-10">
            <button
              onClick={() => scrollToSection('#home')}
              className="text-gray-200 hover:text-blue-600 text-sm font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('#about')}
              className="text-gray-200 hover:text-blue-600 text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('#produk')}
              className="text-gray-200 hover:text-blue-600 text-sm font-medium"
            >
              Produk
            </button>
            <button
              onClick={() => scrollToSection('#CekKetersediaan')}
              className="text-gray-200 hover:text-blue-600 text-sm font-medium"
            >
              Cek Ketersediaan
            </button>
            <button
              onClick={() => scrollToSection('#testimoni')}
              className="text-gray-200 hover:text-blue-600 text-sm font-medium"
            >
              Testimoni
            </button>
            <button
              onClick={() => scrollToSection('#kontak')}
              className="text-gray-200 hover:text-blue-600 text-sm font-medium"
            >
              Kontak
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-1 text-sm rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="px-4 py-1 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
