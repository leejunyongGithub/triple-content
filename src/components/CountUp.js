import React, { useEffect } from "react";
import styled from "styled-components";

const easeOutCubic = (t) => --t * t * t + 1;

const CountUp = (props) => {
  const { id = "", end = 0, delay: duration = 0, text = "", unit = "" } = props;

  useEffect(() => {
    const numberElement = document.getElementById(id);
    const initTime = performance.now();
    let interval = setInterval(() => {
      let t = (performance.now() - initTime) / duration;

      let currentValue = Math.floor(easeOutCubic(t) * end);
      numberElement.innerText = `${currentValue}만 ${unit}`;
      numberElement.style.fontWeight = "bold";

      if (t >= 1) {
        clearInterval(interval);
      }
    }, 30);
  }, []);

  return (
    <CountWrap>
      <span id={id}>{0}</span>
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
