import Spline from "@splinetool/react-spline";
import "../assets/styles/banner.css"
export default function Banner() {
  return (
    <div className="banner-3d">
      <div className="spline-canvas">
      <Spline
        scene="https://prod.spline.design/1oruRGUY018HVxub/scene.splinecode" 
        width={1670}
        height={701}
      />
      </div>
    </div>
  );
}
