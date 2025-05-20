import { createRoot } from "react-dom/client";
import TailWindCSS from "./TailwindCSS";
import LoginForm from "./UserForm";
import HitungGajiForm from "./HitungGajiForm";
import './tailwind.css'

createRoot(document.getElementById("root"))
    .render(
        <div>
            <TailWindCSS/>
            <LoginForm/>
            <HitungGajiForm/>
        </div>
    )