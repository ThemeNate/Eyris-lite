import Button from '@/components/ui/Button'
import useTheme from '@/utils/hooks/useTheme'
import classNames from '@/utils/classNames'
import { THEME_ENUM } from '@/constants/theme.constant'
import type { Direction } from '@/@types/theme'

const dirList = [
    { value: THEME_ENUM.DIR_LTR, label: 'LTR' },
    { value: THEME_ENUM.DIR_RTL, label: 'RTL' },
]

const DirectionSwitcher = ({
    callBackClose,
}: {
    callBackClose?: () => void
}) => {
    const setDirection = useTheme((state) => state.setDirection)
    const direction = useTheme((state) => state.direction)

    const onDirChange = (val: Direction) => {
        setDirection(val)
        callBackClose?.()
    }

    return (
        <div className="flex items-center">
            {dirList.map((dir, index) => (
                <Button
                    key={dir.value}
                    className={classNames(
                        index === 0 ? 'ltr:rounded-r-none ltr:border-r-0 rtl:border-r rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0' : '',
                        index === dirList.length - 1 ? 'ltr:rounded-l-none rtl:border-r rtl:rounded-l-lg rtl:rounded-r-none' : '',
                    )}
                    active={direction === dir.value}
                    onClick={() => onDirChange(dir.value)}
                >
                    {dir.label}
                </Button>
            ))}
        </div>
    )
}

export default DirectionSwitcher
