import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
      <Content>
        <LogoOne src="/images/cta-logo-one.svg" />
        <SignUpBtn>Get All There</SignUpBtn>
        <Description>
          Disney Plus Premier Access is a purchase option for Disney Plus subscribers, enabling members to pay an extra
          $30 one-time fee to gain early streaming access to a movie that's still playing in theaters. Once purchased,
          Disney Plus members can continue to stream or download a Premier Access movie for as long as they remain a
          subscriber.{' '}
        </Description>
        <LogoTwo src="/images/cta-logo-two.png" />
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0.7;
    background: url('/images/login-background.jpg') top / cover no-repeat fixed;
    z-index: -1;
  }
`;

const Content = styled.div`
  width: 90%;
  max-width: 650px;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  align-items: center;
`;

const LogoOne = styled.img`
  padding: 0 15px;
`;

const SignUpBtn = styled.a`
  cursor: pointer;
  width: 100%;
  background-color: #0063e5;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1.5px;
  text-align: center;
  padding: 17px 0;
  margin-top: 8px;
  margin-bottom: 8px;
  color: #f9f9f9;
  border-radius: 4px;
  transition: all 250ms;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
  margin: 0 0 8px 0;
`;

const LogoTwo = styled.img`
  width: 90%;
`;
