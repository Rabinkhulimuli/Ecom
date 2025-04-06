// lib/db.ts
import { PrismaClient } from '@prisma/client'

// Type-safe global prisma instance
declare const global: {
  prisma: PrismaClient | undefined
}

// Check if we're in production
const isProduction = process.env.NODE_ENV === 'production'

// Initialize PrismaClient
const db = isProduction
  ? new PrismaClient()
  : global.prisma || (global.prisma = new PrismaClient())

export { db }