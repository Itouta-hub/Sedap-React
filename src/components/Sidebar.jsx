import { BiFoodMenu } from "react-icons/bi";
import ListMenu from "./ListMenu";

export default function Sidebar() {
    return (
        <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
            {/* Logo */}
            <div id="sidebar-logo"className="flex flex-col">
                <span id="logo-title"className="font-poppins-extrabold text-[48px] text-gray-900">
		                Sedap <b id="logo-dot"className="text-hijau">.</b>
		            </span>
                <span id="logo-subtitle"className="font-barlow font-semibold text-gray-400">Modern Admin Dashboard</span>
            </div>

            <ListMenu/>

            {/* Footer */}
            <div id="sidebar-footer"className="mt-auto">
                <div id="footer-card"className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
                    <div id="footer-text"className="text-white text-sm">
                        <span>Please organize your menus through button below!</span>
                        <div id="add-menu-button"className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
                            <span className="text-gray-600 flex items-center"><BiFoodMenu  className="mr-4 text-xl"/>Add Menu</span>
                        </div>
                    </div>
                    <img id="footer-avatar" className="	w-20 rounded-full" src="https://avatar.iran.liara.run/public/28" />
                </div>
                <span id="footer-brand"className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
                <p id="footer-copyright"className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
            </div>
        </div>
    );
}
