import React from 'react'
import EducationSection from '../components/EducationSection'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h5>
          Hi, there.
        </h5>

        <h3>
          Welcome to my portfolio.
        </h3>
        Take a look at my <a href="https://googlr.github.io/blog">blog.</a>

        <EducationSection />
        <ProjectsSection />
      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
