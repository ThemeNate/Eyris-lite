import { SvgProps } from '@/@types/common'

const UsersAvatarGroup = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width={width} height={height} fill="none" {...rest}>
            <path d="M47 135H717" stroke="url(#uag_g0)" strokeWidth={3}/>
            <path d="M47 315H717" stroke="url(#uag_g1)" strokeWidth={3}/>
            <path d="M585 20L585 430" stroke="url(#uag_g2)" strokeWidth={3}/>
            <path d="M184 20L184 430" stroke="url(#uag_g3)" strokeWidth={3}/>
            <circle cx="446.5" cy="224.5" r="65" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <path d="M446.5 222C436.202 222 427.929 213.762 427.929 203.5C427.929 193.382 436.202 185 446.5 185C456.659 185 465.071 193.382 465.071 203.5C465.071 213.762 456.659 222 446.5 222ZM453.752 228.938C467.681 228.938 479 240.211 479 254.086C479 256.832 476.679 259 473.921 259H418.931C416.173 259 414 256.832 414 254.086C414 240.211 425.171 228.938 439.099 228.938H453.752Z" fill="#A4A7AE"/>
            <circle cx="381.5" cy="224.5" r="65" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <path d="M381.5 222C371.202 222 362.929 213.762 362.929 203.5C362.929 193.382 371.202 185 381.5 185C391.659 185 400.071 193.382 400.071 203.5C400.071 213.762 391.659 222 381.5 222ZM388.752 228.938C402.681 228.938 414 240.211 414 254.086C414 256.832 411.679 259 408.921 259H353.931C351.173 259 349 256.832 349 254.086C349 240.211 360.171 228.938 374.099 228.938H388.752Z" className="fill-primary"/>
            <circle cx="318.5" cy="224.5" r="65" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <path d="M318.5 222C308.202 222 299.929 213.762 299.929 203.5C299.929 193.382 308.202 185 318.5 185C328.659 185 337.071 193.382 337.071 203.5C337.071 213.762 328.659 222 318.5 222ZM325.752 228.938C339.681 228.938 351 240.211 351 254.086C351 256.832 348.679 259 345.921 259H290.931C288.173 259 286 256.832 286 254.086C286 240.211 297.171 228.938 311.099 228.938H325.752Z" fill="#A4A7AE"/>
            <defs>
                <linearGradient id="uag_g0" x1="47" y1="135.5" x2="717" y2="135.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="uag_g1" x1="47" y1="315.5" x2="717" y2="315.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="uag_g2" x1="584.5" y1="20" x2="584.5" y2="430" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="uag_g3" x1="183.5" y1="20" x2="183.5" y2="430" gradientUnits="userSpaceOnUse">
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

export default UsersAvatarGroup
