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
            <h3 className="princ-card-title" style={{ color: color }}>{title}</h3>
            {subtitle && <h4 className="princ-card-subtitle">{subtitle}</h4>}
            {description && <p className="princ-card-description">{description}</p>}
        </div>
    )
}