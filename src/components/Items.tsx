import Item from "./Item";
import ItemsTitle from "./ItemsTitle";
import ItemReview from "./ItemReview";
import Banner from "./Banner";
import "./items.css"
import { items1, items2, items3 } from "../temporary/var";

export default function Items() {
    return (
        <div className="items">
            <ItemsTitle color="green" text="농장에서 갓 수확한" text2={
                <>
                    신선란<span className="particle">을</span>
                </>
            } text3="그대로 담았습니다." />
            <div className="items-list">
                {items1.map((item, index) => (
                    <Item key={index} img={item.img} name={item.name} text={item.text} price={item.price} discount={item.discount} />
                ))}
            </div>
            <br /><br /><br />
            <ItemsTitle color="brown" text="가치있고 행복한 한 끼," text2="간편식으로" text3="따뜻한 하루를 준비해요." />
            <div className="items-list">
                {items2.map((item, index) => (
                    <Item key={index} img={item.img} name={item.name} text={item.text} price={item.price} discount={item.discount} />
                ))}
            </div>
            <br /><br />
            <Banner />
            <br /><br />
            <ItemsTitle color="brown2" text={
                <>
                    다양한 고객님들이 남겨주신 <br /><span style={{ color: "#EA7913" }}>소중한 후기</span>입니다.
                </>
            } button={false} />
            <div className="items-list">
                {items3.map((item, index) => (
                    <ItemReview key={index} img={item.img} name={item.name} text={item.text} data={item.data} eggInfo={item.eggInfo} />
                ))}
            </div>

        </div>
    )
}