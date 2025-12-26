import "./banner.css";

export default function Banner() {



    return (
        <div className="banner">
            <div className="banner-left">
                <img src="/assets/image/banner-logo.png" alt="banner-logo" className="banner-logo" />
                <p className="banner-left-text">매일 가치있고 행복한 한 끼를 즐길 수 있도록. <br />
                    <span style={{ color: "#5CB538" }}>에그팜</span>이, 간편식 명가 <span style={{ color: "#E7D887" }}>교동식품을 제안합니다.</span></p>
                <button className="banner-button">제품 바로가기</button>
            </div>
            <div className="banner-right">
                <p className="banner-right-text">난각 1번 자유방목, 우리 가족이 먹을 수 있는 안전 식품.
                    <br />

                    <span style={{ color: "#5CB538" }}>에그팜</span>
                    이, 안심하고 먹을 수 있는
                    <span style={{ color: "#E7D887" }}>장수란을 추천드립니다.</span></p>
                <button className="banner-button">제품 바로가기</button>
            </div>
        </div>
    )
}