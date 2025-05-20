import Header from '../components/Header.jsx'
import NavBar from '../components/ComponentsGuest/NavBar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../components/ComponentsGuest/Footer.jsx';


export default function GuestLayout() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
