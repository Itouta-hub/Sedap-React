import { createRoot } from "react-dom/client";
// import FrameworkList from "./FrameworkList";
import FrameworkList from "./FrameworkListSearchFilter";
import ResponsiveText from "./ResponsiveDesign"
import './tailwind.css'

createRoot(document.getElementById("root"))
    .render(
        <div>
            <FrameworkList/>
            {/* <ResponsiveText/> */}
        </div>
    )