import "./itemReview.css"
import Rating from "./Rating";

interface EggInfo {
    img: string;
    name: string;
    rating: number;
}
interface Props {
    img: string;
    name: string;
    text: string;
    data: string;
    eggInfo: EggInfo;
}
export default function ItemReview({ img, name, text, data, eggInfo }: Props) {
    return (
        <div className="item-review">
            <img src={img} alt="item-img" className="item-reviewimg" />
            <h3 className="item-review-name">{name}</h3>
            <p className="item-review-text">{text}</p>
            <p className="item-data">사용자  |  {data}</p>
            <div className="egg-info-container">
                <img src={eggInfo.img} alt="egg-info-img" className="egg-info-img" />
                <div className="egg-info-text">
                    <p className="egg-info-name">{eggInfo.name}</p>
                    <Rating rating={eggInfo.rating} />
                </div>
            </div>
        </div>
    )
}   