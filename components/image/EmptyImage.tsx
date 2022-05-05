import { EmptyImageStyle } from './EmptyImage.style';
import type { EmptyImageType } from './EmptyImage.type';

const EmptyImage = ({ width, height }: EmptyImageType) => <EmptyImageStyle width={width} height={height} />;

export default EmptyImage;
