import "./brandMain.css"

import BrandMainHead from "./BrandMainHead"
import BrandPrinc from "./BrandPrinc"
import BrandLetter from "./BrandLetter"
import BrandLogoInfo from "./BrandLogoInfo"

export default function BrandMain() {
    return (
        <div className="brand-main">
            <BrandMainHead />
            <BrandPrinc />
            <BrandLetter />
            <BrandLogoInfo />
        </div>
    )
}