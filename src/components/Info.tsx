import ItemsTitle from "./ItemsTitle";
import InfoItem from "./InfoItem.tsx";
import NoticeItem from "./NoticeItem.tsx";
import { noticeItems } from "../temporary/var.tsx";
import "./info.css";

import { items4 } from "../temporary/var.tsx";

export default function Info() {
  return (
    <div className="info">
      <ItemsTitle color="brown3" text="신규 가맹점" button={false} />
      <p className="info-text">
        작은 공간, 소자본으로도 시작할 수 있어요. <br />
        에그팜의 새로운 가족이 되어보세요.
      </p>
      <div className="items-info-list">
        {items4.map((item, index) => (
          <InfoItem
            key={index}
            img={item.img}
            text={item.text}
            mark={item.mark}
            address={item.address}
          />
        ))}
        <div className="call-info">
          <p>
            에그팜과 함께할 <br />
            가족이 되고 싶으시다면?
          </p>
          <div className="call-info-phone">
            <div>
              <img src="/assets/image/green-phone.png" alt="green-phone" />
              <p>가맹문의</p>
            </div>
            <p>1588-4654</p>
          </div>
        </div>
      </div>
      <button className="phone-button" type="button">
        <img src="/assets/image/green-phone.png" alt="green-phone" />
        가맹문의
      </button>
      <div className="notice-container">
        <div className="notice-header">
          <img src="" alt="" className="notice-header-img" />
          <h5>공지사항</h5>
        </div>
        <div className="notice-items">
          {noticeItems.map((item, index) => (
            <NoticeItem key={index} text={item.text} time={item.time} />
          ))}
        </div>
      </div>
    </div>
  );
}
