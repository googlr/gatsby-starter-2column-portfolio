import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import nyuLogo from '../../assets/images/education/nyu_short_color.png'
import pkuLogo from '../../assets/images/education/pku_logo.png'

class EducationSection extends React.Component {
  render() {
    return (
      <Section title="Education">
        <div className="row">
          <ExperienceUnit
            logo={nyuLogo}
            colour='#FFFFFF'
            title='New York University'
            link='https://www.nyu.edu/'
            timeperiod='Anticipated in 2018'
            subtitle='Master of Computer Science.'
          />
          <ExperienceUnit
            logo={pkuLogo}
            colour='#FFFFFF'
            title='Peking University'
            link='http://www.pku.edu.cn/'
            timeperiod='2016'
            subtitle='Bachelor of Science, Computer Science.'
          />
        </div>
      </Section>
    )
  }
}

export default EducationSection
