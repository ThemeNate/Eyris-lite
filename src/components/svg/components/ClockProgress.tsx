import { SvgProps } from '@/@types/common'

const ClockProgress = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 456" width={width} height={height} fill="none" {...rest}>
            <path d="M146 159.093H595" stroke="url(#cp_g0)" strokeWidth={3}/>
            <path d="M161 286.773H610" stroke="url(#cp_g1)" strokeWidth={3}/>
            <path d="M518 82.0801L518 365.813" stroke="url(#cp_g2)" strokeWidth={3}/>
            <path d="M232 86.1333L232 369.867" stroke="url(#cp_g3)" strokeWidth={3}/>
            <path d="M369.5 176C360.897 176 352.486 178.522 345.333 183.247C338.179 187.972 332.604 194.687 329.311 202.545C326.019 210.402 325.157 219.048 326.836 227.389C328.514 235.73 332.657 243.392 338.741 249.406C344.824 255.419 352.575 259.515 361.014 261.174C369.452 262.833 378.198 261.981 386.147 258.727C394.095 255.472 400.889 249.961 405.669 242.89C410.449 235.818 413 227.505 413 219C412.987 207.6 408.4 196.67 400.245 188.609C392.09 180.547 381.033 176.013 369.5 176ZM369.5 255.857C359.611 255.857 350.127 251.974 343.135 245.062C336.143 238.15 332.214 228.775 332.214 219C332.214 209.225 336.143 199.85 343.135 192.938C350.127 186.026 359.611 182.143 369.5 182.143V219L395.852 245.05C392.396 248.478 388.289 251.198 383.767 253.052C379.245 254.907 374.396 255.86 369.5 255.857Z" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="329.5" y="178.5" width="80.0861" height="80.6667" rx="40.043" className="stroke-gray-300 dark:stroke-gray-600" strokeWidth={7}/>
            <defs>
                <linearGradient id="cp_g0" x1="146" y1="159.593" x2="595" y2="159.593" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="cp_g1" x1="161" y1="287.273" x2="610" y2="287.273" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="cp_g2" x1="517.5" y1="82.0801" x2="517.5" y2="365.813" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="cp_g3" x1="231.5" y1="86.1333" x2="231.5" y2="369.867" gradientUnits="userSpaceOnUse">
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

export default ClockProgress
