import { h, Component } from 'preact';
// import { css } from 'emotion';
import styled from 'preact-emotion';
import VanillaTilt from 'vanilla-tilt';
import Logo from './Logo';
import lines from '../images/lines.svg';
import { fullScreenCenter, flexCenter } from '../styles/helpers';
// import { arrowPulse } from '../styles/animations';

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
    border: 2px dashed rgba(255, 255, 255, 0.4);
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
/*
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
*/
const Infos = styled.div`
  font-weight: lighter;
  position: absolute;
  bottom: 3vh;
  text-transform: uppercase;
  text-align: center;
  padding-bottom: 60px;

  h1 {
    font-size: 2rem;
  }

  h3 {
    margin: 7px;
    color: rgba(255,255,255,0.7);
  }

  h1, h3 {
    font-weight: 100;
  }
`;

const SocialLink = styled.a`
  margin: 1rem;
  display: inline-block;
  opacity: 0.7;
  transition: 0.2s;

  &:hover {
    opacity: 1;
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
        <Infos>
          <h1>Kevin Dantas</h1>
          <h3>Web developer</h3>
          <SocialLink href="https://github.com/kevindantas" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34.1">
              <path
                d="M32.7 8.7C31.1 6 29 3.9 26.3 2.3 23.6.8 20.7 0 17.5 0c-3.2 0-6.1.8-8.8 2.3C6 3.9 3.9 6 2.3 8.7.8 11.4 0 14.3 0 17.5c0 3.8 1.1 7.2 3.3 10.3 2.2 3 5.1 5.2 8.6 6.3.4.1.7 0 .9-.2.2-.2.3-.4.3-.7V32v-2l-.5.1c-.3.1-.8.1-1.3.1s-1-.1-1.6-.2c-.5-.1-1.1-.3-1.5-.7-.5-.4-.8-.8-1-1.4l-.2-.5c-.2-.3-.4-.7-.7-1.2-.3-.4-.7-.7-1-.9l-.2-.1c-.1 0-.2-.1-.2-.2-.1-.1-.2-.2-.2-.3 0-.1 0-.2.1-.3.1-.1.3-.1.7-.1l.5.1c.3.1.7.2 1.1.5.4.3.8.7 1.1 1.2.3.6.8 1.1 1.3 1.4.5.3 1 .5 1.5.5s.9 0 1.3-.1.7-.2 1-.3c.1-1 .5-1.8 1.1-2.3-.9-.1-1.6-.2-2.3-.4-.7-.2-1.4-.5-2.1-.9-.9-.5-1.5-1-2-1.6-.5-.6-.9-1.4-1.2-2.4-.3-1-.5-2.1-.5-3.4 0-1.8.6-3.4 1.8-4.7-.5-1.4-.5-2.9.2-4.7.4-.1 1.1 0 2 .3.9.3 1.5.6 1.9.9.4.2.7.4 1 .6 1.4-.4 2.9-.6 4.4-.6s3 .2 4.4.6l.9-.5c.6-.4 1.3-.7 2.1-1 .8-.3 1.4-.4 1.8-.3.7 1.7.7 3.3.2 4.6 1.2 1.3 1.8 2.9 1.8 4.7 0 1.3-.2 2.4-.5 3.4s-.7 1.8-1.2 2.4c-.5.6-1.1 1.1-1.8 1.5-.7.4-1.5.7-2.1.9-.7.2-1.5.3-2.3.4.8.7 1.2 1.8 1.2 3.2v4.8c0 .3.1.5.3.7.2.2.5.2.9.2 3.5-1.2 6.4-3.3 8.6-6.3 2.2-3 3.3-6.5 3.3-10.3-.2-3.1-1-6-2.5-8.7z"
                fill="#fff"
              />
            </svg>
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/kevindantas" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35">
              <path
                d="M32.4 0H2.6C1.2 0 0 1.1 0 2.5v30C0 33.9 1.2 35 2.6 35h29.8c1.4 0 2.6-1.1 2.6-2.5v-30C35 1.1 33.8 0 32.4 0zm-22 29.8H5.2V13.1h5.2v16.7zm-2.6-19c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.4 3-3 3zm22 19h-5.2v-8.1c0-1.9 0-4.4-2.7-4.4s-3.1 2.1-3.1 4.3v8.3h-5.2V13.1h5v2.3h.1c.7-1.3 2.4-2.7 4.9-2.7 5.3 0 6.2 3.5 6.2 8v9.1z"
                fill="#fff"
              />
            </svg>
          </SocialLink>
          <SocialLink href="https://twitter.com/kevinds29" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="28.4">
              <path
                d="M11 28.4c13.2 0 20.4-10.9 20.4-20.4v-.9c1.4-1 2.6-2.3 3.6-3.7-1.3.6-2.7 1-4.1 1.1 1.5-.9 2.6-2.3 3.2-4-1.4.8-2.9 1.4-4.6 1.7C28.2.9 26.3 0 24.2 0c-4 0-7.2 3.2-7.2 7.2 0 .6.1 1.1.2 1.6C11.3 8.5 6 5.7 2.4 1.3c-.6 1.1-1 2.3-1 3.6 0 2.5 1.3 4.7 3.2 6-1.2 0-2.3-.4-3.3-.9v.1c0 3.5 2.5 6.4 5.8 7-.6.2-1.2.3-1.9.3-.5 0-.9 0-1.3-.1.9 2.9 3.6 4.9 6.7 5-2.5 1.9-5.6 3.1-8.9 3.1-.6 0-1.2 0-1.7-.1 3.2 2 7 3.1 11 3.1"
                fill="#fff"
              />
            </svg>
          </SocialLink>
        </Infos>
        {/* <ScrollMessage>Scroll down</ScrollMessage> */}
      </Wrapper>
    );
  }
}

export default Banner;
