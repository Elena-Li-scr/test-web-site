import { useState } from "react";
import "./navigation.css";
export default function Navigation({ onClose }: { onClose: (open: boolean) => void }) {
    const [activeMenu, setActiveMenu] = useState('brand');
    const menuItems = [
        { id: 'brand', label: '브랜드', path: '/brand' },
        { id: 'products', label: '제품 소개', path: '/products' },
        { id: 'franchise', label: '가맹점', path: '/franchise' },
        { id: 'customer', label: '고객센터', path: '/customer' },
        { id: 'order', label: '주문관리', path: '/order' }
    ]

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