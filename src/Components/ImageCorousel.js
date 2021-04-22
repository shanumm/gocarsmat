import React, { useEffect } from "react";
import "../Styles/ImageCorousel.css";
import $ from "jquery";
import "slick-carousel";

export default function ImageCorousel() {
  useEffect(() => {
    $(document).ready(function () {
      $(".Modern-Slider").slick({
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        pauseOnDotsHover: true,
        cssEase: "linear",
        fade: true, // Disable This And Watch
        draggable: false,
        prevArrow: '<button class="PrevArrow"></button>',
        nextArrow: '<button class="NextArrow"></button>',
      });
    });
  });

  return (
    <div class="Modern-Slider">
      <div class="item">
        <div class="img-fill">
          <img
            src="https://images.unsplash.com/photo-1579494195278-d6cf52218c3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=792&q=80"
            alt=""
          />
          <div class="info">
            <div>
              <h3>lorem</h3>
              <h5>
                Lorem ipsum dolor sit amet.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="img-fill">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=847&q=80"
            alt=""
          />
          <div class="info">
            <div>
            <h3>lorem</h3>
              <h5>
                Lorem ipsum dolor sit amet.
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div class="item">
        <div class="img-fill">
          <img
            src="https://images.unsplash.com/photo-1590362891991-f776e747a588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
            alt=""
          />
          <div class="info">
            <div>
            <h3>lorem</h3>
              <h5>
                Lorem ipsum dolor sit amet.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="img-fill">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=847&q=80"
            alt=""
          />
          <div class="info">
            <div>
            <h3>lorem</h3>
              <h5>
                Lorem ipsum dolor sit amet.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
