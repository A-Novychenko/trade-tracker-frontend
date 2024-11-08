import styled from '@emotion/styled';

export const ContactBtn = styled.button`
  /* width: 100%;
  height: 56px;
  padding: 16px 32px;
  margin-top: 24px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  border-radius: 16px;

  color: rgb(255 255 255 / 60%);
  background-color: rgba(11, 19, 67, 0.74);

  transition: all 0.3s ease;
  &:hover {
    background-color: rgba(11, 19, 67, 1);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }

  &:hover {
    background-color: rgba(11, 19, 67, 1);
    animation: pulse 0.6s ease-in-out infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  } */
  ////////////////////////////////////////////////////////////////

  width: 100%;
  height: 56px;
  padding: 16px 32px;
  margin-top: 24px;
  font-size: 18px;
  border: 3px solid transparent;
  position: relative;
  cursor: pointer;
  border-radius: 16px;
  background-color: rgba(11, 19, 67, 0.74);
  color: rgb(255 255 255 / 60%);
  font-weight: bold;
  outline: none;
  overflow: hidden;

  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #fff;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s ease;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #fff;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s ease;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  &:hover {
    color: #fff;
  }
`;
