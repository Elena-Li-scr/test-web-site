import "./brandMain.css"

import BrandMainHead from "./BrandMainHead"
import BrandPrinc from "./BrandPrinc"
import BrandLetter from "./BrandLetter"
import BrandLogoInfo from "./BrandLogoInfo"
import Map from "./Map"

export default function BrandMain() {
    return (
        <div className="brand-main">
            <BrandMainHead />
            <BrandPrinc />
            <BrandLetter />
            <BrandLogoInfo />
            <Map />
        </div>
    )
}