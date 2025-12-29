import { useState } from "react";
import "./navigation.css";
import { menuItems } from "../../temporary/var";
export default function Navigation({ onClose }: { onClose: (open: boolean) => void }) {
    const [activeMenu, setActiveMenu] = useState('brand');

    const handleMenuClick = (menuId: string) => {
        setActiveMenu(menuId);
    };

    return (
        <nav className="main-navigation">
            <button type="button" onClick={() => onClose(false)} className="close-icon">
                <img src="/assets/image/close.png" alt="close" />
            </button>
            <ul className="nav-menu">
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        className={`nav-item ${activeMenu === item.id ? 'active' : ''}`}
                    >
                        <button
                            className="nav-link"
                            onClick={() => handleMenuClick(item.id)}
                            aria-label={item.label}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}