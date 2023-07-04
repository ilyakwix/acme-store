import { createBoard } from '@wixc3/react-board';
import { ProductItem } from '../../../components/product-item/product-item';

export default createBoard({
    name: 'ProductItem',
    Board: () => (
        <ProductItem
            imageUrl="https://wixmp-b7f7090100b13623109851bc.wixmp.com/usability/t-shirt-color-beige.png"
            price={20}
            title="Product Title"
            color="#7928CA"
        />
    ),
    environmentProps: {
        canvasWidth: 570,
    },
});
