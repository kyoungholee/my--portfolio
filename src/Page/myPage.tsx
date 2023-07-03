import { useRef } from "react";

// style
import style from "../styles/myPage.module.css";

// components
import TravelProject from "./travelProject";
import ChatProject from "./chatProject";
import KurlyProject from "./timeProject/kurlyProject";
import TvingProject from "./timeProject/tvingProject";
import Education from "./education/education";
import Skills from "./skills/skills";

export default function MyPage() {

  const projectRef =useRef<HTMLDivElement>(null);
  const skillRef =useRef<HTMLDivElement>(null);


  const onProjectClick = () => {
    projectRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  const onSkillClick = () => {
    skillRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  const gitHandler = () => {
    window.open("https://github.com/kyoungholee");
  };

  const velogHandler = () => {
    window.open("https://velog.io/@dlrudgh0313");
  };

  return (
    <>
      <header className={style.header}>
        <ul className={style.category}>
          <li onClick={gitHandler}>Github 
          </li>
          <li onClick={velogHandler}>Velog</li>
          <li onClick={onProjectClick}>Project</li>
          <li onClick={onSkillClick}>Skill</li>
        </ul>
      </header>
      <section className={style.imgWrapper}>
        <div className={style.backgroundImg} ></div>
          <div className={style.title}>
            <div className={style.description}>
              <h1 className={style.like}> 개발과 운동을 좋아하는</h1>
              <h1 className={style.name}>이경호 입니다.</h1>
              <span>
                회사에서 영향력이 있는 개발자가 되기위해 항상 고민하고 성장하고
                있습니다.
              </span>
              <span  >
                에러가 났을 때 더 많이 배운다고 알고 있기 때문에 스트레스 받지
                않고, 해결해 나가면서 즐겁게 개발하고 있습니다.
              </span>
            </div>
          </div>
      </section>
      <section className={style.contents} ref={projectRef} >
        <h1 className={style.contentsTitle}>Project</h1>
        <div className={style.projectWrapper} >
          <span className={style.projectType}>💡개인프로젝트</span>
          <TravelProject />
          <ChatProject />
        </div>
        <div className={style.projectWrapper}>
          <span className={style.projectType}>💡팀프로젝트</span>
          <KurlyProject />
          <TvingProject />
          <div>
            지금 진행하려고 하는 프로젝트 적기(자유게시판, 중고마켓)</div>
        </div>
      </section>
      <Education />
      <div  ref={skillRef} >
      <Skills/>
      </div>
      <footer className={style.contactWrapper}>
      <h1 className={style.contactTitle}>Contact</h1>
        <div className={style.footer} >
          <div className={style.info}>
            <span>
              Email : dlrudgh1303@gmail.com
            </span>
            <span>
              Phone :   010-6545-1303
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
