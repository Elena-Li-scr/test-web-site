import { useNavigate } from "react-router-dom";
import "./navigation.css";
import { menuItems } from "../../temporary/var";
export default function Navigation({ onClose, white }: { onClose: (open: boolean) => void, white?: boolean }) {
    const navigate = useNavigate();

    const handleMenuClick = (path: string) => {
        navigate(path);
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
                        className={`nav-item`}
                    >
                        <button
                            className={white ? "nav-link nav-link-white" : "nav-link"}
                            onClick={() => handleMenuClick(item.path)}
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