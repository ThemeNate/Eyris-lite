import { SvgProps } from '@/@types/common'

const SyntaxHighlighter = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 464" width={width} height={height} fill="none" {...rest}>
            <path d="M114 96H675" stroke="url(#sh_g0)" strokeWidth={3}/>
            <path d="M112 390H673" stroke="url(#sh_g1)" strokeWidth={3}/>
            <path d="M559 0L559 464" stroke="url(#sh_g2)" strokeWidth={3}/>
            <path d="M229 4.0791L224 463.589" stroke="url(#sh_g3)" strokeWidth={3}/>
            <rect x="281.5" y="139.5" width="222" height="210.448" rx="8.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <circle cx="305" cy="169" r="8" className="fill-gray-300 dark:fill-gray-600"/>
            <circle cx="305" cy="201" r="8" className="fill-gray-300 dark:fill-gray-600"/>
            <circle cx="305" cy="232" r="8" className="fill-gray-300 dark:fill-gray-600"/>
            <circle cx="305" cy="262" r="8" className="fill-gray-300 dark:fill-gray-600"/>
            <circle cx="305" cy="294" r="8" className="fill-gray-300 dark:fill-gray-600"/>
            <circle cx="305" cy="324" r="8" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="324" y="161" width="55" height="16" rx="4" className="fill-primary"/>
            <rect x="324" y="193" width="81" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="414" y="193" width="47" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="362" y="255" width="69" height="15" rx="4" className="fill-primary"/>
            <rect x="341" y="248" width="59" height="3" rx="1.5" transform="rotate(90 341 248)" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="440" y="255" width="47" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="418" y="286" width="69" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="323" y="317" width="69" height="15" rx="4" className="fill-primary"/>
            <rect x="362" y="286" width="47" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="323" y="224" width="164" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <defs>
                <linearGradient id="sh_g0" x1="114" y1="96.5" x2="675" y2="96.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="sh_g1" x1="112" y1="390.5" x2="673" y2="390.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="sh_g2" x1="558.5" y1="0" x2="558.5" y2="464" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="sh_g3" x1="228.5" y1="4.07344" x2="223.3" y2="463.581" gradientUnits="userSpaceOnUse">
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

export default SyntaxHighlighter
