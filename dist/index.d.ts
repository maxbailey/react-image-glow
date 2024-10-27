import { FC, ReactNode } from 'react';
interface ImageGlowProps {
    children: ReactNode;
    radius?: number;
    saturation?: number;
    opacity?: number;
    className?: string;
}
declare const ImageGlow: FC<ImageGlowProps>;
export default ImageGlow;
