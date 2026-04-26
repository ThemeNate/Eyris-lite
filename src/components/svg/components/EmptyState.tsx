import { SvgProps } from '@/@types/common'

const EmptyState = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 451" width={width} height={height} fill="none" {...rest}>
            <path d="M22 83.2617H742" stroke="url(#es_g0)" strokeWidth={3}/>
            <path d="M22 342.958H742" stroke="url(#es_g1)" strokeWidth={3}/>
            <path d="M600.149 4.66016L600.149 441.384" stroke="url(#es_g2)" strokeWidth={3}/>
            <path d="M169.224 4.66016L169.224 441.384" stroke="url(#es_g3)" strokeWidth={3}/>
            <rect x="223.5" y="114.498" width="328" height="191.277" rx="18.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <circle cx="389.5" cy="166.5" r="23.5" className="fill-gray-300 dark:fill-gray-600"/>
            <path d="M389.25 171.25V170.492C389.25 168.036 390.831 166.736 392.413 165.689C393.957 164.678 395.5 163.378 395.5 160.994C395.5 157.672 392.714 155 389.25 155C385.786 155 383 157.672 383 160.994" stroke="white" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M389.25 178.25V178.375" stroke="white" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="334" y="211" width="111" height="15" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="362" y="245" width="54" height="23.789" rx="4" className="fill-primary"/>
            <rect x="370" y="253.921" width="38" height="5.94725" rx="2.97363" fill="white"/>
            <defs>
                <linearGradient id="es_g0" x1="22" y1="83.7617" x2="742" y2="83.7617" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="es_g1" x1="22" y1="343.458" x2="742" y2="343.458" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="es_g2" x1="599.649" y1="4.66016" x2="599.649" y2="441.384" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="es_g3" x1="168.724" y1="4.66016" x2="168.724" y2="441.384" gradientUnits="userSpaceOnUse">
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

export default EmptyState
