import classNames from 'classnames';
import styles from './acme-store-logo.module.scss';

export interface AcmeStoreLogoProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AcmeStoreLogo = ({ className }: AcmeStoreLogoProps) => {
    return <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
        >
            <path
                fill="#000"
                fillRule="evenodd"
                d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0Zm-.121 7.026 1.77 3.104-7.121 12.42H7.03l8.849-15.524Zm2.231 10.172 1.77-3.152 4.847 8.504h-9.621l1.74-3.099h2.548l-1.284-2.253Z"
                clipRule="evenodd"
            />
        </svg>;
};
