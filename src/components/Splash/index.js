import React from 'react'
import Link from 'gatsby-link'

import './index.scss'

const Splash = ({ node, changeNode }) => {
  const answers = node.answers ? node.answers.map((answer, idx) => 
    <li key={ idx } onClick={ () => changeNode(answer.pointer) }>
      { answer.text }
    </li>
  ) : '';

  return (
    <div className="splash">
      <h1>{ node.title }</h1>
      <p>{ node.description }</p>
      <ul>
        { answers }
      </ul>
    </div>
  )
}

export default Splash
