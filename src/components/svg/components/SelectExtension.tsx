import { SvgProps } from '@/@types/common'

const SelectExtension = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 455" width={width} height={height} fill="none" {...rest}>
            <path d="M114 109.275H675" stroke="url(#se_g0)" strokeWidth={3}/>
            <path d="M114 366.567H675" stroke="url(#se_g1)" strokeWidth={3}/>
            <path d="M559 0L559 452" stroke="url(#se_g2)" strokeWidth={3}/>
            <path d="M229 3.97363L224 451.6" stroke="url(#se_g3)" strokeWidth={3}/>
            <rect x="282.5" y="196.208" width="222" height="126.143" rx="8.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <rect x="292" y="245.371" width="203" height="27.8154" rx="4" fill="#F5F5F5"/>
            <rect x="282.5" y="153.491" width="222" height="32.7626" rx="6.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <rect x="315" y="162" width="78" height="14.9011" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="292" y="162" width="15" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="299" y="213" width="15" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="299" y="251" width="15" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="299" y="289" width="15" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="322" y="213.657" width="78" height="14.9011" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="322" y="251.406" width="78" height="14.9011" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <path d="M476 259.279L479.662 263.253L487 255.306" stroke="#3265EB" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="322" y="289.156" width="78" height="14.9011" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <defs>
                <linearGradient id="se_g0" x1="114" y1="109.775" x2="675" y2="109.775" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="se_g1" x1="114" y1="367.067" x2="675" y2="367.067" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="se_g2" x1="558.5" y1="0" x2="558.5" y2="452" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="se_g3" x1="228.5" y1="3.96812" x2="223.566" y2="451.595" gradientUnits="userSpaceOnUse">
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

export default SelectExtension
