import { SvgProps } from '@/@types/common'

const Affix = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 464" width={width} height={height} fill="none" {...rest}>
            <path d="M114 96H675" stroke="url(#af_g0)" strokeWidth={3}/>
            <path d="M112 390H673" stroke="url(#af_g1)" strokeWidth={3}/>
            <path d="M559 0L559 464" stroke="url(#af_g2)" strokeWidth={3}/>
            <path d="M229 4.0791L224 463.589" stroke="url(#af_g3)" strokeWidth={3}/>
            <rect x="281.5" y="139.5" width="222" height="219" rx="8.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <rect x="304" y="161" width="175" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="303" y="192" width="176" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="304" y="223" width="175" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="304" y="254" width="175" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="303" y="285" width="175" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="304" y="316" width="69" height="27" rx="4" className="fill-primary"/>
            <rect x="320" y="327" width="38" height="6" rx="3" fill="white"/>
            <rect x="389" y="322" width="89" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <defs>
                <linearGradient id="af_g0" x1="114" y1="96.5" x2="675" y2="96.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="af_g1" x1="112" y1="390.5" x2="673" y2="390.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="af_g2" x1="558.5" y1="0" x2="558.5" y2="464" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="af_g3" x1="228.5" y1="4.07344" x2="223.3" y2="463.581" gradientUnits="userSpaceOnUse">
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

export default Affix
