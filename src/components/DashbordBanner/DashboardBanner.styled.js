import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const marqueeLineAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const MarqueeBox = styled.div`
  position: relative;
  height: 109px;
`;

export const MarqueeLine = styled.div`
  display: flex;
  position: absolute;
  gap: 20px;
  width: 100%;
  height: 43px;
  padding: 12px 0px;
  overflow: hidden;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #fff;
  background-color: #a609e0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(5deg);
`;

export const MarqueeText = styled.p`
  flex-shrink: 0;
  margin: 0;
  white-space: nowrap;
  animation: ${marqueeLineAnimation} 10s linear infinite;
`;

export const MarqueeTextOpacity = styled.p`
  flex-shrink: 0;
  margin: 0;
  white-space: nowrap;
  -webkit-text-stroke: 1px var(--primary-bg-color);
  color: transparent;
  animation: ${marqueeLineAnimation} 10s linear infinite;
`;

export const MarqueeLineSecond = styled.div`
  display: flex;
  gap: 20px;
  height: 43px;
  width: 100%;
  padding: 12px 0px;
  overflow: hidden;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.2;
  text-transform: uppercase;
  color: black;
  background-color: #ff8200;
  transform: translate(-50%, -50%) rotate(-5deg);
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
`;
