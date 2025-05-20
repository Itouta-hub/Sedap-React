import { useState } from "react";
import customersData from "../Customer.json";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Customers() {
  const [customers, setCustomers] = useState(customersData);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const sortBy = (key) => {
    const sorted = [...customers].sort((a, b) => {
      const valA = a[key].toLowerCase();
      const valB = b[key].toLowerCase();
      if (sortOrder === "asc") return valA > valB ? 1 : -1;
      else return valA < valB ? 1 : -1;
    });
    setCustomers(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filtered = customers.filter((c) =>
    c.CustomerName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Customer List</h1>
        <Link
          to="/formcustomers"
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow transition"
        >
          Add Customer
        </Link>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none transition"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-xl shadow-lg overflow-x-auto"
      >
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded">
            <tr>
              <th
                className="px-6 py-3 cursor-pointer"
                onClick={() => sortBy("CustomerID")}
              >
                Customer ID {sortOrder === "asc" ? "↑" : "↓"}
              </th>
              <th
                className="px-6 py-3 cursor-pointer"
                onClick={() => sortBy("CustomerName")}
              >
                Name {sortOrder === "asc" ? "↑" : "↓"}
              </th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Loyalty</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filtered.map((customer, i) => (
              <motion.tr
                key={customer.CustomerID}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-green-50 transition`}
              >
                <td className="px-6 py-4">{customer.CustomerID}</td>
                <td className="px-6 py-4">{customer.CustomerName}</td>
                <td className="px-6 py-4">{customer.Email}</td>
                <td className="px-6 py-4">{customer.Phone}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      customer.Loyalty === "Bronze"
                        ? "bg-yellow-100 text-yellow-800"
                        : customer.Loyalty === "Silver"
                        ? "bg-gray-200 text-gray-800"
                        : "bg-yellow-300 text-yellow-900"
                    }`}
                  >
                    {customer.Loyalty}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}
