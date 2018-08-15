import React from 'react'
import Link from 'gatsby-link'

import Splash from '../components/Splash';

const IndexPage = ({ ctaUrl }) => (
  <div>
    <Splash ctaUrl={ ctaUrl }/>
  </div>
)

export default IndexPage
