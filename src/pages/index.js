import React from 'react';
import '../styles/index.css'
import Logo from '../components/Logo'

class ComingSoon extends React.Component {
  render() {
    return (
      <div className="coming-soon">{this.props.children}</div>
    );
 }
}

export default () => (
    <div>
        <ComingSoon>
            <Logo />
            <h1 style={{ fontSize: `100px`, margin: '0'}}>COMING SOON</h1>
            <p style={{ fontSize: `40px`, margin: '0' }}>Dev Ghina is working on it 🛠</p>
        </ComingSoon>
    </div>
)
