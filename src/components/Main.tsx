import MainHead from "./MainHead";
import MainCategories from "./MainCategories";
import Items from "./Items";
import Info from "./Info";
import "./main.css"

export default function Main() {

    return (
        <main className="main">
            <MainHead />
            <MainCategories />
            <Items />
            <Info />
        </main>
    )
}