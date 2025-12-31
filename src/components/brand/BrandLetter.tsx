import EggTitle from "../shared/EggTitle"
import "./brandLetter.css"

export default function BrandLetter() {
    return (
        <div className="brand-letter">
            <div className="brand-letter-container">
                <div className="brand-letter-title">
                    <div className="egg-letter-title">
                        <EggTitle color="light-green-egg" />
                    </div>
                    <h1>대표 인사말</h1></div>
                <h2 className="brand-letter-subtitle">에그팜으로 오늘도 건강한 식탁이되시길 바라는 마음으로 만들었습니다</h2>
                <p className="brand-letter-text">안녕하세요. 우리가족건강식탁을 찾아주신 여러분께 진심으로 감사의 인사를 드립니다<br />
                    <span style={{ color: "#5CB538" }}>에그팜은 단순한 식품 브랜드가 아닌, “내 가족이 먹는다는 마음”으로 건강한 식탁을 만드는 기업입니다</span><br />
                    우리는 고객 한 분 한 분의 식탁을 내 집처럼 소중히 여기며, 좋은 식재료와 정직한 제조 방식을 고집해왔습니다<br />
                    모든 과정에서 “내 아이와 부모님이 먹는 음식이라면?”이라는 질문을 스스로에게 던지며, 이익이나 유행보다 본질과 신뢰를 지키는 것을 가장 중요한 가치로 삼고 있습니다<br />
                    이러한 철학은 에그팜이라는 이름에 담긴 진심이며, 정직함과 따뜻한 마음으로 고객의 일상에 스며드는 브랜드가 되고자 합니다<br />
                    앞으로도 고객 여러분과 함께 지속 가능한 건강한 식문화를 만들어가겠습니다 감사합니다.</p>
                <img src="/assets/image/brand/sentence.png" alt="sentence" className="brand-letter-img" />
            </div>
            <img src="/assets/image/brand/center-img.png" alt="center-img" className="brand-center-img" />
        </div>
    )
}  