import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = ({img, kode, deskripsi }) => {
  const background = "bg-[url('/img/error-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed";
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-400">
      <div className="text-center text-white px-8 py-12 max-w-md w-full bg-white/80 rounded-3xl shadow-2xl backdrop-blur-md">
      {img && (
          <img
            src={img}
            className="mx-auto mb-6 w-50 h-45 object-cover"
          />
        )}
        <h1 className="text-8xl font-extrabold animate__animated animate__zoomIn text-indigo-600 drop-shadow-lg">
          {kode}
        </h1>
        <p className="text-xl mt-6 text-gray-800 animate__animated animate__fadeInUp animate__delay-1s">
          {deskripsi}
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-block px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-white hover:text-indigo-600 hover:shadow-xl hover:scale-105"
          >
            Kembali ke Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
