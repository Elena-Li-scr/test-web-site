import EggTitle from "../shared/EggTitle";
import LogoInfo from "./LogoInfo";
import { brandLogoInfo1, brandLogoInfo2 } from "../../temporary/var";
import "./brandLetter.css"
import "./brandLogoInfo.css"

export default function BrandLogoInfo() {
    return (
        <div className="brand-logo-info">
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

        </div>
    );
}   