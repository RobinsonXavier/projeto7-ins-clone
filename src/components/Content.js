import React from "react";

import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

export default function Content () {
    return (
        <div class="content">
            <MainContent />
            <Sidebar />
        </div>
    )
}