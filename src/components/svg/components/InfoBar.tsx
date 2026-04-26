import { SvgProps } from '@/@types/common'

const InfoBar = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width={width} height={height} fill="none" {...rest}>
            <path d="M146 157H595" stroke="url(#ib_g0)" strokeWidth={3}/>
            <path d="M161 283H610" stroke="url(#ib_g1)" strokeWidth={3}/>
            <path d="M518 81L518 361" stroke="url(#ib_g2)" strokeWidth={3}/>
            <path d="M232 85L232 365" stroke="url(#ib_g3)" strokeWidth={3}/>
            <rect x="284" y="227" width="18" height="10" rx="2" transform="rotate(90 284 227)" fill="#EB4137"/>
            <rect x="298" y="215" width="30" height="10" rx="2" transform="rotate(90 298 215)" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="312" y="205" width="40" height="10" rx="2" transform="rotate(90 312 205)" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="365" y="227" width="18" height="10" rx="2" transform="rotate(90 365 227)" fill="#F59E0B"/>
            <rect x="379" y="215" width="30" height="10" rx="2" transform="rotate(90 379 215)" fill="#F59E0B"/>
            <rect x="393" y="205" width="40" height="10" rx="2" transform="rotate(90 393 205)" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="446" y="227" width="18" height="10" rx="2" transform="rotate(90 446 227)" fill="#00A85B"/>
            <rect x="460" y="215" width="30" height="10" rx="2" transform="rotate(90 460 215)" fill="#00A85B"/>
            <rect x="474" y="205" width="40" height="10" rx="2" transform="rotate(90 474 205)" fill="#00A85B"/>
            <defs>
                <linearGradient id="ib_g0" x1="146" y1="157.5" x2="595" y2="157.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="ib_g1" x1="161" y1="283.5" x2="610" y2="283.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="ib_g2" x1="517.5" y1="81" x2="517.5" y2="361" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="ib_g3" x1="231.5" y1="85" x2="231.5" y2="365" gradientUnits="userSpaceOnUse">
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

export default InfoBar
