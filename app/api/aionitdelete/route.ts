import { NextResponse } from 'next/server'

type DeletionRequest = {
  fullName?: unknown
  email?: unknown
  reason?: unknown
  acknowledged?: unknown
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: DeletionRequest

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { error: 'Invalid request format.' },
      { status: 400 },
    )
  }

  const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const reason = typeof body.reason === 'string' ? body.reason.trim() : ''
  const acknowledged = body.acknowledged === true

  const errors: Record<string, string> = {}

  if (fullName.length < 2) {
    errors.fullName = 'Please enter your full name.'
  }
  if (!EMAIL_RE.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (reason.length > 1000) {
    errors.reason = 'Reason must be 1000 characters or fewer.'
  }
  if (!acknowledged) {
    errors.acknowledged =
      'You must acknowledge that deletion is permanent to continue.'
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { error: 'Please correct the highlighted fields.', fields: errors },
      { status: 422 },
    )
  }

  // In production, forward this request to your account-deletion pipeline
  // (ticketing system, queue, or email to your privacy team). We log a
  // sanitized record here so the request is captured server-side.
  console.log('[v0] AI On It deletion request received:', {
    fullName,
    email,
    hasReason: reason.length > 0,
    receivedAt: new Date().toISOString(),
  })

  return NextResponse.json(
    {
      message:
        'Your account deletion request has been received and will be processed.',
    },
    { status: 200 },
  )
}
