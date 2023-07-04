import React from 'react'
import style from '../../styles/education.module.css'
import '../../App.css'
import CheckImg from '../../checkImg/checkImg'
export default function Education() {
  return (
    <section className={style.education}>
      <h1 className={style.educationTitle}>Education</h1>
      <div className={style.educationWrapper}>
        <span className={style.type}>대학교</span>
        <h2 className={style.name}>중부대학교</h2>
        <div className={style.explain}>
         <CheckImg />
          <span>2016년 - 2022년 정보보호학과 졸업</span>
        </div>
        <div className={style.explain}>
         <CheckImg />
          <span>학점 3.1 / 4.5</span>
        </div>
      </div>

      <div className={style.educationWrapper}>
        <span className={style.type}>교육</span>
        <h2 className={style.name}>멋쟁이사자처럼 프론트엔드스쿨</h2>
        <div className={style.explain}>
         <CheckImg />
          <span>2022.11.28 ~ 2023.3.30</span>
        </div>
        <div className={style.explain}>
         <CheckImg />
          <span>2개의 팀 프로젝트를 경험했습니다.</span>
        </div>
        <div className={style.explain}>
         <CheckImg />
          <span>Figma를 제시해 주면 페이지를 분석하고, 문제정의 및 해결 뒤 서로 피드백을 주고 받으면서 실무에 필요한 기술적인 역량을 키웠습니다. </span>
        </div>
        <div className={style.explain}>
         <CheckImg />
          <span>git에 대한 이해와 push, pullRequest, Merge를 이해하며 협업 능력을 키웠습니다.</span>
        </div>
      </div>
    </section>
  )
}
