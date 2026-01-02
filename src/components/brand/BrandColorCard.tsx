import "./brandColorCard.css"

interface Props {
    color: string;
    title: string;
    text: string;
    text2?: string;
    img?: string
}

export default function BrandColorCard({ color, title, text, text2, img }: Props) {
    return (
        <div className="brand-color-card">
            <div className="brand-color-card-img" style={{ backgroundImage: `url(${img})` }}>
                <img src="/assets/image/brand/logo-bg-no.png" alt="" />
            </div>
            <p className="brand-color-card-title" style={{ color: color }}>{title}</p>
            <p className="brand-color-card-text">{text}<span style={{ color: color }}>{text2}</span></p>
        </div>
    );
}