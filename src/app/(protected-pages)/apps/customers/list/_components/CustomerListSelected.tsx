'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Dialog from '@/components/ui/Dialog'
import Avatar from '@/components/ui/Avatar'
import Tooltip from '@/components/ui/Tooltip'

import ConfirmDialog from '@/components/shared/ConfirmDialog'
import { useCustomerListStore } from '../_store/customerListStore'
import { LuCheckCheck } from 'react-icons/lu'

const CustomerListSelected = () => {
    const data = useCustomerListStore((state) => state.data)
    const setData = useCustomerListStore((state) => state.setData)
    const selectedRows = useCustomerListStore((state) => state.selectedRows)
    const setSelectAllRows = useCustomerListStore(
        (state) => state.setSelectAllRows,
    )
    const setSuccessMessage = useCustomerListStore(
        (state) => state.setSuccessMessage,
    )

    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false)
    const [sendMessageDialogOpen, setSendMessageDialogOpen] = useState(false)
    const [sendMessageLoading, setSendMessageLoading] = useState(false)

    const handleDelete = () => {
        setDeleteConfirmationOpen(true)
    }

    const handleCancel = () => {
        setDeleteConfirmationOpen(false)
    }

    const handleConfirmDelete = () => {
        const newCustomerList = data.list.filter((customer) => {
            return !selectedRows.some((selected) => selected.id === customer.id)
        })
        setData({
            list: newCustomerList,
            total: data.total - selectedRows.length,
        })
        setSelectAllRows([])
        setDeleteConfirmationOpen(false)
    }

    const handleSend = () => {
        setSendMessageLoading(true)
        setTimeout(() => {
            setSuccessMessage('Message sent successfully!')
            setSendMessageLoading(false)
            setSendMessageDialogOpen(false)
            setSelectAllRows([])
        }, 500)
    }

    return (
        <>
            {selectedRows.length > 0 && (
                <div className="flex items-center gap-4">
                    <span>
                        {selectedRows.length > 0 && (
                            <span className="flex items-center gap-2">
                                <span className="text-lg text-primary">
                                    <LuCheckCheck />
                                </span>
                                <span className="font-medium flex items-center gap-1">
                                    <span className="heading-text">
                                        {selectedRows.length} Customers
                                    </span>
                                    <span>selected</span>
                                </span>
                            </span>
                        )}
                    </span>
                    <div className="flex items-center gap-2">
                        <Button
                            type="button"
                            className={() =>
                                'border-error ring-1 ring-error text-error hover:border-error hover:ring-error hover:text-error'
                            }
                            onClick={handleDelete}
                        >
                            Delete
                        </Button>
                        <Button
                            variant="solid"
                            onClick={() => setSendMessageDialogOpen(true)}
                        >
                            Message
                        </Button>
                    </div>
                </div>
            )}
            <ConfirmDialog
                isOpen={deleteConfirmationOpen}
                type="danger"
                title="Remove customers"
                onClose={handleCancel}
                onCancel={handleCancel}
                onConfirm={handleConfirmDelete}
            >
                <p>
                    {' '}
                    Are you sure you want to remove these customers? This action
                    can&apos;t be undo.{' '}
                </p>
            </ConfirmDialog>
            <Dialog
                isOpen={sendMessageDialogOpen}
                onClose={() => setSendMessageDialogOpen(false)}
            >
                <h5 className="mb-2">Send Message</h5>
                <p>Send message to the following customers</p>
                <Avatar.Group
                    chained
                    omittedAvatarTooltip
                    className="mt-4"
                    maxCount={4}
                    omittedAvatarProps={{ size: 30 }}
                >
                    {selectedRows.map((customer) => (
                        <Tooltip key={customer.id} title={customer.name}>
                            <Avatar
                                shape="circle"
                                size={30}
                                src={customer.img}
                                alt=""
                            />
                        </Tooltip>
                    ))}
                </Avatar.Group>
                <div className="my-4">
                    <Input
                        textArea
                        rows={4}
                        placeholder="Type your message..."
                    />
                </div>
                <div className="ltr:justify-end flex items-center gap-2">
                    <Button
                        onClick={() => setSendMessageDialogOpen(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="solid"
                        loading={sendMessageLoading}
                        onClick={handleSend}
                    >
                        Send
                    </Button>
                </div>
            </Dialog>
        </>
    )
}

export default CustomerListSelected
