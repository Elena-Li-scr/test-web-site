import "./categoryItem.css"
export default function CategoryItem({ img, text }: { img: string, text: string }) {

    return (
        <div className="category-item">
            <img src={img} alt="category-item-img" className="category-item-img" />
            <p className="category-item-text">{text}</p>
        </div>
    )
}