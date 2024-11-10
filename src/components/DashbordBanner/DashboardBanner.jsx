import {
  MarqueeBox,
  MarqueeLine,
  MarqueeLineSecond,
  MarqueeText,
  MarqueeTextOpacity,
} from './DashboardBanner.styled';

export const DashboardBanner = () => {
  return (
    <MarqueeBox>
      <MarqueeLine>
        <MarqueeText>Your advertisement</MarqueeText>
        <MarqueeText>Your advertisement</MarqueeText>
        <MarqueeText>Your advertisement</MarqueeText>
      </MarqueeLine>
      <MarqueeLineSecond>
        <MarqueeText>Your advertisement</MarqueeText>
        <MarqueeText>Your advertisement</MarqueeText>
        <MarqueeText>Your advertisement</MarqueeText>
      </MarqueeLineSecond>
    </MarqueeBox>
  );
};
