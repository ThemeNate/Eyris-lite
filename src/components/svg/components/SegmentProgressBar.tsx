import { SvgProps } from '@/@types/common'

const SegmentProgressBar = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 452" width={width} height={height} fill="none" {...rest}>
            <path d="M90 145H666" stroke="url(#spb_g0)" strokeWidth={3}/>
            <path d="M100 314H676" stroke="url(#spb_g1)" strokeWidth={3}/>
            <path d="M561 67.7983L561 395.798" stroke="url(#spb_g2)" strokeWidth={3}/>
            <path d="M198 70.7983L198 398.798" stroke="url(#spb_g3)" strokeWidth={3}/>
            <rect x="254" y="214" width="10" height="34" rx="1" className="fill-primary"/>
            <rect x="266" y="214" width="11" height="34" rx="1" className="fill-primary"/>
            <rect x="279" y="214" width="10" height="34" rx="1" className="fill-primary"/>
            <rect x="291" y="214" width="10" height="34" rx="1" className="fill-primary"/>
            <rect x="303" y="214" width="11" height="34" rx="1" className="fill-primary"/>
            <rect x="316" y="214" width="11" height="34" rx="1" className="fill-primary"/>
            <rect x="329" y="214" width="11" height="34" rx="1" className="fill-primary"/>
            <rect x="342" y="214" width="10" height="34" rx="1" className="fill-primary"/>
            <rect x="354" y="214" width="10" height="34" rx="1" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="366" y="214" width="10" height="34" rx="1" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="378" y="214" width="10" height="34" rx="1" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="390" y="214" width="11" height="34" rx="1" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="403" y="214" width="11" height="34" rx="1" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="416" y="214" width="11" height="34" rx="1" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="429" y="214" width="10" height="34" rx="1" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="441" y="214" width="10" height="34" rx="1" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="453" y="214" width="11" height="34" rx="1" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="466" y="214" width="10" height="34" rx="1" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="478" y="214" width="11" height="34" rx="1" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="491" y="214" width="10" height="34" rx="1" className="fill-gray-300 dark:fill-gray-600"/>
            <defs>
                <linearGradient id="spb_g0" x1="90" y1="141.5" x2="666" y2="141.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="spb_g1" x1="100" y1="314.5" x2="676" y2="314.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="spb_g2" x1="560.5" y1="67.7983" x2="560.5" y2="395.798" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="spb_g3" x1="197.5" y1="70.7983" x2="197.5" y2="398.798" gradientUnits="userSpaceOnUse">
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

export default SegmentProgressBar
