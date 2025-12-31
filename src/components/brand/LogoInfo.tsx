import "./logoInfo.css"

interface Props {
    title: string;
    img: string;
    button1?: () => void;
    button2?: () => void;
    small?: boolean;
}



export default function LogoInfo({ title, img, button1, button2, small }: Props) {
    return (
        <div className="logo-info">
            <div className="logo-info-title">{title}</div>
            <div className={small ? "logo-info-pic-small logo-info-pic" : "logo-info-pic"}>
                <img src={img} alt="logo" />
            </div>
            <div className="logo-info-buttons">
                <button onClick={button1}><p>AI 파일 다운로드</p><img src="/assets/image/brand/download.png" alt="download" /></button>
                <button onClick={button2}><p>JPG 파일 다운로드</p><img src="/assets/image/brand/download.png" alt="download" /></button>
            </div>
        </div>
    );
}   