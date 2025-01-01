
import  { useRef } from "react";
import Slider from "react-slick";
import January from "./January";
import February from "./February";
import March from "./March";
import April from "./April";
import May from "./May";
import June from "./June";
import July from "./July";
import August from "./August";
import September from "./September";
import October from "./October";
import November from "./November";
import December from "./December";

function Month() {
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <>
    <div className="md:text-7xl text-4xl bg-slate-50 border-2 border-red-900 text-orange-700 font-bold flex justify-center p-2">SSS ANUAL CALENDER</div>
        <div className="slider-container">
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div key={1}>
          <January/>
        </div>
        <div key={2}>
          <February/>
        </div>
        <div key={3}>
          <March/>
        </div>
        <div key={4}>
          <April/>
        </div>
        <div key={5}>
          <May/>
        </div>
        <div key={6}>
          <June/>
        </div>
        <div key={7}>
         <July/>
        </div>
        <div key={8}>
          <August/>
        </div>
        <div key={9}>
          <September/>
        </div>
        <div key={10}>
          <October/>
        </div>
        <div key={11}>
          <November/>
        </div>
        <div key={12}>
          <December/>
        </div>
      </Slider>
      <div style={{ textAlign: "center" }}>
        <button className="button md:m-12 bg-green-600 p-4 rounded-lg" onClick={previous}>
          Previous
        </button>
        <button className="button md:m-12 bg-green-600 px-6 py-4 rounded-lg" onClick={next}>
          Next
        </button>
      </div>
    </div> 
    </>
  )
}

export default Month