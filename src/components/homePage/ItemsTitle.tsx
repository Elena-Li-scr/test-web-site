import EggTitle from "./EggTitle";
import type { ReactNode } from "react";
import "./itemsTitle.css";

interface Props {
    color: string;
    text: ReactNode;
    text2?: ReactNode;
    text3?: ReactNode;
    button?: boolean;
    onClick?: () => void;
}

export default function ItemsTitle({ color, text, text2, text3, button = true, onClick }: Props) {
    return (
        <div className="items-title">
            <div>
                <div className="items-title-img">
                    <EggTitle color={color} />
                </div>

                <div className="items-title-text-container">
                    <h3 className="items-title-text">
                        {text} <span style={{ color: "#5CB538" }}> {text2}</span>
                        <br />
                        {text3}
                    </h3>
                </div>
            </div>

            {button && <button className="items-title-button" onClick={onClick}>
                더보기
            </button>}
        </div>
    );
}