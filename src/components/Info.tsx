import ItemsTitle from "./ItemsTitle";
import "./info.css";

export default function Info() {
    return (
        <div className="info">
            <ItemsTitle color="brown3" text="신규 가맹점" button={false} />
            <p className="info-text">작은 공간, 소자본으로도 시작할 수 있어요.
                에그팜의 새로운 가족이 되어보세요.</p>
            <div className="items-info-list">
                <div className="item-info">
                    <h6>삼전동 2호점</h6>
                    <p>서울 송파구 삼전동 163-17</p>
                </div>
            </div>
        </div>
    )
}