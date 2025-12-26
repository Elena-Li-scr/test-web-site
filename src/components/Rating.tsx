import "./rating.css"

interface Props {
    rating: number;
}

export default function Rating({ rating }: Props) {
    return (
        <div className="stars">
            {Array.from({ length: 5 }).map((_, i) => (
                <img
                    key={i}
                    className="star"
                    src={i < rating ? "/assets/image/star-gold.png" : "/assets/image/star.png"}
                    alt="star"
                />
            ))}
        </div>
    )
}   