import styled from 'styled-components';
import sprite from './sprite.svg';

const SVG = styled.svg`
  width: ${({ props }) => (props.width && props.width + 'px') || '40px'};
  height: ${({ props }) => (props.height && props.height + 'px') || '40px'};
  fill: ${({ props }) => props.fill || null};

  &:hover {
    fill: ${({ props }) => props.hover || null};
  }
`;

const setSVG = (icon, props) => {
  return (
    <SVG props={props}>
      <use href={sprite + `#${icon}`}></use>
    </SVG>
  );
};

export default setSVG;
