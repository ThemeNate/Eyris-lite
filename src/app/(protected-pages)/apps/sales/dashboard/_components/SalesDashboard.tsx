'use client'
import SalesDashboardContainer from './SalesDashboardContainer'
import SalesDashboardHeader from './SalesDashboardHeader'
import MetricCard from './MetricCard'
import RevenueOrder from './RevenueOrder'
import TopSellingCategories from './TopSellingCategories'
import AverageOrderValue from './AverageOrderValue'
import CustomerSegment from './CustomerSegment'
import TrafficAnalysis from './TrafficAnalysis'
import TopPerformingCampaigns from './TopPerformingCampaigns'
import formatCurrency from '@/utils/formatCurrency'
import {
    LuPercent,
    LuUserPlus,
    LuTrendingUp,
    LuWallet,
} from 'react-icons/lu'
import { useSearchParams } from 'next/navigation'
import type { SalesDashboardData, TimeRange } from '../types'

const SalesDashboard = ({ data }: { data: SalesDashboardData }) => {
    const searchParams = useSearchParams()
    const timeRange =
        (searchParams.get('timeRange') as TimeRange) || 'thisMonth'
    const comparisonEnabled = searchParams.get('comparisonEnabled') !== 'false'

    const {
        metrics,
        revenueTrend,
        topSellingCategories,
        supportingMetrics,
        topCampaigns,
    } = data

    return (
        <SalesDashboardContainer
            header={
                <SalesDashboardHeader
                    userName="Angelina"
                    currentDate={new Date()}
                />
            }
            metrics={
                <>
                    <MetricCard
                        title="Conversion Rate"
                        value={`${metrics?.conversionRate.value || 0}%`}
                        change={metrics?.conversionRate.change || 0}
                        icon={<LuPercent />}
                    />
                    <MetricCard
                        title="Acquisition Cost"
                        value={metrics?.customerAcquisitionCost.value || 0}
                        change={metrics?.customerAcquisitionCost.change || 0}
                        icon={<LuUserPlus />}
                        formatter={formatCurrency}
                    />
                    <MetricCard
                        title="Average Revenue"
                        value={metrics?.averageRevenue.value || 0}
                        change={metrics?.averageRevenue.change || 0}
                        icon={<LuTrendingUp />}
                        formatter={formatCurrency}
                    />
                    <MetricCard
                        title="Expense Total"
                        value={metrics?.expenseTotal.value || 0}
                        change={metrics?.expenseTotal.change || 0}
                        icon={<LuWallet />}
                        formatter={formatCurrency}
                    />
                </>
            }
            revenueTrend={
                <RevenueOrder
                    data={revenueTrend?.current || []}
                    comparisonData={revenueTrend?.previous || []}
                    totalRevenue={revenueTrend?.total || 0}
                    change={revenueTrend?.change || 0}
                    totalOrders={revenueTrend?.totalOrders || 0}
                    ordersChange={revenueTrend?.ordersChange || 0}
                    timeRange={timeRange}
                    comparisonEnabled={comparisonEnabled}
                />
            }
            topSellingCategories={
                <TopSellingCategories
                    data={topSellingCategories || []}
                    loading={false}
                />
            }
            averageOrderValue={
                <AverageOrderValue
                    data={
                        supportingMetrics?.averageOrderValue || {
                            value: 0,
                            change: 0,
                            chartData: [],
                        }
                    }
                    comparisonEnabled={comparisonEnabled}
                />
            }
            customerSegment={
                <CustomerSegment
                    data={
                        supportingMetrics?.customerSegment || {
                            chartData: [],
                            newCustomers: {
                                total: 0,
                                percentage: 0,
                                change: 0,
                            },
                            returningCustomers: {
                                total: 0,
                                percentage: 0,
                                change: 0,
                            },
                            totalCustomers: 0,
                            retentionRate: 0,
                            revenueSplit: {
                                newPercentage: 0,
                                returningPercentage: 0,
                            },
                            repeatPurchaseRatio: 0,
                        }
                    }
                    comparisonEnabled={comparisonEnabled}
                />
            }
            totalSessions={
                <TrafficAnalysis
                    data={
                        supportingMetrics?.totalSessions || {
                            value: 0,
                            change: 0,
                            chartData: [],
                            sources: [],
                            bounceRate: { value: 0, change: 0 },
                        }
                    }
                    comparisonEnabled={comparisonEnabled}
                />
            }
            topCampaigns={<TopPerformingCampaigns data={topCampaigns || []} />}
        />
    )
}

export default SalesDashboard
