// Make svg imports work with typescript

declare module '*.svg' {
  import {SvgProps} from 'react-native-svg';
  const content: React.StatelessComponent<SvgProps>;
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
