import { SvgProps } from '@/@types/common'

const OverflowTabs = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 458" width={width} height={height} fill="none" {...rest}>
            <path d="M49 149.927H737" stroke="url(#ot_g0)" strokeWidth={3}/>
            <path d="M59 296.927H737" stroke="url(#ot_g1)" strokeWidth={3}/>
            <path d="M635 88L635 373.743" stroke="url(#ot_g2)" strokeWidth={3}/>
            <path d="M156 86L156 371.743" stroke="url(#ot_g3)" strokeWidth={3}/>
            <rect x="204" y="246" width="379" height="5" rx="2" className="fill-gray-200 dark:fill-gray-700"/>
            <rect x="340" y="246.298" width="98.7009" height="4.47763" rx="2" className="fill-primary"/>
            <rect x="267.432" y="209" width="49.3505" height="22.3881" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="364.338" y="209" width="49.3505" height="22.3881" rx="4" className="fill-primary"/>
            <rect x="463.039" y="209" width="49.3505" height="22.3881" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <path d="M548.821 209.358L557.384 217.921C558.395 218.933 558.395 220.587 557.384 221.599L548.821 230.162" className="stroke-gray-300 dark:stroke-gray-600" strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M224.701 230.163L216.138 221.6C215.126 220.589 215.126 218.934 216.138 217.923L224.701 209.359" className="stroke-gray-300 dark:stroke-gray-600" strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
                <linearGradient id="ot_g0" x1="49" y1="150.427" x2="737" y2="150.427" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="ot_g1" x1="59" y1="297.427" x2="737" y2="297.427" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="ot_g2" x1="634.5" y1="88" x2="634.5" y2="373.743" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="ot_g3" x1="155.5" y1="86" x2="155.5" y2="371.743" gradientUnits="userSpaceOnUse">
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

export default OverflowTabs
