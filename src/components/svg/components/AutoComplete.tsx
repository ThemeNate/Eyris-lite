import { SvgProps } from '@/@types/common'

const AutoComplete = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 464" width={width} height={height} fill="none" {...rest}>
            <path d="M114 112.176H675" stroke="url(#ac_g0)" strokeWidth={3}/>
            <path d="M114 376.299H675" stroke="url(#ac_g1)" strokeWidth={3}/>
            <path d="M559 0L559 464" stroke="url(#ac_g2)" strokeWidth={3}/>
            <path d="M229 4.0791L224 463.589" stroke="url(#ac_g3)" strokeWidth={3}/>
            <rect x="282.5" y="201.377" width="222" height="129.571" rx="8.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <rect x="282.5" y="157.526" width="222" height="33.7121" rx="6.5" fill="none" stroke="#3265EB" strokeWidth={3}/>
            <rect x="292" y="166.224" width="78" height="15.2967" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="298" y="219.153" width="164" height="16" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="298" y="258.153" width="164" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="298" y="297.153" width="164" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <defs>
                <linearGradient id="ac_g0" x1="114" y1="112.676" x2="675" y2="112.676" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="ac_g1" x1="114" y1="376.799" x2="675" y2="376.799" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="ac_g2" x1="558.5" y1="0" x2="558.5" y2="464" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="ac_g3" x1="228.5" y1="4.073" x2="223.3" y2="463.581" gradientUnits="userSpaceOnUse">
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

export default AutoComplete
