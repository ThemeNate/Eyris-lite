import LightSvg from '@/components/svg/modes/LightSvg'
import DarkSvg from '@/components/svg/modes/DarkSvg'
import SystemSvg from '@/components/svg/modes/SystemSvg'
import classNames from '@/utils/classNames'
import useTheme from '@/utils/hooks/useTheme'
import { FaCheck } from 'react-icons/fa'
import type { Mode } from '@/@types/theme'

const modeList = [
    {
        label: 'Light',
        value: 'light',
        svg: LightSvg,
    },
    {
        label: 'Dark',
        value: 'dark',
        svg: DarkSvg,
    },
    {
        label: 'System',
        value: 'system',
        svg: SystemSvg,
    },
]

const ModeSwitcher = ({ wrapperClass }: { wrapperClass?: string }) => {
    const currentMode = useTheme((state) => state.mode)
    const setMode = useTheme((state) => state.setMode)

    return (
        <div
            className={classNames(
                'grid grid-cols-3 gap-4 w-full',
                wrapperClass,
            )}
        >
            {modeList.map((mode) => {
                const active = currentMode === mode.value
                const Svg = mode.svg
                return (
                    <div key={mode.value}>
                        <button
                            className={classNames(
                                'border-2 rounded-lg overflow-hidden',
                                active
                                    ? 'border-primary dark:border-primary'
                                    : 'border-gray-200 dark:border-gray-700',
                            )}
                            onClick={() => setMode(mode.value as Mode)}
                        >
                            <Svg />
                        </button>
                        <div className="flex items-center gap-2 mt-2 px-1">
                            <div
                                className={classNames(
                                    'border rounded-full flex items-center justify-center h-4 w-4',
                                    active
                                        ? 'border-primary bg-primary'
                                        : 'border-gray-200 dark:border-gray-700',
                                )}
                            >
                                {active && (
                                    <FaCheck className="text-white text-[8px]" />
                                )}
                            </div>
                            <span className="heading-text">{mode.label}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ModeSwitcher
