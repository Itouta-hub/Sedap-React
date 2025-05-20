import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function CustomerForm() {
  const [formData, setFormData] = useState({
    CustomerID: "",
    CustomerName: "",
    Email: "",
    Phone: "",
    Loyalty: "Bronze",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/customers");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto p-6"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Add New Customer</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
      >
        {[
          { label: "Customer ID", id: "CustomerID", type: "text" },
          { label: "Customer Name", id: "CustomerName", type: "text" },
          { label: "Email", id: "Email", type: "email" },
          { label: "Phone", id: "Phone", type: "tel" },
        ].map((field) => (
          <div className="mb-5" key={field.id}>
            <label
              htmlFor={field.id}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              value={formData[field.id]}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>
        ))}

        <div className="mb-6">
          <label htmlFor="Loyalty" className="block text-sm font-medium text-gray-700 mb-1">
            Loyalty Level
          </label>
          <select
            id="Loyalty"
            name="Loyalty"
            value={formData.Loyalty}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          >
            <option value="Bronze">🥉 Bronze</option>
            <option value="Silver">🥈 Silver</option>
            <option value="Gold">🥇 Gold</option>
          </select>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold shadow-md hover:from-green-600 hover:to-green-700 transition"
        >
          Save Customer
        </motion.button>
      </form>
    </motion.div>
  );
}
