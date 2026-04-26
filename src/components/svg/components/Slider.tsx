import { SvgProps } from '@/@types/common'

const Slider = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 449"
            width={width}
            height={height}
            fill="none"
            {...rest}
        >
            <path d="M73 146.048H713" stroke="url(#paint0_linear_65_121)" strokeWidth="3" />
            <path d="M82 289.136H713" stroke="url(#paint1_linear_65_121)" strokeWidth="3" />
            <path d="M600.187 82.8923L600.186 361.174" stroke="url(#paint2_linear_65_121)" strokeWidth="3" />
            <path d="M180 83L180 361.281" stroke="url(#paint3_linear_65_121)" strokeWidth="3" />
            <rect x="227" y="216" width="200" height="8" rx="4" className="fill-primary-mild" />
            <rect x="413" y="216" width="149" height="8" rx="4" className="fill-gray-300 dark:fill-gray-600" />
            <rect x="400" y="204" width="32" height="32.2133" rx="16" className="fill-primary" />
            <rect x="405" y="208.94" width="22" height="23" rx="11" className="fill-white dark:fill-gray-200" />
            <defs>
                <linearGradient id="paint0_linear_65_121" x1="73" y1="146.548" x2="713" y2="146.548" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800" />
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800" />
                </linearGradient>
                <linearGradient id="paint1_linear_65_121" x1="82" y1="289.636" x2="713" y2="289.636" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800" />
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800" />
                </linearGradient>
                <linearGradient id="paint2_linear_65_121" x1="599.687" y1="82.8923" x2="599.687" y2="361.174" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800" />
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700" />
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800" />
                </linearGradient>
                <linearGradient id="paint3_linear_65_121" x1="179.5" y1="83" x2="179.5" y2="361.281" gradientUnits="userSpaceOnUse">
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

export default Slider
