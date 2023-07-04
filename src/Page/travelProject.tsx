import React from "react";
import style from "../styles/personProject.module.css";
import CheckImg from "../checkimg/checkimg";
export default function travelProject() {
  const travelHandler = () => {
    window.open("https://mbti-travel-test.netlify.app/");
  };
  return (
    <>
      <h2 className={style.projectTitle}>mbti를 이용한 여행지 추천 사이트</h2>
      <span className={style.projectContent}>
        12개 문항을 테스트해 본인에 mbti를 확인하고 여행지를 추천 받을 수 있는
        사이트
      </span>
      <article className={style.explainWrapper}>
        <div className={style.explain}>
          <CheckImg />
          <span>참여인원 : 1명(본인)</span>
        </div>

        <div className={style.explain}>
          <CheckImg />
          <div onClick={travelHandler} className={style.highlightWrapper}>
            <span className={style.highlight}>배포사이트</span>
          </div>
        </div>

        <div className={style.explain}>
          <CheckImg />
          <span>기간 : 2023.05.18 ~ 05.28</span>
        </div>

        <div className={style.explain}>
          <CheckImg />
          <div className={style.skillWrapper}>
            <span>기술 스택: </span>
            <span className={style.skill}>React</span>
          </div>
        </div>

        <div className={style.explain}>
          <CheckImg />
          <div className={style.highlightWrapper}>
            <span className={style.highlight}>
              React에서 SEO를 만족하기 위해 React-helmet 적용
            </span>
          </div>
        </div>
        <div className={style.explain}>
          <CheckImg />
          <div className={style.highlightWrapper}>
            <span className={style.highlight}>
              테스트 문항 클릭시 페이지가 자연스럽게 넘어갈 수 있게 css
              transform 적용
            </span>
          </div>
        </div>
        <div className={style.explain}>
          <CheckImg />
          <div className={style.highlightWrapper}>
            <span className={style.highlight}>
              useParmas를 이용해 동적라우팅 구현
            </span>
          </div>
        </div>
      </article>
    </>
  );
}
