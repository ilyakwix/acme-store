import { createBoard } from '@wixc3/react-board';
import { AcmeStoreLogo } from '../../components/acme-store-logo/acme-store-logo';

const cartIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" fill="none" viewBox="0 0 20 22">
        <g clipPath="url(#a)">
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 1 1 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5l-3-4H4ZM1 5h18"
            />
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M14 9a4 4 0 1 1-8 0"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h20v22H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default createBoard({
    name: 'Header',
    Board: () => (
        <header>
            <div>
                <a>
                    <AcmeStoreLogo />
                </a>
                <nav>
                    <ul>
                        <li>
                            <a>All</a>
                        </li>
                        <li>
                            <a>Shirts</a>
                        </li>
                        <li>
                            <a>Stickers</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <input placeholder="Search for products..." />

            <button>{cartIcon}</button>
        </header>
    ),
});
