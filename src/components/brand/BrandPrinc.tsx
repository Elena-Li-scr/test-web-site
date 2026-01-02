import "./brandPrinc.css"
import EggTitle from "../shared/EggTitle"
import { princItems } from "../../temporary/var"
import PrincCard from "./PrincCard"

export default function BrandPrinc() {
    return (
        <div className="brand-princ">
            <img src="/assets/image/brand/ellipse-green.png" alt="ellipse-green" className="brand-princ-ellipse-green" />
            <div className="brand-main-title">
                <div className="brand-egg-title">
                    <EggTitle color="light-green-egg" />
                </div>
                <h3>
                    <span style={{ color: "#FF7900" }}>우리가족 건강식탁 에그팜</span><br />
                    고객님을 위해, <span style={{ color: "#5CB538" }}>정직하고 바르게 </span>판매합니다.</h3>
            </div>
            <p className="brand-main-text">에그팜은 정직하게 키운 계란만을 고집합니다<br />
                매일 신선하게, 우리 가족이, 우리 아이가 먹는다는 책임감으로
                늘 식탁 위 건강을 생각합니다.</p>
            <div className="princ-cards">
                <div className="princCards-list">
                    {princItems.map((item, index) => (
                        <PrincCard key={index} title={item.title} subtitle={item.subtitle} description={item.description} img={item.img} color={item.color} />
                    ))}
                </div>

            </div>
            <p className="brand-main-text-2"><span style={{ color: "#5CB538" }}>“정직한 유통, 건강한 식탁, 따뜻한 신뢰”</span>
                에그팜은 오늘도 고객님들의 행복과 신뢰를 위하여
                생각하고 행동합니다.</p>
        </div>
    )
}