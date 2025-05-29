import React from 'react'
import ProfileSection from './ProfileSection'
import PortfolioSection from './PortfolioSection'
import FooterSection from '../molecules/FooterSection'
import EducationSection from '../molecules/EducationSection'
import KnowledgeSection from '../molecules/KnowledgeSection'

const MainSection = () => {
  return (
    <div>
      <div >
              
              <ProfileSection />
              
              <KnowledgeSection />
              
              <EducationSection />
      
              <PortfolioSection />
              
              <FooterSection />
            </div>
    </div>
  )
}

export default MainSection
