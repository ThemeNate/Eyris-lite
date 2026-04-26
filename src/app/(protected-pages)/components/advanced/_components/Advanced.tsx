'use client'

import Container from '@/components/shared/Container'
import type { ComponentType } from 'react'
import type { SvgProps } from '@/@types/common'

import AdvancedFilterBuilderSvg from '@/components/svg/components/AdvancedFilterBuilder'
import AffixSvg from '@/components/svg/components/Affix'
import AutoCompleteSvg from '@/components/svg/components/AutoComplete'
import ChartSvg from '@/components/svg/components/Chart'
import ClockProgressSvg from '@/components/svg/components/ClockProgress'
import ConfirmDialogSvg from '@/components/svg/components/ConfirmDialog'
import ContainerSvg from '@/components/svg/components/Container'
import CustomFormatInputSvg from '@/components/svg/components/CustomFormatInput'
import DataTableSvg from '@/components/svg/components/DataTable'
import DebounceInputSvg from '@/components/svg/components/DebounceInput'
import DividerSvg from '@/components/svg/components/Divider'
import EmptyStateSvg from '@/components/svg/components/EmptyState'
import FileIconSvg from '@/components/svg/components/FileIcon'
import FullCalendarSvg from '@/components/svg/components/FullCalendar'
import GanttSvg from '@/components/svg/components/Gantt'
import GrowShrinkTagSvg from '@/components/svg/components/GrowShrinkTag'
import HistogramSvg from '@/components/svg/components/Histogram'
import IconFrameSvg from '@/components/svg/components/IconFrame'
import InfoBarSvg from '@/components/svg/components/InfoBar'
import LoadingSvg from '@/components/svg/components/Loading'
import NavToggleSvg from '@/components/svg/components/NavToggle'
import NumericInputSvg from '@/components/svg/components/NumericInput'
import NumericInputStepperSvg from '@/components/svg/components/NumericInputStepper'
import OtpInputSvg from '@/components/svg/components/OtpInput'
import OverflowTabsSvg from '@/components/svg/components/OverflowTabs'
import PasswordInputSvg from '@/components/svg/components/PasswordInput'
import PatternInputSvg from '@/components/svg/components/PatternInput'
import PopoverFilterSvg from '@/components/svg/components/PopoverFilter'
import ReactionEmojiPickerSvg from '@/components/svg/components/ReactionEmojiPicker'
import RichTextEditorSvg from '@/components/svg/components/RichTextEditor'
import SegmentProgressBarSvg from '@/components/svg/components/SegmentProgressBar'
import SelectExtensionSvg from '@/components/svg/components/SelectExtension'
import StatisticCardSvg from '@/components/svg/components/StatisticCard'
import StickyRegionSvg from '@/components/svg/components/StickyRegion'
import SyntaxHighlighterSvg from '@/components/svg/components/SyntaxHighlighter'
import ToggleDrawerSvg from '@/components/svg/components/ToggleDrawer'
import UsersAvatarGroupSvg from '@/components/svg/components/UsersAvatarGroup'
import VectorMapSvg from '@/components/svg/components/VectorMap'
import WizardSvg from '@/components/svg/components/Wizard'

const DEMO_BASE =
    'https://eyris-next.themenate.net/guide/shared-component-doc'
const UPGRADE_URL = 'https://themeforest.net/item/eyris-tailwind-admin-ui-kit/62526728'

type ComponentItem = {
    name: string
    slug: string
    category: string
    pro?: boolean
    svg?: ComponentType<SvgProps>
}

const components: ComponentItem[] = [
    // Data Visualization
    { name: 'Chart', slug: 'chart', category: 'Data Visualization', svg: ChartSvg },
    { name: 'Statistic Card', slug: 'statistic-card', category: 'Data Visualization', svg: StatisticCardSvg },
    { name: 'Grow Shrink Tag', slug: 'grow-shrink-tag', category: 'Data Visualization', svg: GrowShrinkTagSvg },
    { name: 'Histogram', slug: 'histogram', category: 'Data Visualization', svg: HistogramSvg, pro: true },
    { name: 'Segment Progress Bar', slug: 'segment-progress-bar', category: 'Data Visualization', svg: SegmentProgressBarSvg },
    { name: 'Clock Progress', slug: 'clock-progress', category: 'Data Visualization', svg: ClockProgressSvg },

    // Data Management
    { name: 'Data Table', slug: 'data-table', category: 'Data Management', svg: DataTableSvg },
    { name: 'Advanced Filter Builder', slug: 'advanced-filter-builder', category: 'Data Management', svg: AdvancedFilterBuilderSvg, pro: true },
    { name: 'Popover Filter', slug: 'popover-filter', category: 'Data Management', svg: PopoverFilterSvg, pro: true },
    { name: 'Overflow Tabs', slug: 'overflow-tabs', category: 'Data Management', svg: OverflowTabsSvg },

    // Input & Form
    { name: 'Auto Complete', slug: 'auto-complete', category: 'Input & Form', svg: AutoCompleteSvg, pro: true },
    { name: 'OTP Input', slug: 'otp-input', category: 'Input & Form', svg: OtpInputSvg },
    { name: 'Numeric Input', slug: 'numeric-input', category: 'Input & Form', svg: NumericInputSvg, pro: true },
    { name: 'Numeric Input Stepper', slug: 'numeric-input-stepper', category: 'Input & Form', svg: NumericInputStepperSvg,  pro: true },
    { name: 'Password Input', slug: 'password-input', category: 'Input & Form', svg: PasswordInputSvg },
    { name: 'Pattern Input', slug: 'pattern-input', category: 'Input & Form', svg: PatternInputSvg,  pro: true },
    { name: 'Custom Format Input', slug: 'custom-format-input', category: 'Input & Form', svg: CustomFormatInputSvg, pro: true },
    { name: 'Debounce Input', slug: 'debounce-input', category: 'Input & Form', svg: DebounceInputSvg, pro: true },
    { name: 'Select Extension', slug: 'select-extension', category: 'Input & Form', svg: SelectExtensionSvg, pro: true },

    // Rich Content
    { name: 'Rich Text Editor', slug: 'rich-text-editor', category: 'Rich Content', svg: RichTextEditorSvg, pro: true },
    { name: 'Reaction Emoji Picker', slug: 'reaction-emoji-picker', category: 'Rich Content', svg: ReactionEmojiPickerSvg, pro: true },
    { name: 'Syntax Highlighter', slug: 'syntax-highlighter', category: 'Rich Content', svg: SyntaxHighlighterSvg, pro: true },

    // Layout & Navigation
    { name: 'Container', slug: 'container', category: 'Layout & Navigation', svg: ContainerSvg },
    { name: 'Affix', slug: 'affix', category: 'Layout & Navigation', svg: AffixSvg, pro: true },
    { name: 'Sticky Region', slug: 'sticky-region', category: 'Layout & Navigation', svg: StickyRegionSvg, pro: true },
    { name: 'Divider', slug: 'divider', category: 'Layout & Navigation', svg: DividerSvg },
    { name: 'Nav Toggle', slug: 'nav-toggle', category: 'Layout & Navigation', svg: NavToggleSvg },
    { name: 'Toggle Drawer', slug: 'toggle-drawer', category: 'Layout & Navigation', svg: ToggleDrawerSvg, pro: true },
    { name: 'Wizard', slug: 'wizard', category: 'Layout & Navigation', svg: WizardSvg, pro: true },

    // Feedback & Display
    { name: 'Confirm Dialog', slug: 'confirm-dialog', category: 'Feedback & Display', svg: ConfirmDialogSvg },
    { name: 'Loading', slug: 'loading', category: 'Feedback & Display', svg: LoadingSvg },
    { name: 'Info Bar', slug: 'info-bar', category: 'Feedback & Display', svg: InfoBarSvg },
    { name: 'Empty State', slug: 'empty-state', category: 'Feedback & Display', svg: EmptyStateSvg },
    { name: 'Icon Frame', slug: 'icon-frame', category: 'Feedback & Display', svg: IconFrameSvg },
    { name: 'File Icon', slug: 'file-icon', category: 'Feedback & Display', svg: FileIconSvg,  },
    { name: 'Users Avatar Group', slug: 'users-avatar-group', category: 'Feedback & Display', svg: UsersAvatarGroupSvg, pro: true },

    // Enterprise
    { name: 'Full Calendar', slug: 'full-calendar', category: 'Enterprise', pro: true, svg: FullCalendarSvg },
    { name: 'Vector Map', slug: 'vector-map', category: 'Enterprise', svg: VectorMapSvg, pro: true },
    { name: 'Gantt Chart', slug: 'gantt-chart', category: 'Enterprise', pro: true, svg: GanttSvg },
]

const categories = [
    'Data Visualization',
    'Data Management',
    'Input & Form',
    'Rich Content',
    'Layout & Navigation',
    'Feedback & Display',
    'Utility',
    'Enterprise',
] as const

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
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                        {name}
                    </span>
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

const Advanced = () => {
    return (
        <Container size="md">
            <div className="mb-8">
                <h2 className="mb-2">Advanced Components</h2>
                <p>
                    Shared components built on top of the base UI library —
                    charts, data tables, rich inputs, and more. Components
                    marked PRO are part of the full version.
                </p>
            </div>
            <div className="space-y-12 mt-4">
                {categories.map((category) => {
                    const items = components.filter(
                        (c) => c.category === category,
                    )
                    return (
                        <section key={category}>
                            <div className="space-y-2">
                                <h5>{category}</h5>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {items.map((component) => (
                                        <ComponentCard
                                            key={component.name}
                                            {...component}
                                        />
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

export default Advanced
