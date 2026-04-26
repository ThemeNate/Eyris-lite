import { SvgProps } from '@/@types/common'

const PatternInput = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 452" width={width} height={height} fill="none" {...rest}>
            <path d="M80 132H720" stroke="url(#pai_g0)" strokeWidth={3}/>
            <path d="M82 293H713" stroke="url(#pai_g1)" strokeWidth={3}/>
            <path d="M600.187 70L600.186 352" stroke="url(#pai_g2)" strokeWidth={3}/>
            <path d="M169.187 70L169.186 352" stroke="url(#pai_g3)" strokeWidth={3}/>
            <rect x="221.5" y="199.5" width="328" height="51" rx="8.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <circle cx="243.5" cy="224.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <circle cx="257.5" cy="224.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <circle cx="271.5" cy="224.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <circle cx="285.5" cy="224.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <circle cx="314.5" cy="224.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <circle cx="328.5" cy="224.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <circle cx="342.5" cy="224.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <circle cx="356.5" cy="224.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <circle cx="385.5" cy="224.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <circle cx="399.5" cy="224.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <circle cx="413.5" cy="224.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <circle cx="427.5" cy="224.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <circle cx="456.5" cy="224.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <circle cx="470.5" cy="224.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <circle cx="484.5" cy="224.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <circle cx="498.5" cy="224.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="225" y="168" width="78" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <defs>
                <linearGradient id="pai_g0" x1="80" y1="132.5" x2="720" y2="132.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="pai_g1" x1="82" y1="293.5" x2="713" y2="293.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="pai_g2" x1="599.687" y1="70" x2="599.687" y2="352" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="pai_g3" x1="168.687" y1="70" x2="168.687" y2="352" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
            </defs>
        </svg>
    )
}

export default PatternInput
