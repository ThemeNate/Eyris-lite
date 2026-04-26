import { SvgProps } from '@/@types/common'

const AdvancedFilterBuilder = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 456" width={width} height={height} fill="none" {...rest}>
            <path d="M22 91H742" stroke="url(#afb_g0)" strokeWidth={3}/>
            <path d="M25 356H745" stroke="url(#afb_g1)" strokeWidth={3}/>
            <path d="M601 10L601 450.597" stroke="url(#afb_g2)" strokeWidth={3}/>
            <path d="M180 15L180 455.597" stroke="url(#afb_g3)" strokeWidth={3}/>
            <rect x="231.5" y="128.5" width="317" height="192" rx="11.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <path d="M232 274H547.5" className="stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <rect x="444" y="287" width="39" height="21" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="499" y="287" width="37" height="21" rx="4" className="fill-primary"/>
            <rect x="252" y="148" width="124" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="291" y="186" width="62" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="363" y="186" width="62" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="437" y="186" width="62" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="291" y="220" width="62" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="363" y="220" width="62" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="437" y="220" width="62" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <path d="M260 178V188.556C260 190.037 260.9 193 264.5 193C268.1 193 271.667 193 273 193" className="stroke-gray-300 dark:stroke-gray-600" strokeWidth={3} strokeLinecap="round"/>
            <path d="M260 171V188.556C260 190.037 260.9 193 264.5 193C268.1 193 271.667 193 273 193" className="stroke-gray-300 dark:stroke-gray-600" strokeWidth={3} strokeLinecap="round"/>
            <path d="M260 206V223.556C260 225.037 260.9 228 264.5 228C268.1 228 271.667 228 273 228" className="stroke-gray-300 dark:stroke-gray-600" strokeWidth={3} strokeLinecap="round"/>
            <defs>
                <linearGradient id="afb_g0" x1="22" y1="87.5" x2="742" y2="87.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="afb_g1" x1="25" y1="356.5" x2="745" y2="356.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="afb_g2" x1="600.5" y1="10" x2="600.5" y2="450.597" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="afb_g3" x1="179.5" y1="15" x2="179.5" y2="455.597" gradientUnits="userSpaceOnUse">
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

export default AdvancedFilterBuilder
