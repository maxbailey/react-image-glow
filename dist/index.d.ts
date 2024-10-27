import { FC, ReactElement, ImgHTMLAttributes } from 'react';
interface ImageGlowProps {
    children: ReactElement<ImgHTMLAttributes<HTMLImageElement>>;
    radius?: number;
    saturation?: number;
    opacity?: number;
    className?: string;
}
declare const ImageGlow: FC<ImageGlowProps>;
export default ImageGlow;
