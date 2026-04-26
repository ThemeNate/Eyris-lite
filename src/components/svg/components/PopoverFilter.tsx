import { SvgProps } from '@/@types/common'

const PopoverFilter = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 455" width={width} height={height} fill="none" {...rest}>
            <path d="M116 90H677" stroke="url(#pf_g0)" strokeWidth={3}/>
            <path d="M113 387H674" stroke="url(#pf_g1)" strokeWidth={3}/>
            <path d="M559 0L559 455" stroke="url(#pf_g2)" strokeWidth={3}/>
            <path d="M229 4L224 454.597" stroke="url(#pf_g3)" strokeWidth={3}/>
            <rect x="282.5" y="173.5" width="222" height="176" rx="8.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <rect x="282.5" y="130.5" width="103" height="33" rx="6.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <rect x="292" y="139" width="78" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="327" y="194" width="129" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="327" y="232" width="129" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="327" y="270" width="129" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="331" y="308" width="125" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="294" y="191" width="20" height="20" rx="4" className="fill-primary"/>
            <path d="M299.2 201.4L302.529 204.6L309.2 198.2" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="294" y="229" width="20" height="20" rx="4" className="fill-primary"/>
            <path d="M299.2 239.4L302.529 242.6L309.2 236.2" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="294" y="267" width="20" height="20" rx="4" className="fill-primary"/>
            <path d="M299.2 277.4L302.529 280.6L309.2 274.2" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="294" y="305" width="20" height="20" rx="4" className="fill-primary"/>
            <path d="M299.2 315.4L302.529 318.6L309.2 312.2" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
                <linearGradient id="pf_g0" x1="116" y1="90.5" x2="677" y2="90.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="pf_g1" x1="113" y1="387.5" x2="674" y2="387.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="pf_g2" x1="558.5" y1="0" x2="558.5" y2="455" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="pf_g3" x1="228.5" y1="3.994" x2="223.5" y2="454.591" gradientUnits="userSpaceOnUse">
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

export default PopoverFilter
