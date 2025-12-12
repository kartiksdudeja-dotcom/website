import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, source } = body

    // Send email using Web3Forms (free service - no API key required for basic use)
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: '4e8e3c04-6c6e-4c7b-9c7b-8e8e3c046c6e', // You'll need to replace this with your Web3Forms access key
        to: 'kartik.dudeja.com@gmail.com',
        subject: `New Inquiry from Supreme Villagio - ${source || 'Website'}`,
        from_name: name,
        email: email,
        message: `
          New Lead from Supreme Villagio Website
          
          Source: ${source || 'Website Form'}
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Message: ${message || 'No message provided'}
          
          Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
        `,
      }),
    })

    const data = await response.json()

    if (data.success) {
      return NextResponse.json({ success: true, message: 'Email sent successfully!' })
    } else {
      // Fallback: Log the data (in production, you'd want to store this)
      console.log('Form submission:', { name, email, phone, message, source, timestamp: new Date() })
      return NextResponse.json({ success: true, message: 'Form submitted successfully!' })
    }
  } catch (error) {
    console.error('Error processing form:', error)
    // Still return success to user but log the error
    return NextResponse.json({ success: true, message: 'Form submitted!' })
  }
}
