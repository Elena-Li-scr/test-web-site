import EggTitle from "./EggTitle";
import type { ReactNode } from "react";
import "./itemsTitle.css";

interface Props {
    green: boolean;
    text: ReactNode;
    text2: ReactNode;
    text3: ReactNode;
    onClick?: () => void;
}

export default function ItemsTitle({ green, text, text2, text3, onClick }: Props) {
    return (
        <div className="items-title">
            <div>
                <div className="items-title-img">
                    <EggTitle green={green} />
                </div>

                <div className="items-title-text-container">
                    <h3 className="items-title-text">
                        {text} <span style={{ color: "#5CB538" }}> {text2}</span>
                        <br />
                        {text3}
                    </h3>
                </div>
            </div>

            <button className="items-title-button" onClick={onClick}>
                더보기
            </button>
        </div>
    );
}