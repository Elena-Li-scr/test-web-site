import "./mainCategories.css"
import CategoryItem from "./CategoryItem"
import EggTitle from "./EggTitle"
export default function MainCategories() {
    const categoryItems = [
        { img: "/assets/image/브랜드소개.png", text: "브랜드소개" },
        { img: "/assets/image/가맹점.png", text: "가맹점" },
        { img: "/assets/image/제품소개.png", text: "제품 소개" },
        { img: "/assets/image/공지사항.png", text: "공지사항" },
        { img: "/assets/image/fag.png", text: "FAG" },
    ]
    return (
        <div className="main-categories">
            <div className="main-categories-egg-title"><EggTitle color="green" /></div>
            <h3 className="main-categories-title">CATEGORY</h3>
            <p className="main-categories-text">
                <span style={{ color: "#5CB538" }}>EGG FARM </span>
                과 함께 <span style={{ color: "#EA7913" }}>건강한 식탁을</span> 만들어 보세요.
            </p>
            <img src="/assets/image/egg-brown-ellipse.png" alt="egg-brown-ellipse" className="main-categories-egg-brown-ellipse" />
            <div className="main-categories-category-items">
                {categoryItems.map((item, index) => (
                    <CategoryItem
                        key={index}
                        img={item.img}
                        text={item.text}
                    />
                ))}
            </div>

        </div>
    )
}