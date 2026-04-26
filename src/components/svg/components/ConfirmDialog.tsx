import { SvgProps } from '@/@types/common'

const ConfirmDialog = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width={width} height={height} fill="none" {...rest}>
            <path d="M22 84H742" stroke="url(#cd_g0)" strokeWidth={3}/>
            <path d="M22 346H742" stroke="url(#cd_g1)" strokeWidth={3}/>
            <path d="M600.149 4.70166L600.149 445.299" stroke="url(#cd_g2)" strokeWidth={3}/>
            <path d="M169.224 4.70166L169.224 445.299" stroke="url(#cd_g3)" strokeWidth={3}/>
            <rect x="223.5" y="115.5" width="328" height="193" rx="18.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <path d="M268.999 169.468H258.394C252.322 169.468 249.784 165.128 252.724 159.825L258.184 149.99L263.329 140.75C266.444 135.133 271.554 135.133 274.669 140.75L279.814 150.008L285.274 159.843C288.214 165.145 285.659 169.485 279.604 169.485H268.999V169.468Z" className="fill-gray-300 dark:fill-gray-600"/>
            <path d="M269 163.5H268.99" stroke="white" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M269 148V157" stroke="white" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="299" y="149" width="81" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="248" y="189" width="273" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="248" y="218" width="273" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="400.5" y="263.5" width="53" height="23" rx="3.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700"/>
            <rect x="467" y="263" width="54" height="24" rx="4" className="fill-primary"/>
            <rect x="475" y="272" width="38" height="6" rx="3" fill="white"/>
            <rect x="406" y="272" width="38" height="6" rx="3" className="fill-gray-300 dark:fill-gray-600"/>
            <path d="M509 153L518 144" stroke="#A4A7AE" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M518 153L509 144" stroke="#A4A7AE" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
                <linearGradient id="cd_g0" x1="22" y1="84.5" x2="742" y2="84.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="cd_g1" x1="22" y1="346.5" x2="742" y2="346.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="cd_g2" x1="599.649" y1="4.70166" x2="599.649" y2="445.299" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="cd_g3" x1="168.724" y1="4.70166" x2="168.724" y2="445.299" gradientUnits="userSpaceOnUse">
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

export default ConfirmDialog
