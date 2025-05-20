import { createRoot } from "react-dom/client";
import './assets/tailwind.css'
import Header from './layouts/Header.jsx'
import Sidebar from './layouts/Sidebar.jsx';
import PageHeader from './components/PageHeader.jsx';
import Dashboard from './pages/Dashboard.jsx';

createRoot(document.getElementById("root"))
    .render(
    <div id="app-container" className="bg-gray-100">
        <div id="layout-wrapper" className="flex h-screen">
            <Sidebar/>
            <div id="main-content" className="flex-1 p-4">
                <Header/>
                <Dashboard/>
            </div>
        </div>
    </div>

    )