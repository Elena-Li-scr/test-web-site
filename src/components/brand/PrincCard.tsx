import "./princCard.css"

interface Props {
    title: string;
    subtitle?: string;
    description?: string;
    img: string;
    color?: string;
}

export default function BrandPrinc({ title, subtitle, description, img, color }: Props) {
    return (
        <div className="princ-card" style={{ backgroundImage: `url(${img})` }}>
            <h3 style={{ color: color }}>{title}</h3>
            {subtitle && <h4>{subtitle}</h4>}
            {description && <p>{description}</p>}
        </div>
    )
}