import "./eggTitle.css"
export default function EggTitle({ color }: { color: string }) {
    return (
        <div className="egg-title">
            <img src={color === "green" ? "/assets/image/egg-green.png" : color === "brown" ? "/assets/image/egg-brown.png" : color === "brown2" ? "/assets/image/egg-brown2.png" : "/assets/image/egg-brown3.png"} alt="egg-img" className="egg-img" />
            <img src={color === "green" ? "/assets/image/green-ellipse-s.png" : color === "brown" ? "/assets/image/brown-ellipse-s.png" : color === "brown2" ? "/assets/image/brown2-ellipse-s.png" : "/assets/image/brown3-ellipse-s.png"} alt="ellipse-img" className="ellipse-img" />
        </div>
    )
}