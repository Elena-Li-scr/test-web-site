import "./noticeItem.css";
interface Props {
  text: string;
  time: string;
}

export default function NoticeItem({ text, time }: Props) {
  return (
    <div className="noticeItem">
      <div className="noticeItem-text">
        <p>{text}</p>
        <p className="noticeItem-time">&bull;{time}</p>
      </div>
      <button className="noticeItem-button">더보기</button>
    </div>
  );
}
