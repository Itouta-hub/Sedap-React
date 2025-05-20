import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

export default function FormOrders() {
  const [formData, setFormData] = useState({
    OrderID: "",
    CustomerID: "",
    OrderDate: new Date().toISOString().split("T")[0],
    Product: "",
    Quantity: 1,
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
    navigate("/orders");
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-4">Add New Order</h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="OrderID" className="block text-sm font-medium text-gray-700">
            Order ID
          </label>
          <input
            type="text"
            id="OrderID"
            name="OrderID"
            value={formData.OrderID}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="CustomerID" className="block text-sm font-medium text-gray-700">
            Customer ID
          </label>
          <input
            type="text"
            id="CustomerID"
            name="CustomerID"
            value={formData.CustomerID}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="OrderDate" className="block text-sm font-medium text-gray-700">
            Order Date
          </label>
          <input
            type="date"
            id="OrderDate"
            name="OrderDate"
            value={formData.OrderDate}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Product" className="block text-sm font-medium text-gray-700">
            Product
          </label>
          <input
            type="text"
            id="Product"
            name="Product"
            value={formData.Product}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Quantity" className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            id="Quantity"
            name="Quantity"
            value={formData.Quantity}
            onChange={handleChange}
            required
            min="1"
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 mt-4"
        >
          Save Order
        </button>
      </form>
    </div>
  );
}
