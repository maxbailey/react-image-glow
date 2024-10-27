import React, { CSSProperties, FC, ReactElement, ReactNode } from 'react';

interface ImageGlowProps {
  children: ReactNode;
  radius?: number;
  saturation?: number;
  opacity?: number;
  className?: string;
}

function isImageElement(
  element: ReactNode
): element is ReactElement<React.ImgHTMLAttributes<HTMLImageElement>> {
  return React.isValidElement(element) && element.type === 'img';
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
  if (!isImageElement(children)) {
    console.error('ImageGlow expects a single <img> element as its child.');
    return null;
  }

  const baseImage = children.props.src ?? '';

  const glowStyle: CSSProperties = {
    position: 'relative',
    zIndex: 1,
    display: 'block',
    width: '100%',
    height: 'auto',
  };

  const styledImage = React.cloneElement(children, {
    style: { ...glowStyle, ...(children.props.style || {}) },
    className: `${children.props.className || ''} ${className}`.trim(),
  });

  return (
    <div style={parentStyle}>
      {styledImage}
      <div style={blurStyle(baseImage, radius, saturation, opacity)} />
    </div>
  );
};

export default ImageGlow;
