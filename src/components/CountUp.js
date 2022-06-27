import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const easeOutCubic = (t) => --t * t * t + 1;

const CountUp = (props) => {
  const renderRef = useRef(false);
  const [count, setCount] = useState(0);
  const { id = "", end = 0, delay: duration = 0, text = "", unit = "" } = props;

  useEffect(() => {
    if (!renderRef.current) {
      renderRef.current = true;
    } else {
      const numberElement = document.getElementById(id);
      const initTime = performance.now();
      let interval = setInterval(() => {
        let time = (performance.now() - initTime) / duration;

        let currentValue = Math.floor(easeOutCubic(time) * end);
        //numberElement.innerText = `${currentValue}만 ${unit}`;
        numberElement.style.fontWeight = "bold";
        setCount(+currentValue);

        if (time >= 1) {
          clearInterval(interval);
        }
      }, 30);
    }
  }, [id, end, duration, text, unit]);

  return (
    <CountWrap>
      {/* <span id={id}>{0}</span>
      {text} */}
      <span id={id}>
        {count}만 {unit}
      </span>
      {text}
    </CountWrap>
  );
};

export default CountUp;

const CountWrap = styled.div`
  color: rgb(58, 58, 58);
  font-family: sans-serif;

  @media (min-width: 1142px) {
    font-size: 36px;
    letter-spacing: -1px;
    margin-bottom: 20px;
  }
`;
