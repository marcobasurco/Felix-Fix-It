import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
}

interface EmailTestRequest {
  testEmail: string;
  testType: 'customer' | 'admin' | 'both';
}

// Get EmailJS configuration from environment variables
const getEmailJSConfig = () => {
  return {
    serviceId: Deno.env.get('EMAILJS_SERVICE_ID') || 'service_lwtefri',
    templateId: Deno.env.get('EMAILJS_TEMPLATE_ID') || 'template_lce7tmj',
    publicKey: Deno.env.get('EMAILJS_PUBLIC_KEY') || 'uqoJsBTE-mMfZibSV'
  };
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const { testEmail, testType = 'customer' }: EmailTestRequest = await req.json()

    if (!testEmail || !testEmail.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Valid email address is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Get EmailJS configuration
    const EMAILJS_CONFIG = getEmailJSConfig();

    // Test email data
    const testData = {
      customer_name: 'Test Customer',
      customer_email: testEmail,
      customer_phone: '(555) 123-4567',
      service_address: '123 Test Street',
      city: 'San Francisco',
      state: 'CA',
      zip_code: '94102',
      service_type: 'Email Test',
      scheduled_date: 'Tomorrow',
      scheduled_time: '2:00 PM',
      project_description: 'This is a test email to verify EmailJS integration is working correctly.',
      full_address: '123 Test Street, San Francisco, CA 94102',
      reply_to: testEmail,
      to_email: testEmail,
      from_name: 'Felix Fix-It',
      company_phone: '(650) 315-1390',
      company_email: 'felix@felixfixit.com'
    }

    // Send test email using EmailJS API
    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: EMAILJS_CONFIG.serviceId,
        template_id: EMAILJS_CONFIG.templateId,
        user_id: EMAILJS_CONFIG.publicKey,
        template_params: testData
      })
    })

    const emailResult = await emailResponse.text()
    
    if (emailResponse.ok) {
      return new Response(
        JSON.stringify({
          success: true,
          message: `Test email sent successfully to ${testEmail}`,
          emailjs_response: emailResult,
          test_data: testData
        }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Failed to send test email',
          emailjs_error: emailResult,
          status: emailResponse.status
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

  } catch (error) {
    console.error('Email test error:', error)
    
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Internal server error',
        details: error.message
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})