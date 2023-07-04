import React from "react";
import style from "../../styles/personProject.module.css";
import Checkimg from "../../checkimg/checkimg";

export default function tvingProject() {
  const gitHandler = () => {
    window.open("https://github.com/LAB13-REACT-TAING/LAB13-PROJECT/wiki");
  };
  return (
    <>
      <h2 className={style.projectTitle}>타잉(React)</h2>
      <span className={style.projectContent}>
        OTT서비스인 티빙을 기반으로 한 프로젝트로, 메인슬라이드와 검샘엔진(UI &
        기능)을 담당 했습니다.
      </span>
      <article className={style.explainWrapper}>
        <div className={style.explain}>
         <Checkimg />
          <span>참여인원 : 5명</span>
        </div>

        <div className={style.explain}>
         <Checkimg />
          <div className={style.highlightWrapper}>
            <span onClick={gitHandler} className={style.highlight}>
              Github
            </span>
          </div>
        </div>

        <div className={style.explain}>
         <Checkimg />
          <span>기간 : 2023.03.09 ~ 03.28</span>
        </div>

        <div className={style.explain}>
         <Checkimg />
          <div className={style.skillWrapper}>
            <span>기술 스택:</span>
            <span className={style.skill}>Vite</span>
            <span className={style.skill}>moduleCSS</span>
            <span className={style.skill}>firebase</span>

          </div>
        </div>

        <div className={style.explain}>
         <Checkimg />
          <div className={style.highlightWrapper}>
            <span className={style.highlight}>
              Swiper 라이브러리를 이용해 슬라이드 기능 구현
            </span>
          </div>
        </div>
        <div className={style.explain}>
         <Checkimg />
          <div className={style.highlightWrapper}>
            <span className={style.highlight}>
              firebase에 있는 DB를 이용해 데이터를 동적으로 받아 올 수 있도록
              커스텀 훅을 직접 구현
            </span>
          </div>
        </div>
        <div className={style.explain}>
         <Checkimg />
          <div className={style.highlightWrapper}>
            <span className={style.highlight}>
              동적 라우팅을 이용해 이미지 클릭 시 상세 페이지 링크를 동적으로
              가질 수 있게 구현
            </span>
          </div>
        </div>
      </article>
    </>
  );
}
