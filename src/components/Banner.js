import { h, Component } from 'preact';
import { css } from 'emotion';
import styled from 'preact-emotion';
import VanillaTilt from 'vanilla-tilt';
import Logo from './Logo';
import lines from '../images/lines.svg';
import { fullScreenCenter, flexCenter } from '../styles/helpers';
import { arrowPulse } from '../styles/animations';

const lineColor = 'rgba(255, 255, 255, 0.1)';
const patternSize = '20px';

const Wrapper = styled.section`
  ${fullScreenCenter};
  background: linear-gradient(45deg, transparent, transparent 49%, ${lineColor} 50%, transparent 51%, transparent),
              linear-gradient(-45deg, transparent, transparent 49%, ${lineColor} 50%, transparent 51%, transparent);
  background-size: ${patternSize} ${patternSize};
`;

const Circle = styled.div`
  background: #002745;
  width: 320px;
  height: 320px;
  border-radius: 1000px;
  position: relative;
  text-align: center;
  box-shadow: 1px 5px 25px rgba(0, 0, 0, 0.15);
  transform-style: preserve-3d;
  ${flexCenter};

  &:hover {
    box-shadow: 1px 5px 40px 2px rgba(0, 0, 0, 0.25);
  }

  &::before {
    content: '';
    width: inherit;
    height: inherit;
    border-radius: inherit;
    position: absolute;
    border: 2px dashed rgba(255,255,255, 0.4);
    transform: translateZ(-25px) scale(1.2);
  }

  &::after {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background: url(${lines}) center no-repeat;
    background-size: 70%;
    transform: translateZ(-7px) scale(1.9);
  }
`;


const downArrow = css`
  content: '';
  width: 30px;
  height: 30px;
  position: absolute;
  left: calc(50% - 15px);
  bottom: 0;  
  transform: rotate(45deg);
  border-bottom: 1.5px solid white;
  border-right: 1.5px solid white;
  animation: ${arrowPulse} 3s 1s ease-in-out infinite;
  opacity: 0.5;
`;

const ScrollMessage = styled.h3`
  font-weight: lighter;
  position: absolute;
  bottom: 3vh;
  text-transform: uppercase;
  padding-bottom: 60px;

  &::before {
    ${downArrow};
    bottom: 25px;
  }
  
  &::after {
    ${downArrow};
    width: 50px;
    height: 50px;
    left: calc(50% - 25px);
    animation-delay: 1.2s;
  }
`;

class Banner extends Component {
  componentDidMount() {
    VanillaTilt.init(this.circle.base, {
      scale: 1.05,
      max: 40,
      perspective: 800,
      speed: 900,
    });
  }

  render() {
    return (
      <Wrapper>
        <Circle
          id="Banner-circle"
          ref={(ref) => {
            this.circle = ref;
          }}
        >
          <Logo width={200} height={200} style={{ transform: 'translateZ(30px)' }} />
        </Circle>

        <ScrollMessage>Scroll down</ScrollMessage>
      </Wrapper>
    );
  }
}

export default Banner;
