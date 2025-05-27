import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/tailwind.css'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Customers = React.lazy(() => import("./pages/Customers"))
const FormCustomers = React.lazy(() => import("./pages/FormCustomers"))
const Orders = React.lazy(() => import("./pages/Orders"))
const Products = React.lazy(() => import("./pages/Products"))
const FormOrders = React.lazy(() => import("./pages/FormOrders"))
const ErrorPage = React.lazy(() => import("./components/ErrorPage"))
const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
import Loading from './components/Loading.jsx'
const ListUser = React.lazy(() => import("./pages/User"))

const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"))
const NavBar = React.lazy(() => import("./components/ComponentsGuest/NavBar"))
const DashboardGuest = React.lazy(() => import("./pages/DashboardGuest"))

const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))

function App() {
  return (
      <Suspense fallback={<Loading/>}>
        <Routes>
        <Route path="/*" element={<ErrorPage kode="403" deskripsi="Halaman ini masih dalam maintanence" img="./img/Error403.jpg"/>} />
            <Route element={<MainLayout/>}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/formorders" element={<FormOrders />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/formcustomers" element={<FormCustomers />} />
                <Route path="/400" element={<ErrorPage kode="400" deskripsi="Halaman ini masih dalam maintanence" img="./img/Error400.jpg"/>} />
                <Route path="/401" element={<ErrorPage kode="401" deskripsi="Halaman ini masih dalam maintanence" img="./img/Error401.jpg"/>} />
                <Route path="/403" element={<ErrorPage kode="403" deskripsi="Halaman ini masih dalam maintanence" img="./img/Error403.jpg"/>} />
                <Route path="/ListUser" element={<ListUser />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} /> 
            </Route>
            <Route element={<AuthLayout/>}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot" element={<Forgot />} />
            </Route>
            <Route element={<GuestLayout/>}>
                {/* <Route path="/" element={<NavBar />} /> */}
                <Route path="/guest" element={<DashboardGuest />} />
            </Route>
        </Routes>
    </Suspense>
  )
}

export default App
