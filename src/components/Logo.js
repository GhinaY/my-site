import React from 'react';
import styled from 'styled-components'

const LogoText = styled.div`
    display: inline;
    font-family: 'Sacramento', cursive;
    font-size: 48px;
    padding: 20px;
`;

class Logo extends React.Component {
    render() {
      return (
          <LogoText>Ghina Yashar</LogoText>
      );
   }
  }
  
export default Logo