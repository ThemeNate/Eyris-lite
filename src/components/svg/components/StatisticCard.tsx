import { SvgProps } from '@/@types/common'

const StatisticCard = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 452" width={width} height={height} fill="none" {...rest}>
            <path d="M105 106H665" stroke="url(#sc_g0)" strokeWidth={3}/>
            <path d="M107 337H667" stroke="url(#sc_g1)" strokeWidth={3}/>
            <path d="M566 34.7986L566 397.799" stroke="url(#sc_g2)" strokeWidth={3}/>
            <path d="M216 37.7986L216 401.799" stroke="url(#sc_g3)" strokeWidth={3}/>
            <rect x="269.712" y="148.5" width="240.577" height="146" rx="11.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <rect x="289" y="230" width="123" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="457" y="251" width="39" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="289" y="258" width="79" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <circle cx="306" cy="183" r="17" className="fill-gray-300 dark:fill-gray-600"/>
            <defs>
                <linearGradient id="sc_g0" x1="105" y1="102.5" x2="665" y2="102.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="sc_g1" x1="107" y1="337.5" x2="667" y2="337.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="sc_g2" x1="565.5" y1="34.7986" x2="565.5" y2="397.799" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="sc_g3" x1="215.5" y1="37.7986" x2="215.5" y2="401.799" gradientUnits="userSpaceOnUse">
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

export default StatisticCard
