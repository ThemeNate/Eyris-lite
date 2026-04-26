import { SvgProps } from '@/@types/common'

const ToggleDrawer = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 454" width={width} height={height} fill="none" {...rest}>
            <path d="M22 81.7202H742" stroke="url(#td_g0)" strokeWidth={3}/>
            <path d="M25 349.076H745" stroke="url(#td_g1)" strokeWidth={3}/>
            <path d="M601 0L601 444.513" stroke="url(#td_g2)" strokeWidth={3}/>
            <path d="M180 5.04443L180 449.558" stroke="url(#td_g3)" strokeWidth={3}/>
            <rect x="220" y="109.969" width="340" height="212.876" rx="10" fill="black" fillOpacity={0.1}/>
            <rect x="423.703" y="118.778" width="126.08" height="196.467" rx="8.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <rect x="434.399" y="131.889" width="30.4914" height="9.52866" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="434.399" y="159.839" width="103.671" height="9.52866" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="434.399" y="178.262" width="103.671" height="9.52866" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="479.611" y="296.244" width="27" height="11.1067" rx="1.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700"/>
            <rect x="513.111" y="295.744" width="27" height="12.1067" rx="2" className="fill-primary"/>
            <rect x="516.726" y="300.49" width="19.3112" height="2.54098" rx="1.27049" fill="white"/>
            <rect x="483.185" y="300.49" width="19.3112" height="2.54098" rx="1.27049" className="fill-gray-300 dark:fill-gray-600"/>
            <path d="M525.873 136.177L532.734 131.889" stroke="#A4A7AE" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M532.734 136.177L525.873 131.889" stroke="#A4A7AE" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
                <linearGradient id="td_g0" x1="22" y1="78.2202" x2="742" y2="78.2202" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="td_g1" x1="25" y1="349.576" x2="745" y2="349.576" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="td_g2" x1="600.5" y1="0" x2="600.5" y2="444.513" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="td_g3" x1="179.5" y1="5.04443" x2="179.5" y2="449.558" gradientUnits="userSpaceOnUse">
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

export default ToggleDrawer
