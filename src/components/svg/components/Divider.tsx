import { SvgProps } from '@/@types/common'

const Divider = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 455" width={width} height={height} fill="none" {...rest}>
            <path d="M113 83H674" stroke="url(#div_g0)" strokeWidth={3}/>
            <path d="M113 382H674" stroke="url(#div_g1)" strokeWidth={3}/>
            <path d="M559 0L559 455" stroke="url(#div_g2)" strokeWidth={3}/>
            <path d="M229 4L224 454.597" stroke="url(#div_g3)" strokeWidth={3}/>
            <rect x="289.5" y="121.5" width="197" height="221" rx="8.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <rect x="309" y="156" width="159" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="309" y="182" width="124" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="309" y="267" width="159" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="309" y="293" width="124" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="472" y="231" width="163" height="2.99999" rx="1.49999" transform="rotate(-180 472 231)" className="fill-gray-300 dark:fill-gray-600"/>
            <defs>
                <linearGradient id="div_g0" x1="113" y1="83.5" x2="674" y2="83.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="div_g1" x1="113" y1="382.5" x2="674" y2="382.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="div_g2" x1="558.5" y1="0" x2="558.5" y2="455" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="div_g3" x1="228.5" y1="3.99445" x2="223.5" y2="454.591" gradientUnits="userSpaceOnUse">
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

export default Divider
