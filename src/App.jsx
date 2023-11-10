
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import StatusBox from "./components/StatusBox/StatusBox";
import i18n from "./i18next";
import { useState, useEffect } from "react";

export default function App() {
    const [isRtl, setIsRtl] = useState(i18n.dir() === "rtl");
    useEffect(() => {
        if (isRtl) {
            document.body.dir = "rtl";
        } else {
            document.body.dir = "ltr";
        }
    }, [isRtl]);
    return (
        <>
            <Navbar isRtl={isRtl} setIsRtl={setIsRtl} />
            <StatusBox />
        </>
    )
}
