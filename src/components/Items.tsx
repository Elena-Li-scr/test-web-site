import Item from "./Item";
import ItemsTitle from "./ItemsTitle";
import Banner from "./Banner";
import "./items.css"
import { items1, items2 } from "../temporary/var";

export default function Items() {
    return (
        <div className="items">
            <ItemsTitle green={true} text="농장에서 갓 수확한" text2={
                <>
                    신선란<span className="particle">을</span>
                </>
            } text3="그대로 담았습니다." />
            <div className="items-list">
                {items1.map((item, index) => (
                    <Item key={index} img={item.img} name={item.name} text={item.text} price={item.price} discount={item.discount} />
                ))}
            </div>
            <br /><br /><br /><br />
            <ItemsTitle green={false} text="가치있고 행복한 한 끼," text2="간편식으로" text3="따뜻한 하루를 준비해요." />
            <div className="items-list">
                {items2.map((item, index) => (
                    <Item key={index} img={item.img} name={item.name} text={item.text} price={item.price} discount={item.discount} />
                ))}
            </div>
            <br /><br /><br /><br />

            <Banner />

        </div>
    )
}