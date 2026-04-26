'use client'

import {
    LAYOUT_INSET_SHELL,
    LAYOUT_BLANK,
} from '@/constants/theme.constant'
import InsetShell from './components/InsetShell'
import Blank from './components/Blank'
import PageContainer from '@/components/template/PageContainer'
import queryRoute from '@/utils/queryRoute'
import useTheme from '@/utils/hooks/useTheme'
import { usePathname } from 'next/navigation'
import type { CommonProps } from '@/@types/common'
import type { LayoutType } from '@/@types/theme'

interface LayoutProps extends CommonProps {
    layoutType: LayoutType
}

type PostLoginLayoutProps = CommonProps

const Layout = ({ children, layoutType }: LayoutProps) => {
    switch (layoutType) {
        case LAYOUT_INSET_SHELL:
            return <InsetShell>{children}</InsetShell>
        case LAYOUT_BLANK:
            return <Blank>{children}</Blank>
        default:
            return <>{children}</>
    }
}

const PostLoginLayout = ({ children }: PostLoginLayoutProps) => {
    const layoutType = useTheme((state) => state.layout.type)

    const pathname = usePathname()

    const route = queryRoute(pathname)

    return (
        <Layout
            layoutType={route?.meta?.layout ? route?.meta?.layout : layoutType}
        >
            <PageContainer {...route?.meta}>{children}</PageContainer>
        </Layout>
    )
}

export default PostLoginLayout
