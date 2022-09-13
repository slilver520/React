import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class MainSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots) => (
            <div
              style={{
                position: 'absolute',
                bottom: '-4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ul className="sliderUl"> {dots} </ul>
            </div>
          ),
          dotsClass: 'dots_custom'
        }
      return (
        <div className="sliderBox">
            <div className="mainText">
              <div className="mainText_inner">
                <h1>
                    안정적 가치창출과 만족을,   <br/>
                    기업 구성원의 꿈과  <br/>
                    성취를 함께하는 기업  <br/>
                </h1>
                <h4>재화와 서비스의 공급을 혁신하여 산업을 선도합니다.</h4>
              </div>
            </div>
          <Slider {...settings}>
            <div>
                <img src="./pho/slider_01.jpg" alt="slider_01"/>
            </div>
            <div>
                <img src="./pho/slider_02.jpg" alt="slider_02"/>
            </div>
            <div>
                <img src="./pho/slider_03.jpg" alt="slider_03"/>
            </div>
          </Slider>
        </div>
      );
    }
  }