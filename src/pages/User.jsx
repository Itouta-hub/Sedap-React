import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";

export default function ListUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm((prev) => !prev);
  };

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://dummyjson.com/users");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setUsers(data.users);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div id="dashboard-container" className="p-6 bg-gray-50 min-h-screen">
      <PageHeader pageTitle="Users" breadcrumb={["Users", "Table Users"]}>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600 transition"
          onClick={handleToggleForm}
        >
          {showForm ? "Close" : "Add"}
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Export
        </button>
      </PageHeader>

      {showForm && (
        <div className="bg-white p-4 rounded-lg shadow-lg mt-6">
          <h3 className="text-lg font-semibold mb-4">Add New User</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="border p-2 rounded" />
              <input type="text" placeholder="Last Name" className="border p-2 rounded" />
              <input type="email" placeholder="Email" className="border p-2 rounded" />
              <input type="tel" placeholder="Phone" className="border p-2 rounded" />
            </div>
            <button
              type="submit"
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      <div className="overflow-x-auto mt-6">
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : (
          <table className="table-auto w-full border-collapse text-sm text-gray-700">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <th className="border px-6 py-3 text-left">User</th>
                <th className="border px-6 py-3 text-left">Email</th>
                <th className="border px-6 py-3 text-left">Age</th>
                <th className="border px-6 py-3 text-left">Gender</th>
                <th className="border px-6 py-3 text-left">Birthdate</th>
                <th className="border px-6 py-3 text-left">Company</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="odd:bg-white even:bg-gray-100 hover:bg-gray-200">
                  <td className="border px-6 py-4 flex items-center space-x-3">
                    <img
                      src={user.image}
                      alt={`${user.firstName} ${user.lastName}`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span className="font-semibold text-lg">{user.username}</span>
                  </td>
                  <td className="border px-6 py-4">{user.email}</td>
                  <td className="border px-6 py-4">{user.age}</td>
                  <td className="border px-6 py-4">{user.gender}</td>
                  <td className="border px-6 py-4">{user.birthDate}</td>
                  <td className="border px-6 py-4">{user.company?.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
