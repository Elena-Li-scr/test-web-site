import Header from "../components/homePage/Header"
import BrandMain from "../components/brand/BrandMain"
import Footer from "../components/brand/Footer"
export default function Brand() {
    return (
        <div className="brand">
            <div className="brand-header"><Header white={true} /></div>
            <BrandMain />
            <Footer />
        </div>
    )
}