/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'
import {
    generateCompleteDashboardData,
    orderStatisticsData,
} from '@/mock/data/salesData'
export async function getSalesDashboardData(params: any) {
    const {
        startDate,
        endDate,
        comparisonStartDate,
        comparisonEndDate,
        timeRange,
        comparisonPeriod,
    } = params
    const data = generateCompleteDashboardData(
        startDate,
        endDate,
        comparisonStartDate,
        comparisonEndDate,
        timeRange,
        comparisonPeriod,
    )

    return data
}
export async function getSalesOrderStatistics() {
    return orderStatisticsData
}
