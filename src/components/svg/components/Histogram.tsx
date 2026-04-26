import { SvgProps } from '@/@types/common'

const Histogram = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 451" width={width} height={height} fill="none" {...rest}>
            <path d="M22 70H742" stroke="url(#hist_g0)" strokeWidth={3}/>
            <path d="M25 390H745" stroke="url(#hist_g1)" strokeWidth={3}/>
            <path d="M567 9.89917L567 446.051" stroke="url(#hist_g2)" strokeWidth={3}/>
            <path d="M209 14.8486L209 451" stroke="url(#hist_g3)" strokeWidth={3}/>
            <rect x="286" y="219.715" width="14" height="29" rx="2" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="308" y="204.715" width="15" height="44" rx="2" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="331" y="191.576" width="14" height="57.4148" rx="2" className="fill-primary"/>
            <rect x="353" y="167.818" width="15" height="81.1726" rx="2" className="fill-primary"/>
            <rect x="374" y="161.879" width="15" height="87.1121" rx="2" className="fill-primary"/>
            <rect x="395" y="150" width="15" height="98.991" rx="2" className="fill-primary"/>
            <rect x="418" y="174.748" width="14" height="74.2432" rx="2" className="fill-primary"/>
            <rect x="440" y="189.715" width="15" height="59" rx="2" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="463" y="212.715" width="14" height="36" rx="2" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="289" y="283" width="137" height="8" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="343" y="283" width="137" height="8" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="339" y="283" width="87" height="8" rx="4" className="fill-primary"/>
            <rect x="329" y="278" width="18.8571" height="18.9829" rx="9.42857" className="fill-primary"/>
            <rect x="331.946" y="280.911" width="12.9643" height="13.5536" rx="6.48214" fill="white"/>
            <rect x="421" y="278" width="18.8571" height="18.9829" rx="9.42857" className="fill-primary"/>
            <rect x="423.946" y="280.911" width="12.9643" height="13.5536" rx="6.48214" fill="white"/>
            <defs>
                <linearGradient id="hist_g0" x1="22" y1="66.5" x2="742" y2="66.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="hist_g1" x1="25" y1="390.5" x2="745" y2="390.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="hist_g2" x1="566.5" y1="9.89917" x2="566.5" y2="446.051" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="hist_g3" x1="208.5" y1="14.8486" x2="208.5" y2="451" gradientUnits="userSpaceOnUse">
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

export default Histogram
