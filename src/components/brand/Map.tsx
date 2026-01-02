import "./map.css"
import "../brand/brandLetter.css"
import EggTitle from "../shared/EggTitle";

export default function Map() {
    return (
        <div className="map">
            <div className="map-title-container">
                <div className="brand-letter-title">
                    <div className="egg-letter-title">
                        <EggTitle color="light-green-egg" />
                    </div>
                    <h1>오시는 길</h1>
                </div>
                <p className="brand-logo-info-text">에그팜에 방문해주셔서 감사합니다. <br />찾아오시는 데 불편 없도록 위치 정보를 안내드립니다.</p></div>
            <div className="map-main-container">
                <img src="/assets/image/brand/ellipse-green.png" alt="ellipse-green" className="map-ellipse-green-down" />
                <img src="/assets/image/brand/ellipse-right.png" alt="ellipse-right" className="map-ellipse-right" />
                <div className="map-img-container">
                    <img src="/assets/image/brand/map.png" alt="map" className="map-img" />
                    <img src="/assets/image/brand/s-map.png" alt="map" className="map-img-s" />
                    <img src="/assets/image/brand/point.png" alt="map" className="map-img-point" />
                </div>
                <div className="map-info-container-right">
                    <div className="map-info-container">
                        <div className="map-info">
                            <h5 className="map-info-title">사옥 본점</h5>
                            <div className="map-info-title-text">
                                <img src="/assets/image/brand/grey-point.png" alt="point" className="map-info-title-text-img" />
                                <p>서울 송파구 삼학사로1길 54 1층 101호</p>
                            </div>
                        </div>
                        <ul className="map-info-text">
                            <li>석촌고분역 4번출구에서 도보 10분</li>
                            <li>3315 버스 삼전동 쌍용 하이츠빌라 하차후 도보 1분</li>
                        </ul>
                    </div>
                    <div className="map-contacts-container">
                        <h5 className="map-info-title-contact">문의</h5>
                        <div className="map-info-title-text">
                            <div>
                                <img src="/assets/image/brand/grey-phone.png" alt="point" style={{ width: "14.84px", height: "14.84px" }} />
                            </div>
                            <p>1588-4654</p>
                        </div>
                        <div className="map-info-title-text">
                            <div><img src="/assets/image/brand/grey-mail.png" alt="point" style={{ width: "15.58px", height: "11.69px" }} /></div>
                            <p>eggfarmaccount@naver.com</p>
                        </div>
                        <div className="map-info-title-text">
                            <div><img src="/assets/image/brand/grey-printer.png" alt="point" style={{ width: "24px", height: "24px" }} /></div>
                            <p>123123123123</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}