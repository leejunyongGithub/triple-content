import React, { useEffect } from "react";
import styled from "styled-components";
import triple_img from "../assets/img/triple2x.png";
import and_img from "../assets/img/play-store2x.png";
import ios_img from "../assets/img/badge-apple4x.png";
import CountUp from "../components/CountUp";

const TripleContent = () => {
  useEffect(() => {
    ["image-content", "text-content", "awards-content"].forEach(
      (item, index) => {
        const delay = ((index+1) * 800)/2;
        setTimeout(() => {
          document.getElementById(item).style.display = "block";
          document.getElementById(item).style.animation = "fadeInUp 700ms";
        }, delay);
      }
    );
  }, []);

  return (
    <MainWrap>
      <div className="layout">
        <div id="image-content" className="image-wrap">
          2021년 12월 기준
        </div>
        <div id="text-content" className="content-text-wrap">
          <div className="count-wrap">
            <CountUp
              id="count_up_01"
              start={0}
              end={700}
              delay={2000}
              unit={"명"}
              text={`의 여행자`}
            />
            <CountUp
              id="count_up_02"
              start={0}
              end={100}
              delay={2000}
              unit={"개"}
              text={`의 여행리뷰`}
            />
            <CountUp
              id="count_up_03"
              start={0}
              end={470}
              delay={2000}
              unit={"개"}
              text={`의 여행 일정`}
            />
          </div>
        </div>
        <div id="awards-content" className="awards-wrap">
          <div className="awards-and">
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </div>
          <div className="awards-ios">
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </div>
        </div>
      </div>
    </MainWrap>
  );
};

export default TripleContent;

const MainWrap = styled.div`
  min-width: 1200px;
  height: 552px;
  position: relative;
  overflow: hidden;
  background-image: inherit;
  background-repeat: inherit;
  background-attachment: inherit;
  background-origin: inherit;
  background-clip: inherit;
  background-color: inherit;
  background-size: cover;
  background-position: center center;

  @media (min-width: 1142px) {
    .layout {
      width: 1040px;
      height: auto;
    }
  }

  .content-text-wrap {
    display: none;
    @media (min-width: 1142px) {
      margin-left: 623px;
      padding-top: 150px;
    }
  }

  .layout {
    margin: 0px auto;
    position: relative;
  }

  .image-wrap {
    display: none;
    background-image: url(${triple_img});
    background-repeat: no-repeat;
    position: absolute;
    top: 150px;
    width: 400px;
    height: 338px;
    background-size: 400px 338px;
    padding-top: 280px;
    font-size: 15px;
    text-align: center;
    font-family: sans-serif;
    color: rgba(58, 58, 58, 0.7);
  }

  .awards-and {
    display: inline-block;
    font-family: sans-serif;
    background-image: url(${and_img});
    background-position: left top;
    background-repeat: no-repeat;
    color: rgba(58, 58, 58, 0.8);
    font-weight: bold;

    @media (min-width: 1142px) {
      background-size: 54px 54px;
      height: 54px;
      padding: 5px 0px 5px 62px;
      font-size: 14px;
      line-height: 22px;
      margin-right: 39px;
    }
  }

  .awards-ios {
    display: inline-block;
    font-family: sans-serif;
    background-image: url(${ios_img});
    background-position: left top;
    background-repeat: no-repeat;
    color: rgba(58, 58, 58, 0.8);
    font-weight: bold;

    @media (min-width: 1142px) {
      background-size: 54px 54px;
      height: 54px;
      padding: 5px 0px 5px 62px;
      font-size: 14px;
      line-height: 22px;
      margin-right: 39px;
    }
  }

  .awards-wrap {
    display: none;
    white-space: nowrap;
    @media (min-width: 1142px) {
      margin: 50px 0px 140px 623px;
    }
  }
`;
