import React from 'react'
import Link from 'gatsby-link'

import Splash from '../components/Splash';

import Flowchart from '../data/flowchart.json'

const nodeMap = Flowchart.nodes.reduce((map, obj) => (map[obj.nodeId] = obj, map), {});

console.log(nodeMap);

class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {
      currNode: 1
    }

    this.changeNode = this.changeNode.bind(this);
  }

  changeNode(nodeId) {
    this.setState({
      currNode: nodeId
    });
  }

  render() {
    return (
      <div>
        <Splash
          node={ nodeMap[this.state.currNode] }
          changeNode={ this.changeNode } />
      </div>
    );
  }
}

export default IndexPage;

