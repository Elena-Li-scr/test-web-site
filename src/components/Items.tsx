import Item from "./Item";
import ItemsTitle from "./ItemsTitle";
import "./items.css"

export default function Items() {
    const items1 = [
        {
            img: "/assets/image/장수란.png",
            name: "장수란 30구",
            text: "자유 방목 난각 1번 1등급 무항생제 유정란",
            price: "15,900원",
            discount: "29,900원"
        },
        {
            img: "/assets/image/시골란.png",
            name: "시골란 30구",
            text: "HACCP 인증을 받은, 무항생제 특란",
            price: "7,500 원",
            discount: "29,900원"
        },
        {
            img: "/assets/image/고향란.png",
            name: "고향란 30구",
            text: "HACCP 인증을 받은, 무항생제 특란",
            price: "9,500 원",
            discount: "29,900원"
        },
        {
            img: "/assets/image/향토란.png",
            name: "향토란 30구",
            text: "HACCP 인증을 받은, 무항생제 영양란, 유정란",
            price: "9,950 원",
            discount: "29,900원"
        }
    ]
    return (
        <div className="items">
            <ItemsTitle green={true} text="농장에서 갓 수확한" text2="신선란" text3="을 그대로 담았습니다." />
            <div className="items-list">
                {items1.map((item, index) => (
                    <Item key={index} img={item.img} name={item.name} text={item.text} price={item.price} discount={item.discount} />
                ))}
            </div>
        </div>
    )
}