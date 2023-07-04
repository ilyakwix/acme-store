import { createBoard } from '@wixc3/react-board';
import { AcmeStoreLogo } from '../../../components/acme-store-logo/acme-store-logo';

export default createBoard({
    name: 'AcmeStoreLogo',
    Board: () => <AcmeStoreLogo />
});
