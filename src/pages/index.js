import React, { Component } from 'react';
import '../styles/index.css'

class ComingSoon extends Component {
  render() {
    return (
      <div className="coming-soon">{this.props.children}</div>
    );
 }
}

export default () => (
  <ComingSoon>
    <h1 style={{ fontSize: `100px`, margin: '0' }}>COMING SOON</h1>
    <p style={{ fontSize: `40px`, margin: '0' }}>Dev Ghina is working on it 🛠</p>
  </ComingSoon>
)
