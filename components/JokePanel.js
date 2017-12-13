import React from 'react';
import {Panel} from 'react-bootstrap';

export default class JokePanel extends React.Component {

  render() {
    return (
      <Panel header={`Id: ${this.props.joke.id}`} bsStyle="primary" style={{marginTop: '2%'}}>
        {this.props.joke.joke}
      </Panel>
    )
  }
}