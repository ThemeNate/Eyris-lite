import { SvgProps } from '@/@types/common'

const ActionBar = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 450"
            width={width}
            height={height}
            fill="none"
            {...rest}
        >
            <path d="M55 133H704" stroke="url(#paint0_linear_87_32)" strokeWidth="3" />
            <path d="M60 310H709" stroke="url(#paint1_linear_87_32)" strokeWidth="3" />
            <path d="M600.075 45.1494L600.075 405.149" stroke="url(#paint2_linear_87_32)" strokeWidth="3" />
            <path d="M178.075 45.1494L178.075 405.149" stroke="url(#paint3_linear_87_32)" strokeWidth="3" />
            <rect
                x="223.5"
                y="186.5"
                width="328"
                height="65"
                rx="8.5"
                className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700"
                strokeWidth="3"
            />
            <rect x="250" y="211" width="81" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600" />
            <rect
                x="407.5"
                y="207.5"
                width="53"
                height="23"
                rx="3.5"
                className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700"
            />
            <rect x="474" y="207" width="54" height="24" rx="4" className="fill-primary" />
            <rect x="482" y="216" width="38" height="6" rx="3" fill="white" />
            <rect x="414" y="216" width="38" height="6" rx="3" className="fill-gray-300 dark:fill-gray-600" />
            <defs>
                <linearGradient id="paint0_linear_87_32" x1="55" y1="133.5" x2="704" y2="133.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800" />
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800" />
                </linearGradient>
                <linearGradient id="paint1_linear_87_32" x1="60" y1="310.5" x2="709" y2="310.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800" />
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800" />
                </linearGradient>
                <linearGradient id="paint2_linear_87_32" x1="599.575" y1="45.1494" x2="599.575" y2="405.149" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800" />
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800" />
                </linearGradient>
                <linearGradient id="paint3_linear_87_32" x1="177.575" y1="45.1494" x2="177.575" y2="405.149" gradientUnits="userSpaceOnUse">
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

export default ActionBar
