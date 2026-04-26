'use client'

import Container from '@/components/shared/Container'
import type { ComponentType } from 'react'
import type { SvgProps } from '@/@types/common'

import AlertSvg from '@/components/svg/components/Alert'
import AvatarSvg from '@/components/svg/components/Avatar'
import BadgeSvg from '@/components/svg/components/Badge'
import ButtonSvg from '@/components/svg/components/Button'
import CalendarSvg from '@/components/svg/components/Calendar'
import CardSvg from '@/components/svg/components/Card'
import CheckboxSvg from '@/components/svg/components/Checkbox'
import DatePickerSvg from '@/components/svg/components/DatePicker'
import DialogSvg from '@/components/svg/components/Dialog'
import DrawerSvg from '@/components/svg/components/Drawer'
import DropdownSvg from '@/components/svg/components/Dropdown'
import FormControlSvg from '@/components/svg/components/FormControl'
import IconsSvg from '@/components/svg/components/Icons'
import InputSvg from '@/components/svg/components/Input'
import InputGroupSvg from '@/components/svg/components/InputGroup'
import MenuSvg from '@/components/svg/components/Menu'
import PaginationSvg from '@/components/svg/components/Pagination'
import ProgressSvg from '@/components/svg/components/Progress'
import RadioSvg from '@/components/svg/components/Radio'
import ScrollSvg from '@/components/svg/components/Scroll'
import SegmentSvg from '@/components/svg/components/Segment'
import SelectSvg from '@/components/svg/components/Select'
import SkeletonSvg from '@/components/svg/components/Skeleton'
import SpinnerSvg from '@/components/svg/components/Spinner'
import SwitcherSvg from '@/components/svg/components/Switcher'
import TableSvg from '@/components/svg/components/Table'
import TabsSvg from '@/components/svg/components/Tabs'
import TagSvg from '@/components/svg/components/Tag'
import TimeInputSvg from '@/components/svg/components/TimeInput'
import TimelineSvg from '@/components/svg/components/Timeline'
import ToastSvg from '@/components/svg/components/Toast'
import TooltipSvg from '@/components/svg/components/Tooltip'
import UploadSvg from '@/components/svg/components/Upload'
import CarouselSvg from '@/components/svg/components/Carousel'
import CollapsibleSvg from '@/components/svg/components/Collapsible'
import StepsSvg from '@/components/svg/components/Steps'
import ActionBarSvg from '@/components/svg/components/ActionBar'
import NotificationSvg from '@/components/svg/components/Notification'
import PopoverSvg from '@/components/svg/components/Popover'
import SliderSvg from '@/components/svg/components/Slider'
import MultiValueInputSvg from '@/components/svg/components/MultiValueInput'

const DEMO_BASE = 'https://eyris-next.themenate.net/ui-components/'
const UPGRADE_URL = 'https://themeforest.net/item/eyris-tailwind-admin-ui-kit/62526728'

type ComponentItem = {
    name: string
    slug: string
    category: string
    pro?: boolean
    svg?: ComponentType<SvgProps>
}

const components: ComponentItem[] = [
    { name: 'Button', slug: 'button', category: 'Common', svg: ButtonSvg },
    { name: 'Icons', slug: 'icons', category: 'Common', svg: IconsSvg },
    { name: 'Scroll', slug: 'scroll', category: 'Common', svg: ScrollSvg },
    { name: 'Avatar', slug: 'avatar', category: 'Data Display', svg: AvatarSvg },
    { name: 'Badge', slug: 'badge', category: 'Data Display', svg: BadgeSvg },
    { name: 'Calendar', slug: 'calendar', category: 'Data Display', pro: true, svg: CalendarSvg },
    { name: 'Card', slug: 'cards', category: 'Data Display', svg: CardSvg },
    { name: 'Carousel', slug: 'carousel', category: 'Data Display', pro: true, svg: CarouselSvg },
    { name: 'Collapsible', slug: 'collapsible', category: 'Data Display', pro: true, svg: CollapsibleSvg },
    { name: 'Popover', slug: 'popover', category: 'Data Display', pro: true, svg: PopoverSvg },
    { name: 'Table', slug: 'table', category: 'Data Display', svg: TableSvg },
    { name: 'Tag', slug: 'tag', category: 'Data Display', svg: TagSvg },
    { name: 'Timeline', slug: 'timeline', category: 'Data Display', svg: TimelineSvg },
    { name: 'Tooltip', slug: 'tooltip', category: 'Data Display', svg: TooltipSvg },
    { name: 'Checkbox', slug: 'checkbox', category: 'Form', svg: CheckboxSvg },
    { name: 'Date Picker', slug: 'date-picker', category: 'Form', pro: true, svg: DatePickerSvg },
    { name: 'Form', slug: 'form-control', category: 'Form', svg: FormControlSvg },
    { name: 'Input', slug: 'input', category: 'Form', svg: InputSvg },
    { name: 'Input Group', slug: 'input-group', category: 'Form', pro: true, svg: InputGroupSvg },
    { name: 'Multi Value Input', slug: 'multi-value-input', category: 'Form', pro: true, svg: MultiValueInputSvg },
    { name: 'Radio', slug: 'radio', category: 'Form', svg: RadioSvg },
    { name: 'Slider', slug: 'slider', category: 'Form', pro: true, svg: SliderSvg },
    { name: 'Segment', slug: 'segment', category: 'Form', pro: true, svg: SegmentSvg },
    { name: 'Select', slug: 'select', category: 'Form', svg: SelectSvg },
    { name: 'Switcher', slug: 'switcher', category: 'Form', svg: SwitcherSvg },
    { name: 'Time Input', slug: 'time-input', category: 'Form', pro: true, svg: TimeInputSvg },
    { name: 'Upload', slug: 'upload', category: 'Form', pro: true, svg: UploadSvg },
    { name: 'Alert', slug: 'alert', category: 'Feedback', svg: AlertSvg },
    { name: 'Dialog', slug: 'dialog', category: 'Feedback', svg: DialogSvg },
    { name: 'Drawer', slug: 'drawer', category: 'Feedback', svg: DrawerSvg },
    { name: 'Action Bar', slug: 'action-bar', category: 'Feedback', pro: true, svg: ActionBarSvg },
    { name: 'Notification', slug: 'notification', category: 'Feedback', pro: true, svg: NotificationSvg },
    { name: 'Progress', slug: 'progress', category: 'Feedback', pro: true, svg: ProgressSvg },
    { name: 'Skeleton', slug: 'skeleton', category: 'Feedback', svg: SkeletonSvg },
    { name: 'Spinner', slug: 'spinner', category: 'Feedback', svg: SpinnerSvg },
    { name: 'Toast', slug: 'toast', category: 'Feedback', pro: true, svg: ToastSvg },
    { name: 'Dropdown', slug: 'dropdown', category: 'Navigation', svg: DropdownSvg },
    { name: 'Menu', slug: 'menu', category: 'Navigation', svg: MenuSvg },
    { name: 'Pagination', slug: 'pagination', category: 'Navigation', svg: PaginationSvg },
    { name: 'Steps', slug: 'steps', category: 'Navigation', pro: true, svg: StepsSvg },
    { name: 'Tabs', slug: 'tabs', category: 'Navigation', svg: TabsSvg },
]

const categories = ['Common', 'Data Display', 'Form', 'Feedback', 'Navigation'] as const

function ComponentCard({ name, slug, pro, svg: Svg }: ComponentItem) {
    const href = pro ? UPGRADE_URL : `${DEMO_BASE}/${slug}`
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative border rounded-lg p-1 transition ease-in duration-150 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
        >
            <div className="rounded-lg h-36 bg-gray-50 dark:bg-gray-800 overflow-hidden flex items-center justify-center">
                {Svg ? (
                    <Svg width={244} height={144} className="mx-auto" />
                ) : (
                    <span className="text-xs text-gray-400 dark:text-gray-500">{name}</span>
                )}
            </div>
            <div className="px-2 py-2 flex items-center justify-between">
                <span className="heading-text font-semibold">{name}</span>
                {pro && (
                    <span className="text-xs font-bold text-primary bg-primary-subtle px-2 py-1 rounded">
                        PRO
                    </span>
                )}
            </div>
        </a>
    )
}

const Base = () => {
    return (
        <Container size="md">
            <div className="mb-8">
                <h2 className="mb-2">Base Components</h2>
                <p>These are the foundation components of the template — components marked PRO are part of the full version.</p>
            </div>
            <div className="space-y-12 mt-4">
                {categories.map((category) => {
                    const items = components.filter((c) => c.category === category)
                    return (
                        <section key={category} >
                            <div className="space-y-2">
                                <h5>{category}</h5>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {items.map((component) => (
                                        <ComponentCard key={component.name} {...component} />
                                    ))}
                                </div>
                            </div>
                        </section>
                    )
                })}
            </div>
        </Container>
    )
}

export default Base
