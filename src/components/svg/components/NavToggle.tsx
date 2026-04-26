import { SvgProps } from '@/@types/common'

const NavToggle = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 452" width={width} height={height} fill="none" {...rest}>
            <path d="M194 145H564" stroke="url(#nt_g0)" strokeWidth={3}/>
            <path d="M199 299H569" stroke="url(#nt_g1)" strokeWidth={3}/>
            <path d="M488 81.5469L488 363.414" stroke="url(#nt_g2)" strokeWidth={3}/>
            <path d="M273 81.5469L273 363.414" stroke="url(#nt_g3)" strokeWidth={3}/>
            <rect x="338.023" y="180.98" width="81.9537" height="82.52" rx="10.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <path d="M393.962 228.413L386.375 236L393.962 243.588" stroke="#A3A3A3" strokeWidth={3} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M407.625 236H386.587" stroke="#A3A3A3" strokeWidth={3} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M355 202H403" stroke="#A3A3A3" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M355 215H387" stroke="#A3A3A3" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M355 229H376" stroke="#A3A3A3" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M355 242H367" stroke="#A3A3A3" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
                <linearGradient id="nt_g0" x1="194" y1="145.5" x2="564" y2="145.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="nt_g1" x1="199" y1="299.5" x2="569" y2="299.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="nt_g2" x1="487.5" y1="81.5469" x2="487.5" y2="363.414" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="nt_g3" x1="272.5" y1="81.5469" x2="272.5" y2="363.414" gradientUnits="userSpaceOnUse">
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

export default NavToggle
