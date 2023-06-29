import style from "../styles/myPage.module.css";
import TravelProject from "./travelProject";
import ChatProject from "./chatProject";
import KurlyProject from "./timeProject/kurlyProject";
import TvingProject from "./timeProject/tvingProject";
export default function myPage() {
  // const inputRef = useRef<HTMLDivElement>();

  const gitHandler = () => {
    window.open("https://github.com/kyoungholee");
  };

  const velogHandler = () => {
    window.open("https://velog.io/@dlrudgh0313");
  };

  return (
    <>
      <header>
        다크모드 구현
        <div className={style.backgroundImg}></div>
        <div className={style.category}>
          <div onClick={gitHandler}>Github</div>
          <div onClick={velogHandler}>Velog</div>
          <div>Project</div>
          <div>Skill</div>
        </div>
        <div className={style.title}>
          <div>
            <h1 className={style.like}> 개발과 운동을 좋아하는</h1>
            <h1 className={style.name}>이경호 입니다.</h1>
            <span>
              회사에서 영향력이 있는 개발자가 되기위해 항상 고민하고 성장하고
              있습니다.
            </span>
            <span>
              에러가 났을 때 더 많이 배운다고 알고 있기 때문에 스트레스 받지
              않고, 해결해 나가면서 즐겁게 개발하고 있습니다.
            </span>
          </div>
        </div>
      </header>
      <section className={style.contents}>
        <h1 className={style.contentsTitle}>Project</h1>
        <div>
          <span className={style.projectType}>💡개인프로젝트</span>
          <TravelProject />
          <ChatProject />
        </div>
        <div className={style.projectWrapper}>
          <span className={style.projectType}>💡팀프로젝트</span>
          <KurlyProject />
          <TvingProject />
        </div>
      </section>
      <footer>연락쳐..등등 메일 주소 </footer>
    </>
  );
}
