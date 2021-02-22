import React, {useContext} from 'react';
import Switch from 'react-switch';
import {ThemeContext} from 'styled-components';
import { shade} from 'polished';
import { BiMoon, BiSun } from 'react-icons/bi';

import {Container} from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title} = useContext(ThemeContext);
  return (
    <Container>
      Hello World

      <Switch 
        onChange={toggleTheme}
        checked={title === 'dark'}        
        handleDiameter={20}
        height={24}
        width={50}
        checkedIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 12,
              paddingRight: 2
            }}
          >
            On
          </div>
        }
        uncheckedIcon={
         ( <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 12,
              color: "orange",
              paddingRight: 2
            }}
          >
            Off
          </div>)
        }       
       
        uncheckedHandleIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              color:"orange",
              fontSize: 16
            }}
          ><BiSun />
          </div>
        }
        checkedHandleIcon={
         
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              color: "blue",
              fontSize: 16
            }}
          >
            <BiMoon />
          </div>
        }
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />      
    </Container>
  );
}

export default Header;