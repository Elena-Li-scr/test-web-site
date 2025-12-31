import "./brandPrinc.css"
import EggTitle from "../shared/EggTitle"
import { princItems, princItems2 } from "../../temporary/var"
import PrincCard from "./PrincCard"

export default function BrandPrinc() {
    return (
        <div className="brand-princ">
            <div className="brand-egg-title">
                <EggTitle color="green" />
            </div>
            <h3 className="brand-main-title"><span style={{ color: "#FF7900" }}>우리가족 건강식탁 에그팜</span><br />
                고객님을 위해, <span style={{ color: "#5CB538" }}>정직하고 바르게 </span>판매합니다.</h3>
            <p className="brand-main-text">에그팜은 정직하게 키운 계란만을 고집합니다<br />
                매일 신선하게, 우리 가족이, 우리 아이가 먹는다는 책임감으로
                늘 식탁 위 건강을 생각합니다.</p>
            <div className="princ-cards">
                <div className="princCards-list">
                    {princItems.map((item, index) => (
                        <PrincCard key={index} title={item.title} subtitle={item.subtitle} description={item.description} img={item.img} color={item.color} />
                    ))}
                </div>
                {/* <div className="princCards-list">
                    {princItems2.map((item, index) => (
                        <PrincCard key={index} title={item.title} subtitle={item.subtitle} img={item.img} />
                    ))}
                </div> */}
            </div>
        </div>
    )
}