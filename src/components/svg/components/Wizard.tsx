import { SvgProps } from '@/@types/common'

const Wizard = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 453" width={width} height={height} fill="none" {...rest}>
            <path d="M113 82.6348H674" stroke="url(#wiz_g0)" strokeWidth={3}/>
            <path d="M113 380.321H674" stroke="url(#wiz_g1)" strokeWidth={3}/>
            <path d="M559 0L559 453" stroke="url(#wiz_g2)" strokeWidth={3}/>
            <path d="M229 3.98242L224 452.599" stroke="url(#wiz_g3)" strokeWidth={3}/>
            <rect x="295.5" y="120.973" width="197" height="220.015" rx="8.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <rect x="316.5" y="204.534" width="154" height="29.2133" rx="6.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <rect x="325" y="213.223" width="78" height="10.8586" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="316.5" y="253.861" width="154" height="29.2133" rx="6.5" className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700" strokeWidth={3}/>
            <rect x="325" y="263.567" width="78" height="10.8586" rx="4" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="418" y="299.987" width="54" height="24.16" rx="4" className="fill-primary"/>
            <rect x="426" y="309.046" width="38" height="6.04" rx="3.02" fill="white"/>
            <ellipse cx="330.882" cy="155.852" rx="12.7167" ry="12.8824" transform="rotate(-90 330.882 155.852)" className="fill-primary"/>
            <ellipse cx="388.853" cy="155.852" rx="12.7167" ry="12.8824" transform="rotate(-90 388.853 155.852)" fill="#ECECEC"/>
            <ellipse cx="451.118" cy="155.852" rx="12.7167" ry="12.8824" transform="rotate(-90 451.118 155.852)" fill="#ECECEC"/>
            <rect x="348.059" y="157.972" width="4.2389" height="21.4706" rx="2.11945" transform="rotate(-90 348.059 157.972)" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="410.323" y="157.972" width="4.2389" height="21.4706" rx="2.11945" transform="rotate(-90 410.323 157.972)" className="fill-gray-300 dark:fill-gray-600"/>
            <path d="M385.44 161.433V160.16L389.377 156.08C389.798 155.637 390.144 155.249 390.417 154.916C390.693 154.578 390.9 154.258 391.036 153.955C391.173 153.652 391.241 153.33 391.241 152.989C391.241 152.603 391.15 152.27 390.968 151.989C390.786 151.705 390.538 151.488 390.224 151.336C389.909 151.181 389.555 151.103 389.161 151.103C388.745 151.103 388.381 151.188 388.07 151.359C387.76 151.529 387.521 151.77 387.354 152.08C387.188 152.391 387.104 152.755 387.104 153.171H385.428C385.428 152.463 385.591 151.844 385.917 151.313C386.243 150.783 386.69 150.372 387.258 150.08C387.826 149.785 388.472 149.637 389.195 149.637C389.926 149.637 390.57 149.783 391.127 150.075C391.688 150.363 392.125 150.756 392.44 151.256C392.754 151.753 392.911 152.313 392.911 152.938C392.911 153.37 392.83 153.792 392.667 154.205C392.508 154.618 392.229 155.078 391.832 155.586C391.434 156.09 390.881 156.702 390.173 157.421L387.86 159.842V159.927H393.099V161.433H385.44Z" fill="#171717"/>
            <path d="M451.517 161.592C450.737 161.592 450.04 161.457 449.426 161.188C448.816 160.919 448.333 160.546 447.977 160.069C447.625 159.588 447.435 159.031 447.409 158.399H449.193C449.216 158.743 449.331 159.042 449.54 159.296C449.752 159.546 450.028 159.739 450.369 159.876C450.71 160.012 451.089 160.08 451.506 160.08C451.964 160.08 452.369 160.001 452.721 159.842C453.077 159.683 453.356 159.461 453.557 159.177C453.757 158.889 453.858 158.558 453.858 158.183C453.858 157.792 453.757 157.45 453.557 157.154C453.36 156.855 453.07 156.62 452.687 156.45C452.309 156.279 451.85 156.194 451.312 156.194H450.329V154.762H451.312C451.744 154.762 452.123 154.685 452.449 154.529C452.778 154.374 453.036 154.158 453.221 153.881C453.407 153.601 453.5 153.274 453.5 152.899C453.5 152.539 453.418 152.226 453.256 151.961C453.096 151.692 452.869 151.482 452.574 151.33C452.282 151.179 451.937 151.103 451.54 151.103C451.161 151.103 450.807 151.173 450.477 151.313C450.151 151.45 449.886 151.647 449.682 151.904C449.477 152.158 449.367 152.463 449.352 152.819H447.653C447.672 152.19 447.858 151.637 448.21 151.16C448.566 150.683 449.036 150.31 449.619 150.041C450.202 149.772 450.85 149.637 451.562 149.637C452.309 149.637 452.952 149.783 453.494 150.075C454.04 150.363 454.46 150.747 454.756 151.228C455.055 151.709 455.202 152.236 455.199 152.808C455.202 153.459 455.021 154.012 454.653 154.467C454.29 154.921 453.805 155.226 453.199 155.381V155.472C453.971 155.59 454.57 155.897 454.994 156.393C455.422 156.889 455.634 157.505 455.631 158.239C455.634 158.88 455.456 159.453 455.096 159.961C454.74 160.469 454.254 160.868 453.636 161.16C453.019 161.448 452.312 161.592 451.517 161.592Z" fill="#171717"/>
            <path d="M325.157 156.323L328.81 160.091L336.131 152.555" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
                <linearGradient id="wiz_g0" x1="113" y1="83.1348" x2="674" y2="83.1348" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="wiz_g1" x1="113" y1="380.821" x2="674" y2="380.821" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="wiz_g2" x1="558.5" y1="0" x2="558.5" y2="453" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" className="text-white dark:text-gray-800"/>
                    <stop offset="0.134615" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.519231" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="0.913462" stopColor="currentColor" className="text-gray-200 dark:text-gray-700"/>
                    <stop offset="1" stopColor="currentColor" className="text-white dark:text-gray-800"/>
                </linearGradient>
                <linearGradient id="wiz_g3" x1="228.5" y1="3.9769" x2="223.544" y2="452.594" gradientUnits="userSpaceOnUse">
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

export default Wizard
