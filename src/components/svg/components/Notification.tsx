import { SvgProps } from '@/@types/common'

const Notification = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 450"
            width={width}
            height={height}
            fill="none"
            {...rest}
        >
            <path d="M18 99H738" stroke="url(#paint0_linear_87_2)" strokeWidth="3" />
            <path d="M18 333H738" stroke="url(#paint1_linear_87_2)" strokeWidth="3" />
            <path d="M590 5L590 445.597" stroke="url(#paint2_linear_87_2)" strokeWidth="3" />
            <path d="M176 4L176 444.597" stroke="url(#paint3_linear_87_2)" strokeWidth="3" />
            <rect
                x="244.5"
                y="141.5"
                width="272"
                height="149"
                rx="18.5"
                className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700"
                strokeWidth="3"
            />
            <rect x="320" y="177" width="81" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600" />
            <rect x="269" y="216" width="219" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600" />
            <rect x="269" y="245" width="174" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600" />
            <circle cx="286" cy="183" r="17" className="fill-gray-300 dark:fill-gray-600" />
            <path d="M286 190.5H285.99" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M286 175V184" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
                <linearGradient id="paint0_linear_87_2" x1="18" y1="99.5" x2="738" y2="99.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800" />
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800" />
                </linearGradient>
                <linearGradient id="paint1_linear_87_2" x1="18" y1="333.5" x2="738" y2="333.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800" />
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800" />
                </linearGradient>
                <linearGradient id="paint2_linear_87_2" x1="589.5" y1="5" x2="589.5" y2="445.597" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800" />
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800" />
                </linearGradient>
                <linearGradient id="paint3_linear_87_2" x1="175.5" y1="4" x2="175.5" y2="444.597" gradientUnits="userSpaceOnUse">
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

export default Notification
