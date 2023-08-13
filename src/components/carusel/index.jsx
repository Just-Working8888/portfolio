import React, { useEffect, useState } from 'react';

function Carousel() {
  const [x, setX] = useState(0);
  const [x2, setX2] = useState(0);
  const speed = 1;
  const width = 500; // You can adjust this value to set the width of the carousel

  useEffect(() => {
    function moveFirst() {
      setX((prevX) => prevX - speed);

      if (width >= Math.abs(x)) {
        list.style.left = `${x}px`;
      } else {
        setX(width);
      }
    }

    function moveSecond() {
      setX2((prevX2) => prevX2 - speed);

      if (list.offsetWidth >= Math.abs(x2)) {
        list.style.left = `${x2}px`;
      } else {
        setX2(width);
      }
    }

    const list = document.querySelector('.carousel__list');
    const carouselSlider = document.querySelector('.carousel__slider');
    const interval = setInterval(moveFirst, 10);
    const interval2 = setInterval(moveSecond, 10);

    function clone() {
      const list2 = list.cloneNode(true);
      carouselSlider.appendChild(list2);
      list2.style.left = `${width}px`;
    }

    clone();

    carouselSlider.addEventListener('mouseenter', hover);
    carouselSlider.addEventListener('mouseleave', unhover);

    let a, b;

    function hover() {
      clearInterval(a);
      clearInterval(b);
    }

    function unhover() {
      a = setInterval(moveFirst, 10);
      b = setInterval(moveSecond, 10);
    }

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
      carouselSlider.removeEventListener('mouseenter', hover);
      carouselSlider.removeEventListener('mouseleave', unhover);
    };
  }, [width, x, x2]);

  return (
    <section className="carousel">
      <div className="carousel__slider">
        <ul className="carousel__list">
          <li className="carousel__item">
            <span>1</span>
          </li>
          <li className="carousel__item">
            <span>2</span>
          </li>
          <li className="carousel__item">
            <span>3</span>
          </li>
          <li className="carousel__item">
            <span>4</span>
          </li>
          <li className="carousel__item">
            <span>5</span>
          </li>
          <li className="carousel__item">
            <span>6</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Carousel;
