import { NextResponse } from 'next/server'
import { notificationSettingsData } from '@/mock/data/accountsData'

export async function GET() {
    return NextResponse.json(notificationSettingsData)
}
