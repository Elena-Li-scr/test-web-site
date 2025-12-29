import "./mainHead.css"


export default function MainHead() {
    return (
        <div className="main-head">
            <div className="main-head-text-container">
                <h1 className="main-head-title">오늘도 고객님의 <br />
                    <span style={{ color: "#EA7913" }}>건강한 하루를 생각하는<br /></span>
                    <span style={{ color: "#5CB538" }}>‘에그팜’입니다.</span>
                </h1>
                <div className="main-head-text-container__line"></div>
                <p>안녕하세요, 오늘도 고객님들을 생각하는<br />
                    <span style={{ color: "#5CB538" }}>주식회사 에그팜 입니다.</span></p>
            </div>
            <img src="/assets/image/egg-main-header-s.png" alt="egg-main-header-s" className="main-head-egg-pic" />
            <img src="/assets/image/egg-main-header-b.png" alt="egg-main-header-b" className="main-head-egg-b" />
            <img src="/assets/image/logo.png" alt="main--head-logo" className="main-head-logo" />
            <img src="/assets/image/ellipse-logo.png" alt="ellipse-logo" className="ellipse-logo" />
            <img src="/assets/image/brown-ellipse.png" alt="brown-ellipse" className="main-head-brown-ellipse" />
            <img src="/assets/image/green-ellipse-b.png" alt="green-ellipse-b" className="main-head-green-ellipse-b" />
            <img src="/assets/image/egg-green.png" alt="egg-green" className="main-head-egg-green" />
            <img src="/assets/image/green-ellipse-s.png" alt="green-ellipse-s" className="main-head-green-ellipse-s" />
            <p className="main-head-text">
                왜? <span style={{ color: "#5CB538" }}>에그팜</span>인가요?
            </p>
            <p className="main-head-text-2">
                에그팜은 계란의 신선도와 위생을
                <br />
                최우선적으로 유지하기위해 노력하는
                <span style={{ color: "#5CB538" }}> 정직한 브랜드입니다.</span>
            </p>
            <div className="main-head-button-container"><button className="main-head-button">브랜드정보 더보기</button></div>
        </div>
    )
}