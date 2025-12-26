import "./eggTitle.css"
export default function EggTitle({ green }: { green: boolean }) {
    return (
        <div className="egg-title">
            <img src={green ? "/assets/image/egg-green.png" : "/assets/image/egg-brown.png"} alt="egg-img" className="egg-img" />
            <img src={green ? "/assets/image/green-ellipse-s.png" : "/assets/image/brown-ellipse-s.png"} alt="ellipse-img" className="ellipse-img" />
        </div>
    )
}