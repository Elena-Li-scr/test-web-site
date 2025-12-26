import { useEffect, useState } from "react";
import "./banner.css";

export default function Banner() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 850) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="banner">
            <div className="banner-left-container">
                <img src="/assets/image/banner-left.png" alt="banner-left" className="banner-left" />
            </div>
            {isMobile && <div className="banner-right-container">
                <img src="/assets/image/banner-right.png" alt="banner-right" className="banner-right" />
            </div>}
        </div>
    )
}