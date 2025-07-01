
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      businessName,
      contactName,
      website,
      industry,
      employeeCount,
      revenueRange,
      timeConsumingTasks,
      currentTools,
      operationalBottlenecks,
      painPoints,
      additionalInfo
    } = body

    // Validate required fields
    if (!businessName || !contactName || !industry || !employeeCount || !revenueRange || !timeConsumingTasks || !operationalBottlenecks || !painPoints) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create audit request in database
    const auditRequest = await prisma.auditRequest.create({
      data: {
        businessName,
        contactName,
        website: website || 'advisoryjks.com',
        industry,
        employeeCount,
        revenueRange,
        timeConsumingTasks,
        currentTools: currentTools || '',
        operationalBottlenecks,
        painPoints,
        additionalInfo: additionalInfo || '',
        status: 'pending'
      }
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Audit request submitted successfully',
        id: auditRequest.id 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Error creating audit request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

export async function GET() {
  try {
    const auditRequests = await prisma.auditRequest.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(auditRequests)
  } catch (error) {
    console.error('Error fetching audit requests:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
