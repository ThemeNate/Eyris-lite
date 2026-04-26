import { SvgProps } from '@/@types/common'

const Popover = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 450"
            width={width}
            height={height}
            fill="none"
            {...rest}
        >
            <path d="M57 92H707" stroke="url(#paint0_linear_87_100)" strokeWidth="3" />
            <path d="M57 374H707" stroke="url(#paint1_linear_87_100)" strokeWidth="3" />
            <path d="M559 25L559 435" stroke="url(#paint2_linear_87_100)" strokeWidth="3" />
            <path d="M224 25L224 435" stroke="url(#paint3_linear_87_100)" strokeWidth="3" />
            <rect x="413" y="164" width="43" height="44" rx="10" transform="rotate(-180 413 164)" className="fill-primary" />
            <rect x="396" y="147" width="9" height="9" rx="4" transform="rotate(-180 396 147)" fill="white" />
            <rect
                x="489.5"
                y="338.5"
                width="198"
                height="156"
                rx="8.5"
                transform="rotate(-180 489.5 338.5)"
                className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700"
                strokeWidth="3"
            />
            <rect x="319" y="208" width="57" height="14" rx="4" className="fill-gray-300 dark:fill-gray-600" />
            <rect x="319" y="239" width="135" height="14" rx="4" className="fill-gray-300 dark:fill-gray-600" />
            <rect x="319" y="269" width="135" height="13" rx="4" className="fill-gray-300 dark:fill-gray-600" />
            <rect x="319" y="298" width="90" height="14" rx="4" className="fill-gray-300 dark:fill-gray-600" />
            <path
                d="M391.548 171.485C391.728 171.103 392.272 171.103 392.452 171.485L398.827 185.037C398.983 185.369 398.742 185.75 398.375 185.75L385.625 185.75C385.259 185.75 385.017 185.369 385.173 185.037L391.548 171.485Z"
                className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700"
                strokeWidth="3"
            />
            <rect x="402" y="194" width="21" height="10" transform="rotate(-180 402 194)" className="fill-white dark:fill-gray-800" />
            <defs>
                <linearGradient id="paint0_linear_87_100" x1="57" y1="92.5" x2="707" y2="92.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800" />
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800" />
                </linearGradient>
                <linearGradient id="paint1_linear_87_100" x1="57" y1="374.5" x2="707" y2="374.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800" />
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800" />
                </linearGradient>
                <linearGradient id="paint2_linear_87_100" x1="558.5" y1="25" x2="558.5" y2="435" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800" />
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800" />
                </linearGradient>
                <linearGradient id="paint3_linear_87_100" x1="223.5" y1="25" x2="223.5" y2="435" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800" />
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default Popover
