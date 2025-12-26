import EggTitle from "./EggTitle";
import "./itemsTitle.css"

interface Props {
    green: boolean;
    text: string;
    text2: string;
    text3: string;
    onClick?: () => void;
}
export default function ItemsTitle({ green, text, text2, text3, onClick }: Props) {
    return (
        <div className="items-title">
            <div className="items-title-img">
                <EggTitle green={green} />
            </div>
            <div className="items-title-text-container">
                <h3 className="items-title-text">{text}
                    <span style={{ color: "#5CB538" }}> {text2}</span>
                    을 <br />
                    {text3}
                </h3>
                <button className="items-title-button" onClick={onClick}>더보기</button>
            </div>
        </div>
    )
}