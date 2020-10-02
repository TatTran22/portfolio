import Head from 'next/head';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';

const sizes = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330,
};

const intro = {
  preName: 'Hi, my name is',
  name: 'Tat Tran.',
  title: 'I build things for the web.',
  description:
    'I am an Automation Engineer with expertise in smart home automation solutions. I am currently interested in web development and looking for a job in this field.',
};

const BioWidth = `clamp(400px, 40vw, 600px)`;

const StyledRain = styled.div`
  height: 100%;

  animation: rain 0.3s linear infinite;
  z-index: 2;
  background-color: #182026;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    animation: lighting 6s linear infinite;
    opacity: 0;
  }

  @keyframes rain {
    0% {
      background-position: 0% 0%;
    }

    100% {
      background-position: 20% 100%;
    }
  }

  @keyframes lighting {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
    }
    11% {
      opacity: 1;
    }
    14% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    21% {
      opacity: 1;
    }
    24% {
      opacity: 0;
    }
    104% {
      opacity: 0;
    }
  }
`;

const Flickk = styled.div`
  font-family: 'Electrickle';

  color: rgba(45, 45, 45, 1);

  &:before {
    content: attr(data-heading);
    position: absolute;

    padding: 0 0.5rem 4rem 0.5rem;
    overflow: hidden;
    color: #ffcc00;
    width: 100%;
    z-index: 5;
    text-shadow: none;
    left: 0%;
    text-align: left;
  }

  @keyframes flicker {
    0%,
    19.999%,
    22%,
    62.999%,
    64%,
    64.999%,
    70%,
    100% {
      opacity: 0.99;
      text-shadow: -1px -1px 0 rgba(#fff, 0.4), 1px -1px 0 rgba(#fff, 0.4), -1px 1px 0 rgba(#fff, 0.4),
        1px 1px 0 rgba(#fff, 0.4), 0 -2px 8px, 0 0 2px, 0 0 5px #ff7e00, 0 0 15px #ff4444, 0 0 2px #ff7e00,
        0 2px 3px #000;
    }
    20%,
    21.999%,
    63%,
    63.999%,
    65%,
    69.999% {
      opacity: 0.4;
      text-shadow: none;
    }
  }
`;

const StyledContainer = styled.div`
  min-height: 100vh;

  width: 60%;
  margin: 0 auto;
  padding: 0 0.5rem 4rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: start;
  position: relative;
  color: #fff;
  line-height: 1.2;
  max-width: 1000px;
  // font-size: 2.2rem;

  @media (max-width: ${sizes.desktop}px) {
    width: 75%;
  }
  @media (max-width: ${sizes.tablet}px) {
    width: 80%;
  }
  @media (max-width: ${sizes.phablet}px) {
    width: 85%;
  }
  @media (max-width: ${sizes.thone}px) {
    width: 90%;
  }
`;

const StyledSection = styled.div`
  .myName {
    font-size: clamp(3rem, 5vw, 5rem);
    font-weight: 450;
    line-height: 1.2;
    letter-spacing: 0.5rem;
    &:before {
      animation: flicker ${1 + Math.random() * 3}s linear infinite;
    }
  }

  .preName {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.2rem;
    &:before {
      animation: flicker ${1 + Math.random() * 3}s linear infinite;
    }
  }

  .introTitle {
    font-size: clamp(2.2rem, 4vw, 4rem);
    font-weight: 450;
    line-height: 1.1;
    color: rgba(45, 45, 45, 1);
    letter-spacing: 0.3rem;
    &:before {
      animation: flicker ${1 + Math.random() * 3}s linear infinite;
    }
  }

  .bio {
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.2rem;
    width: ${BioWidth};

    &:before {
      animation: flicker ${1 + Math.random() * 3}s linear infinite;

      width: ${BioWidth};
    }
  }
`;

export default function Home() {
  return (
    <StyledRain className={styles.rain}>
      <Head>
        <title>Tat Tran</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <StyledContainer>
        <StyledSection>
          <Flickk className='preName' data-heading={intro.preName}>
            {intro.preName}
          </Flickk>
          <Flickk data-heading={intro.name} className='myName'>
            {intro.name}
          </Flickk>
          <Flickk data-heading={intro.title} className='introTitle'>
            {intro.title}
          </Flickk>
          <Flickk data-heading={intro.description} className='bio'>
            {intro.description}
          </Flickk>
        </StyledSection>
      </StyledContainer>
    </StyledRain>
  );
}
