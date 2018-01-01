import { h, Component } from 'preact';
import styled from 'preact-emotion';
import VanillaTilt from 'vanilla-tilt';
import Logo from './Logo';
import { fullScreenCenter, flexCenter } from '../styles/helpers';

const Wrapper = styled.section`
  ${fullScreenCenter};
`;

const Circle = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 1000px;
  text-align: center;
  box-shadow: 1px 5px 25px 5px rgba(0, 0, 0, 0.15);
  transform-style: preserve-3d;
  ${flexCenter};
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
      </Wrapper>
    );
  }
}

export default Banner;
