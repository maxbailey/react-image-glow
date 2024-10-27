import React, {
  CSSProperties,
  FC,
  ReactElement,
  ImgHTMLAttributes,
} from 'react';

interface ImageGlowProps {
  children: ReactElement<ImgHTMLAttributes<HTMLImageElement>>;
  radius?: number;
  saturation?: number;
  opacity?: number;
  className?: string;
}

const parentStyle: CSSProperties = {
  position: 'relative',
  display: 'inline-block',
};

const blurStyle = (
  baseImage: string,
  radius: number,
  saturation: number,
  opacity: number
): CSSProperties => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  pointerEvents: 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url(${baseImage})`,
  filter: `blur(${radius}px) saturate(${saturation})`,
  opacity: opacity,
  zIndex: 0,
});

const ImageGlow: FC<ImageGlowProps> = ({
  children,
  radius = 50,
  saturation = 2,
  opacity = 1,
  className = '',
}) => {
  if (!React.isValidElement(children)) {
    console.error('ImageGlow requires a valid React element as its child.');
    return null;
  }

  const { src, style: childStyle, className: childClassName } = children.props;

  const baseImage = src ?? '';

  const glowStyle: CSSProperties = {
    position: 'relative',
    zIndex: 1,
    display: 'block',
    width: '100%',
    height: 'auto',
  };

  const styledImage = React.cloneElement(children, {
    style: { ...glowStyle, ...(childStyle || {}) },
    className: `${childClassName || ''} ${className}`.trim(),
  });

  return (
    <div style={parentStyle}>
      {styledImage}
      <div style={blurStyle(baseImage, radius, saturation, opacity)} />
    </div>
  );
};

export default ImageGlow;
