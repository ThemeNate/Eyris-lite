import { SvgProps } from '@/@types/common'

const ActionLink = ({ height = 100, width = 100, ...rest }: SvgProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 244 144"
            width={width}
            height={height}
            fill="none"
            {...rest}
        />
    )
}

export default ActionLink
