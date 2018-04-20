import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          A Java developer, Gopher,
            who loves books and music,
            goes surfing in summer and snowboarding in winter, 
            cooks at home,
          and keeps coding ardently.
          <div className="emoji">
            ♻ ️🏄‍♂️ 🏂 ☕
          </div>
        </div>
      </div>
    )
  }
}

export default About