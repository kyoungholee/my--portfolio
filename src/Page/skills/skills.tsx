import React from 'react'
import style from '../../styles/skills.module.css'
import '../../App.css'

export default function Skills() {
  return (
    <section className={style.skills} >
    <h1 className={style.skillsTitle}>Skills</h1>
    <div >
      <h2 className={style.name}>fronted</h2>
      <div className={style.explain}>
        <img src="/img/check.png" alt="체크이미지" />
        <span>HTML, CSS, Javascript, React , Typescript, Next.js, emotion, Sass, styled-Component</span>
      </div>
      <h2 className={style.name}>backend</h2>
      <div className={style.explain}>
        <img src="/img/check.png" alt="체크이미지" />
        <span>Node.js</span>
      </div>

    </div>
    </section>
  )
}
