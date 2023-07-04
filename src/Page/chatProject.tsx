import React from "react";
import style from "../styles/personProject.module.css";
import CheckImg from "../checkImg/checkImg";

export default function chatProject() {
  const chatHandler = () => {
    window.open("https://chat-project-dev.netlify.app/login");
  };
  return (
    <>
      <h2 className={style.projectTitle}>채팅프로그램 사이트</h2>
      <span className={style.projectContent}>
        지인과 함께 채팅 할 수 있으며 모든 내용은 firebase에 저장됩니다.
      </span>
      <article className={style.explainWrapper}>
        <div className={style.explain}>
         <CheckImg />
          <span>참여인원 : 1명(본인)</span>
        </div>

        <div className={style.explain}>
         <CheckImg />
          <div onClick={chatHandler} className={style.highlightWrapper}>
            <span className={style.highlight}>배포사이트</span>
          </div>
        </div>

        <div className={style.explain}>
         <CheckImg />
          <span>기간 : 2023.05.29 ~ 06.11</span>
        </div>

        <div className={style.explain}>
         <CheckImg />
          <div className={style.skillWrapper}>
          <span>기술 스택: </span>
          <span className={style.skill}>React</span>
            <span className={style.skill}>firebase</span>
          </div>
        </div>

        <div className={style.explain}>
         <CheckImg />
          <div className={style.highlightWrapper}>
            <span className={style.highlight}>
              firebase DB를 이용해 회원정보와 대화내용 관리 로직 구현
            </span>
          </div>
        </div>
        <div className={style.explain}>
         <CheckImg />
          <div className={style.highlightWrapper}>
            <span className={style.highlight}>
              useContext훅을 이용해 다른 사람과 대화 할 수 있게 로직 구현
            </span>
          </div>
        </div>
        <div className={style.explain}>
         <CheckImg />
          <div className={style.highlightWrapper}>
            <span className={style.highlight}>
              Timestamp를 이용해 메신저 전송시간을 실시간으로 표시
            </span>
          </div>
        </div>
      </article>
    </>
  );
}
