
import Logo from "./Logo";
import { useState, useEffect } from "react";
import "./header.css";
import Navigation from "./Navigation";
export default function Header({ white }: { white?: boolean }) {
    const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth > 850);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 850) {
                setIsMenuOpen(true);
            } else {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <header className={isMenuOpen ? "main-header-active" : "main-header"} >
            {!isMenuOpen && <button type="button" onClick={() => setIsMenuOpen(true)} className="menu-icon">
                {white ? <img src="/assets/image/menu-bar-white.png" alt="menu-bar" /> : <img src="/assets/image/menu-bar.png" alt="menu-bar" />}
            </button>}
            <Logo />
            {isMenuOpen && <Navigation onClose={setIsMenuOpen} white={white} />}
            {isMenuOpen && <div
                className="overlay"
                onClick={() => setIsMenuOpen(false)}
            />}
        </header>
    )
}
