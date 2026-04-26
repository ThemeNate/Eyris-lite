'use client'

import Alert from '@/components/ui/Alert'
import Container from '@/components/shared/Container'
import CustomerListActionTools from './CustomerListActionTools'
import CutomerListStatistic from './CustomerListStatistic'
import CustomerListStatusTab from './CustomerListStatusTab'
import CustomersListTableTools from './CustomersListTableTools'
import CustomerListTable from './CustomerListTable'
import CustomerListProvider from './CustomerListProvider'
import { useCustomerListStore } from '../_store/customerListStore'
import type { GetCustomersListResponse, CustomerStatistic } from '../types'

const CustomerListInner = ({
    statisticData,
}: {
    statisticData: CustomerStatistic
}) => {
    const successMessage = useCustomerListStore((state) => state.successMessage)
    const setSuccessMessage = useCustomerListStore(
        (state) => state.setSuccessMessage,
    )

    return (
        <Container>
            <div className="flex flex-col gap-4">
                {successMessage && (
                    <Alert
                        type="success"
                        showIcon
                        closable
                        onClose={() => setSuccessMessage('')}
                    >
                        {successMessage}
                    </Alert>
                )}
                <div className="flex items-center justify-between gap-2">
                    <h4>Customers</h4>
                    <CustomerListActionTools />
                </div>
                <CutomerListStatistic data={statisticData} />
                <CustomerListStatusTab />
                <CustomersListTableTools />
                <CustomerListTable />
            </div>
        </Container>
    )
}

const CustomerList = ({
    data,
    statisticData,
}: {
    data: GetCustomersListResponse
    statisticData: CustomerStatistic
}) => {
    return (
        <CustomerListProvider data={data}>
            <CustomerListInner statisticData={statisticData} />
        </CustomerListProvider>
    )
}

export default CustomerList
