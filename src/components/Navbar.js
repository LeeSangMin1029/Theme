import { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Image from './Image';
import { useThemeContext } from './hooks/useTheme';

const Container = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: black;
  color: white;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 70%;
`;

const Button = styled.div`
  cursor: pointer;
  font-size: 1.2em;
  line-height: 45px;
  max-width: 130px;
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: ease;
`;

const AnimationButton = styled(Button)`
  letter-spacing: 0;
  padding-left: 5px;
  font-size: 1.3em;
  a {
    color: white;
    text-decoration: none;
  }
  :hover,
  :active {
    letter-spacing: 3px;
  }

  :after,
  :before {
    border: 1px solid rgba(255, 255, 255, 0);
    bottom: 0px;
    content: ' ';
    margin: 0 auto;
    display: flex;
    transition: all 180ms ease-in-out;
    width: 0;
  }

  :hover:after,
  :hover:before {
    border-color: rgba(255, 255, 255, 1);
    transition: width 180ms ease-in-out;
    width: 90%;
  }
  :hover:before {
    width: 90%;
  }
`;

const Item = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Navbar = () => {
  const theme = useThemeContext();
  return (
    <Container>
      <List>
        <Item>
          <Image src={theme.react} alt='react_logo' width='30' height='30' />
          <AnimationButton>
            <Link to='/react'>React</Link>
          </AnimationButton>
        </Item>
        <Item>
          <Image
            src={theme.angular}
            alt='angular_logo'
            width='30'
            height='30'
          />
          <AnimationButton>
            <Link to='/angular'>Angular</Link>
          </AnimationButton>
        </Item>
        <Item>
          <Image src={theme.vue} alt='vue_logo' width='30' height='30' />
          <AnimationButton>
            <Link to='/vue'>Vue</Link>
          </AnimationButton>
        </Item>
      </List>
    </Container>
  );
};

export default memo(Navbar);
