import "./item.css"
interface Props {
    img: string;
    name: string;
    text: string;
    price: string;
    discount: string;
}

export default function Item({ img, name, text, price, discount }: Props) {
    return (
        <div className="item">
            <div className="item-img-container"><img src={img} alt="item-img" className="item-img" /></div>
            <h3 className="item-name">{name}</h3>
            <p className="item-text">{text}</p>
            <div className="all-price">
                <p className="item-price">{price}</p>
                <p className="item-discount">{discount}</p>
            </div>
        </div>
    )
}