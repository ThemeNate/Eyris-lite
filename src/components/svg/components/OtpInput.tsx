import { SvgProps } from '@/@types/common'

const OtpInput = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 452" width={width} height={height} fill="none" {...rest}>
            <path d="M73 148H713" stroke="url(#otp_g0)" strokeWidth={3}/>
            <path d="M82 293H713" stroke="url(#otp_g1)" strokeWidth={3}/>
            <path d="M635 81L635 363" stroke="url(#otp_g2)" strokeWidth={3}/>
            <path d="M152 82L152 364" stroke="url(#otp_g3)" strokeWidth={3}/>
            <rect x="201.5" y="197.5" width="52" height="62" rx="8.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <circle cx="227.5" cy="228.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="266.5" y="197.5" width="52" height="62" rx="8.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <circle cx="292.5" cy="228.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="331.5" y="197.5" width="52" height="62" rx="8.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <circle cx="357.5" cy="228.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="396.5" y="197.5" width="52" height="62" rx="8.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <circle cx="422.5" cy="228.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="461.5" y="197.5" width="52" height="62" rx="8.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <circle cx="487.5" cy="228.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="526.5" y="197.5" width="52" height="62" rx="8.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <circle cx="552.5" cy="228.5" r="4.5" className="fill-gray-300 dark:fill-gray-600"/>
            <defs>
                <linearGradient id="otp_g0" x1="73" y1="148.5" x2="713" y2="148.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="otp_g1" x1="82" y1="293.5" x2="713" y2="293.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="otp_g2" x1="634.5" y1="81" x2="634.5" y2="363" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="otp_g3" x1="151.5" y1="82" x2="151.5" y2="364" gradientUnits="userSpaceOnUse">
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

export default OtpInput
