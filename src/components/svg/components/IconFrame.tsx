import { SvgProps } from '@/@types/common'

const IconFrame = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 452" width={width} height={height} fill="none" {...rest}>
            <path d="M194 145H564" stroke="url(#if_g0)" strokeWidth={3}/>
            <path d="M199 299H569" stroke="url(#if_g1)" strokeWidth={3}/>
            <path d="M488 81.5469L488 363.414" stroke="url(#if_g2)" strokeWidth={3}/>
            <path d="M273 81.5469L273 363.414" stroke="url(#if_g3)" strokeWidth={3}/>
            <rect x="338.023" y="180.98" width="81.9537" height="82.52" rx="10.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <path d="M386.628 206.723L389.8 213.067C390.227 213.945 391.375 214.777 392.342 214.957L398.08 215.902C401.748 216.51 402.603 219.165 399.97 221.82L395.492 226.297C394.75 227.04 394.323 228.502 394.57 229.56L395.852 235.095C396.865 239.46 394.525 241.17 390.678 238.875L385.3 235.68C384.332 235.095 382.713 235.095 381.745 235.68L376.367 238.875C372.52 241.147 370.18 239.46 371.193 235.095L372.475 229.56C372.723 228.525 372.295 227.062 371.553 226.297L367.075 221.82C364.443 219.187 365.298 216.532 368.965 215.902L374.703 214.957C375.67 214.8 376.818 213.945 377.245 213.067L380.418 206.723C382.105 203.28 384.895 203.28 386.628 206.723Z" stroke="#3265EB" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M370 206.25H356.5" stroke="#3265EB" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M363.25 237.75H356.5" stroke="#3265EB" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M358.75 222H356.5" stroke="#3265EB" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
                <linearGradient id="if_g0" x1="194" y1="145.5" x2="564" y2="145.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="if_g1" x1="199" y1="299.5" x2="569" y2="299.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="if_g2" x1="487.5" y1="81.5469" x2="487.5" y2="363.414" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="if_g3" x1="272.5" y1="81.5469" x2="272.5" y2="363.414" gradientUnits="userSpaceOnUse">
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

export default IconFrame
