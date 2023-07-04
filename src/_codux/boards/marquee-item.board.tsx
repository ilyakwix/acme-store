import { createBoard } from '@wixc3/react-board';
import { MarqueeItem } from '../../components/marquee-item/marquee-item';

export default createBoard({
    name: 'MarqueeItem',
    Board: () => (
        <MarqueeItem
            imageUrl="https://wixmp-b7f7090100b13623109851bc.wixmp.com/usability/hoodie.png"
            title="Title"
        />
    ),
    environmentProps: {
        canvasWidth: 464,
        canvasBackgroundColor: '#000000',
    },
});
