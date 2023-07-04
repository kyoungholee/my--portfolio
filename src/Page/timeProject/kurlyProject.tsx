import React from "react";
import style from "../../styles/personProject.module.css";
import CheckImg from "../../checkImg/checkImg";

export default function kurlyProject() {
  const gitHandler = () => {
    window.open("https://github.com/likelion-4fe-karly/karly-17-devfolio");
  };

  return (
    <>
      <h2 className={style.projectTitle}>마켓컬리(바닐라 프로젝트)</h2>
      <span className={style.projectContent}>
        식료품 새벽배송 서비스인 마켓컬리를 기반으로 한 프로젝트로, 회원가입 및
        로그인 UI, 기 능구현을 하였습니다.
      </span>
      <article className={style.explainWrapper}>
        <div className={style.explain}>
         <CheckImg />
          <span>참여인원 : 5명(팀장)</span>
        </div>

        <div className={style.explain}>
         <CheckImg />
          <div className={style.highlightWrapper}>
            <span onClick={gitHandler} className={style.highlight}>
              Github
            </span>
          </div>
        </div>

        <div className={style.explain}>
         <CheckImg />
          <span>기간 : 2023.01.31 ~ 02.08</span>
        </div>

        <div className={style.explain}>
         <CheckImg />
          <span>기술 스택: </span>
          <span className={style.skill}>HTML</span>
          <span className={style.skill}>CSS</span>
          <span className={style.skill}>JavaScript</span>
        </div>

        <div className={style.explain}>
         <CheckImg />
          <div className={style.highlightWrapper}>
            <span className={style.highlight}>
              회원가입 시 중복검사 후 랜덤한 uid값을 data.json에 저장 할 수 있게
              구현
            </span>
          </div>
        </div>
        <div className={style.explain}>
         <CheckImg />
          <div className={style.highlightWrapper}>
            <span className={style.highlight}>
              시맨틱 UI를 고려해 최대한 웹 접근성을 신경씀
            </span>
          </div>
        </div>
        <div className={style.explain}>
         <CheckImg />
          <div className={style.highlightWrapper}>
            <span className={style.highlight}>
              매일 오전 스크럼과 주간 회고를 하면서 문서화를 배우고 오류를
              동료들과 공유하면서 함께 문제를 해결함
            </span>
          </div>
        </div>
      </article>
    </>
  );
}
