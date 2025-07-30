import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CUSTOMER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE_ID;
const ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;

console.log('EmailJS Environment Variables Check:');
console.log('- SERVICE_ID:', SERVICE_ID ? '✓ Defined' : '✗ Missing');
console.log('- CUSTOMER_TEMPLATE_ID:', CUSTOMER_TEMPLATE_ID ? '✓ Defined' : '✗ Missing');
console.log('- ADMIN_TEMPLATE_ID:', ADMIN_TEMPLATE_ID ? '✓ Defined' : '✗ Missing');
console.log('- PUBLIC_KEY:', PUBLIC_KEY ? '✓ Defined' : '✗ Missing');

export const initEmailJs = () => {
  console.log('EmailJS: Starting initialization...');
  
  if (!PUBLIC_KEY) {
    console.error('EmailJS: VITE_EMAILJS_PUBLIC_KEY is not defined. Email service will not be initialized.');
    console.error('EmailJS: Please add VITE_EMAILJS_PUBLIC_KEY to your .env file');
    return false;
  }
  
  try {
    emailjs.init(PUBLIC_KEY);
    console.log('EmailJS: Successfully initialized with public key:', PUBLIC_KEY.substring(0, 8) + '...');
    return true;
  } catch (error) {
    console.error('EmailJS: Failed to initialize.', error);
    return false;
  }
};

export const sendEmail = async (templateId: string, templateParams: Record<string, unknown>) => {
  console.log('EmailJS: Starting email send process...');
  
  if (!SERVICE_ID || !templateId) {
    console.error('EmailJS: Missing required environment variables:');
    console.error('- SERVICE_ID:', SERVICE_ID ? '✓' : '✗ Missing');
    console.error('- TEMPLATE_ID (for this send):', templateId ? '✓' : '✗ Missing');
    console.error('EmailJS: Cannot send email without these values');
    throw new Error('EmailJS configuration incomplete');
  }
  
  console.log('EmailJS: Configuration check passed');
  console.log('EmailJS: Using SERVICE_ID:', SERVICE_ID);
  console.log('EmailJS: Using TEMPLATE_ID:', templateId);
  console.log('EmailJS: Template parameters:', {
    ...templateParams,
    // Hide sensitive data in logs
    to_email: templateParams.to_email ? '[HIDDEN]' : undefined,
    from_email: templateParams.from_email ? '[HIDDEN]' : undefined
  });
  
  try {
    console.log('EmailJS: Sending email...');
    const response = await emailjs.send(SERVICE_ID, templateId, templateParams);
    console.log('EmailJS: ✅ Email sent successfully!');
    console.log('EmailJS: Response status:', response.status);
    console.log('EmailJS: Response text:', response.text);
    return response;
  } catch (error) {
    console.error('EmailJS: ❌ Failed to send email');
    console.error('EmailJS: Error details:', error);
    
    // Provide more specific error information
    if (error instanceof Error) {
      console.error('EmailJS: Error message:', error.message);
      console.error('EmailJS: Error stack:', error.stack);
    }
    
    throw error;
  }
};

export const sendCustomerAcknowledgment = async (customerData: {
  name: string;
  email: string;
  service: string;
  message: string;
  phone: string;
  address: string;
  urgency?: string;
  preferredDate?: string;
  preferredTime?: string;
}) => {
  console.log('EmailJS: Preparing customer acknowledgment email...');
  
  // Initialize templateParams with common fields
  const templateParams: Record<string, unknown> = {
    to_name: customerData.name,
    to_email: customerData.email,
    from_name: 'Felix Fix-It',
    subject: 'Thank you for contacting Felix Fix-It',
    message: customerData.message,
    service_type: customerData.service || 'General inquiry',
    phone_number: customerData.phone,
    address: customerData.address,
    urgency: customerData.urgency || 'Not specified',
    reply_to: 'felix@felixfixit.com',
    // Always include preferred_date and preferred_time, even if empty
    preferred_date: customerData.preferredDate || 'Not specified',
    preferred_time: customerData.preferredTime || 'Not specified'
  };
  
  console.log('EmailJS: Customer acknowledgment template prepared');
  return await sendEmail(CUSTOMER_TEMPLATE_ID, templateParams);
};

export const sendAdminNotification = async (submissionData: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  address: string;
  urgency?: string;
  preferredDate?: string;
  preferredTime?: string;
}) => {
  console.log('EmailJS: Preparing admin notification email...');
  
  // Initialize templateParams with common fields
  const templateParams: Record<string, unknown> = {
    to_name: 'Felix',
    to_email: 'felix@felixfixit.com', // Admin email
    from_name: submissionData.name,
    from_email: submissionData.email,
    subject: `New ${submissionData.preferredDate ? 'Scheduling' : 'Quote'} Request from ${submissionData.name}`,
    phone_number: submissionData.phone,
    service_type: submissionData.service || 'General inquiry',
    urgency: submissionData.urgency || 'Not specified',
    message: submissionData.message,
    address: submissionData.address,
    reply_to: submissionData.email,
    // Always include preferred_date and preferred_time, even if empty
    preferred_date: submissionData.preferredDate || 'Not specified',
    preferred_time: submissionData.preferredTime || 'Not specified'
  };
  
  console.log('EmailJS: Admin notification template prepared');
  return await sendEmail(ADMIN_TEMPLATE_ID, templateParams);
};

// Initialize EmailJS when the module is loaded
console.log('EmailJS: Module loaded, initializing...');
const initResult = initEmailJs();
console.log('EmailJS: Initialization result:', initResult ? 'Success' : 'Failed');