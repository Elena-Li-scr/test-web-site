import EggTitle from "../shared/EggTitle";
import LogoInfo from "./LogoInfo";
import BrandColorCard from "./BrandColorCard";
import { brandLogoInfo1, brandLogoInfo2, brandColorInfo } from "../../temporary/var";
import "./brandLetter.css"
import "./brandLogoInfo.css"

export default function BrandLogoInfo() {
    return (
        <div className="brand-logo-info">
            <img src="/assets/image/brand/ellipse-brown-big.png" alt="ellipse-brown-big" className="brand-logo-info-ellipse-brown-big" />
            <img src="/assets/image/brand/ellipse-brown.png" alt="ellipse-brown" className="brand-logo-info-ellipse-brown" />
            <div className="brand-letter-title">
                <div className="egg-letter-title">
                    <EggTitle color="light-green-egg" />
                </div>
                <h1>에그팜의 따스한 <span style={{ color: "#FF7900" }}>첫인상</span></h1>
            </div>
            <p className="brand-logo-info-text">에그팜의 로고와 브랜드 컬러는 <div className="brand-logo-gap"></div>
                <span style={{
                    color: "#5CB538"
                }}>고객님께 전하는 저희의 첫 번째 인사입니다.</span><div className="brand-logo-gap"></div><br />

                단순하면서도 정직한 선과 주황, 녹색 색채는 에그팜이 가진 진심과 따뜻함을 그대로 담아내고자 하는 마음을 표현합니다.
            </p>
            <div className="brand-logo-type">
                <div className="brand-logo-type-title">로고 타입</div>
                <div className="brand-logo-type-main">
                    <ul className="brand-logo-type-main-text"><li>에그팜 로고는 임의로 변경, 변형, 왜곡할 수 없으며,
                        항상 원본 비율을 유지해주세요.</li>
                        <li>로고는 에그팜의 이미지 훼손 가능성이 있는 용도나 부적절한 콘텐츠와 함께 사용할 수 없습니다.</li>
                        <li>상업적 사용 및 재배포 시에는 반드시 사전 허가를 받아야 하며, 출처 표기를 권장합니다.</li>
                    </ul>
                    <div className="brand-logo-type-pic">
                        <div className="brand-logo-type-pic-eng">
                            {brandLogoInfo1.map((item, index) => (
                                <LogoInfo key={index} title={item.title} img={item.img} small={item.small} />
                            ))}
                        </div>
                        <div className="brand-logo-type-pic-kor">
                            {brandLogoInfo2.map((item, index) => (
                                <LogoInfo key={index} title={item.title} img={item.img} small={item.small} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="brand-color-type">
                <div className="brand-color-type-title">Color System</div>
                <div className="brand-color-type-main">
                    <ul className="brand-color-type-main-text"><li>정해진 색상 코드와 비율을 기준으로 사용해 주시고, 임의로 색상을
                        변경하거나 혼합이 불가합니다.

                    </li>
                        <li>브랜드 컬러는 로고, 배경, 인쇄물, 온라인 콘텐츠 등 모든 시각 매체에서 일관되게 유지되어야 합니다.</li>
                        <li>컬러 사용 시 가독성, 명도 대비, 배경 조화를 고려해 브랜드 이미지가 왜곡되지 않도록 주의해 주세요.</li>
                    </ul>
                    <div className="brand-color-type-pic">
                        {brandColorInfo.map((item, index) => (
                            <BrandColorCard key={index} color={item.color} title={item.title} text={item.text} text2={item.text2} img={item.img} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}   