import React from 'react';
import { I18nManager, ViewStyle } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

export type StarIconProps = {
  size: number;
  color: string;
  type: 'full' | 'half' | 'empty';
};

const StarBorder = ({ size, color }: Omit<StarIconProps, 'type'>) => (
  <Svg height={size} viewBox="0 0 24 24" width={size}>
    <Path d="M9.85052 0.764948C10.0939 0.25355 10.5641 0 11.0344 0C11.5046 0 11.9061 0.25355 12.1495 0.764948L14.8431 6.45479L20.8697 7.36585C21.9505 7.52915 22.3836 8.91724 21.5999 9.71227L17.2397 14.1387L18.271 20.3915C18.4566 21.5131 17.3222 22.3683 16.357 21.8397L10.9296 18.7942L5.64302 21.8397C4.67777 22.3683 3.54339 21.5131 3.72902 20.3915L4.76027 14.1387L0.400145 9.71227C-0.383605 8.91724 0.0495196 7.52915 1.13027 7.36585L7.15689 6.45479L9.85052 0.764948Z" fill="#C7C7C7"/>
  </Svg>
);

const StarFull = ({ size, color }: Omit<StarIconProps, 'type'>) => (
  <Svg height={size} viewBox="0 0 24 24" width={size}>
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path d="M9.85052 0.764948C10.0939 0.25355 10.5641 0 11.0344 0C11.5046 0 11.9061 0.25355 12.1495 0.764948L14.8431 6.45479L20.8697 7.36585C21.9505 7.52915 22.3836 8.91724 21.5999 9.71227L17.2397 14.1387L18.271 20.3915C18.4566 21.5131 17.3222 22.3683 16.357 21.8397L10.9296 18.7942L5.64302 21.8397C4.67777 22.3683 3.54339 21.5131 3.72902 20.3915L4.76027 14.1387L0.400145 9.71227C-0.383605 8.91724 0.0495196 7.52915 1.13027 7.36585L7.15689 6.45479L9.85052 0.764948Z" fill="#FFC403"/>
  </Svg>
);

const RTL_TRANSFORM: ViewStyle = {
  transform: [{ rotateY: '180deg' }],
};

const StarHalf = ({ size, color }: Omit<StarIconProps, 'type'>) => (
  <Svg
    height={size}
    viewBox="0 0 24 24"
    width={size}
    style={I18nManager.isRTL ? RTL_TRANSFORM : undefined}
  >
    <Rect fill="none" height="24" width="24" x="0" />
    <Path d="M11.0168 0C10.5473 0 10.0778 0.253516 9.83478 0.764844L7.14546 6.45391L1.12846 7.36484C0.0494405 7.52812 -0.382993 8.91602 0.399505 9.71094L4.75266 14.1367L3.72306 20.3887C3.53773 21.5102 4.6703 22.3652 5.634 21.8367L11.0168 18.8891V0Z" fill="#FFC403"/>
<Path d="M11.0168 0C11.4863 0 11.9558 0.253516 12.1988 0.764844L14.8881 6.45391L20.9051 7.36484C21.9841 7.52812 22.4165 8.91602 21.634 9.71094L17.2809 14.1367L18.3105 20.3887C18.4958 21.5102 17.3632 22.3652 16.3995 21.8367L11.0168 18.8891V0Z" fill="#C7C7C7"/>
  </Svg>
);

const StarIcon = ({ type, size, color }: StarIconProps) => {
  const Component =
    type === 'full' ? StarFull : type === 'half' ? StarHalf : StarBorder;

  return <Component size={size} color={color} />;
};

export default StarIcon;
