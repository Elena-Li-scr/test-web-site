interface Props {
  text: string;
  address: string;
  mark: boolean;
  img: string;
}

import "./infoItem.css";

export default function InfoItem({ text, address, mark, img }: Props) {
  return (
    <div
      className="item-info-container"
      style={{ backgroundImage: `url(${img})` }}
    >
      {mark && <img src="/assets/image/mark.png" alt="mark" className="mark" />}
      <div className="item-info">
        <h6>{text}</h6>
        <p>{address}</p>
      </div>
    </div>
  );
}
