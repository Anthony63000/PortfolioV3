import React, { useEffect, useState } from 'react'
import Title from '../Title/Title'
import SkillsItem from './SkillsItem'

import htmlImage from "@/images/stack/front/html.svg"
import cssImage from "@/images/stack/front/css.svg"
import jsImage from "@/images/stack/front/javascript.svg"
import sassImage from "@/images/stack/front/sass.svg"
import reduxImage from "@/images/stack/front/redux.svg"
import reactImage from "@/images/stack/front/react.svg"
import nextImage from "@/images/stack/front/next-js.svg"

import firebaseImage from "@/images/stack/back/firebase.svg"
import nodeJsImage from "@/images/stack/back/node.svg"
import mongodbImage from "@/images/stack/back/mongodb.svg"
import swaggerImage from "@/images/stack/back/swagger.svg"

import gitImage from "@/images/stack/versionning/git.svg"
import gitHubImage from "@/images/stack/versionning/github.svg"

import gimpImage from "@/images/stack/tools/gimp.svg"
import notionImage from "@/images/stack/tools/notion.svg"
import visualImage from "@/images/stack/tools/visual.svg"
import SoftSkills from './SoftSkills'
import useObserverAnimation from '../Helper/ObserverAnimation'

import imageFound from "@/images/banner/fondPcBanner.webp"

import Image from 'next/image'

const Skills = () => {

const { observedRef, isIntersecting } = useObserverAnimation();

const [animateTop, setAnimateTop] = useState(false)
const [animateLeft, setAnimateleft] = useState(false)
const [animateRight, setAnimateRight] = useState(false)

    useEffect(() => {
        if(isIntersecting) {
            setAnimateTop(true)
            const timer = setTimeout(() => {
                setAnimateleft(true)
                setTimeout(() => {
                    setAnimateRight(true)
                }, 500)
            }, 500)
            return () => clearTimeout(timer)
        }
    }, [isIntersecting])

  return (
    <section id='skills' className='skills' ref={observedRef}>
      <Image 
        className='skills-found'
        src={imageFound}
        alt="Image d'un fond blanc avec des formes"
    />
      <div className='skills-container'>
        <div 
            className={`${'skills-container-top'}
            ${animateTop ? "skills-container-top-animate" : ""}
            `}
        >
            <Title
                title="Mes compétences"
            />
            <p className='skills-container-top-subTitle'>
                Retrouvez l&apos;ensemble de mes compétences
            </p>
        </div>
        <div className='skills-container-row'>
            <div 
                className={`${'skills-container-row-left'}
                ${animateLeft ? "skills-container-row-left-animate" : ""}
                `}
            
            >
                <div className='skills-container-row-left-container'>
                    <div className='skills-container-row-left-container-top'>
                        <h6 className='skills-container-row-left-container-top-title'>
                            Front-End
                        </h6>
                    </div>
                    <div className='skills-container-row-left-container-bottom'>
                        <SkillsItem 
                            stackImageSrc={htmlImage}
                            altImageSrc="Image du logo de la technologie HTML"
                            stack="Html"
                        />
                        <SkillsItem 
                            stackImageSrc={cssImage}
                            altImageSrc="Image du logo de la technologie CSS"
                            stack="Css"
                        />
                        <SkillsItem 
                            stackImageSrc={sassImage}
                            altImageSrc="Image du logo de la technologie sass"
                            stack="Sass"
                        />
                        <SkillsItem 
                            stackImageSrc={jsImage}
                            altImageSrc="Image du logo de la technologie javascript"
                            stack="JavaScript"
                        />
                        <SkillsItem 
                            stackImageSrc={reduxImage}
                            altImageSrc="Image du logo de la technologie redux"
                            stack="Redux"
                        />
                        <SkillsItem 
                            stackImageSrc={reactImage}
                            altImageSrc="Image du logo de la technologie react"
                            stack="ReactJs"
                        />
                        <SkillsItem 
                            stackImageSrc={nextImage}
                            altImageSrc="Image du logo de la technologie next"
                            stack="NextJs"
                        />
                    </div>
                </div>
                <div className='skills-container-row-left-container'>
                    <div className='skills-container-row-left-container-top'>
                        <h6 className='skills-container-row-left-container-top-title'>
                            Back-End
                        </h6>
                    </div>
                    <div className='skills-container-row-left-container-bottom'>
                        <SkillsItem 
                            stackImageSrc={firebaseImage}
                            altImageSrc="Image du logo de la technologie Firebase"
                            stack="Firebase"
                        />
                        <SkillsItem 
                            stackImageSrc={nodeJsImage}
                            altImageSrc="Image du logo de la technologie NodeJs"
                            stack="NodeJs"
                        />
                        <SkillsItem 
                            stackImageSrc={mongodbImage}
                            altImageSrc="Image du logo de la technologie MongoDb"
                            stack="MongoDb"
                        />
                        <SkillsItem 
                            stackImageSrc={swaggerImage}
                            altImageSrc="Image du logo de la technologie Swagger"
                            stack="Swagger"
                        />
                    </div>
                </div>
                <div className='skills-container-row-left-container'>
                    <div className='skills-container-row-left-container-top'>
                        <h6 className='skills-container-row-left-container-top-title'>
                            Outils de développement
                        </h6>
                    </div>
                    <div className='skills-container-row-left-container-bottom'>
                        <SkillsItem 
                            stackImageSrc={gimpImage}
                            altImageSrc="Image du logo de la technologie gimp"
                            stack="Gimp"
                        />
                        <SkillsItem 
                            stackImageSrc={notionImage}
                            altImageSrc="Image du logo de la technologie notion"
                            stack="Notion"
                        />
                        <SkillsItem 
                            stackImageSrc={visualImage}
                            altImageSrc="Image du logo de la technologie Visual studio code"
                            stack="Vs Code"
                        />
                    </div>
                </div>
                <div className='skills-container-row-left-container'>
                    <div className='skills-container-row-left-container-top'>
                        <h6 className='skills-container-row-left-container-top-title'>
                            Versioning
                        </h6>
                    </div>
                    <div className='skills-container-row-left-container-bottom'>
                        <SkillsItem 
                            stackImageSrc={gitHubImage}
                            altImageSrc="Image du logo de la technologie github"
                            stack="Github"
                        />
                        <SkillsItem 
                            stackImageSrc={gitImage}
                            altImageSrc="Image du logo de la technologie git bash"
                            stack="Git bash"
                        />
                    </div>
                </div>
            </div>
            <div 
                className={`${'skills-container-row-right'}
                ${animateRight ? "skills-container-row-right-animate" : ""}
                `}
            >
                <div className='skills-container-row-right-top'>
                    <h6 className='skills-container-row-right-top-title'>
                        Autres compétences
                    </h6>
                </div>
                <div className='skills-container-row-right-bottom'>
                    <SoftSkills 
                        title="Optimisation"
                        texts={["Référencement SEO", "Accessibilité", "Google Search Console",
                        "Lighthouse", "Google Rich Snippet"]}
                    />
                    <SoftSkills 
                        title="SoftSkills"
                        texts={["Méthode Agile", "Rigueur", "Autonomie", "Curiosité"]}
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
