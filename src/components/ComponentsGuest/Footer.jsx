import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="kontak" className="bg-gray-900 text-white mt-12">
      <div className="w-full max-w-screen-xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Info Kontak */}
          <div>
            <h3 className="text-3xl text-green-600 font-bold mb-4">Sedap.</h3>
            <p className="text-sm mb-1">Jl. Kenangan No. 123, Jakarta</p>
            <p className="text-sm mb-1">Email: support@sedap.com</p>
            <p className="text-sm">Telp: 0812-3456-7890</p>
          </div>

          {/* Sosial Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400 text-lg">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-yellow-400 text-lg">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-yellow-400 text-lg">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Partner */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Partner Kami</h4>
            <div className="flex space-x-4 items-center">
              <img src="/img/partner1.png" alt="Partner 1" className="h-10" />
              <img src="/img/partner2.png" alt="Partner 2" className="h-10" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Sedap. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
