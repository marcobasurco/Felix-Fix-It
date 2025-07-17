import emailjs from '@emailjs/browser';

interface EmailData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  serviceAddress: string;
  city: string;
  state: string;
  zipCode: string;
  service: string;
  scheduledDate: string;
  scheduledTime: string;
  projectDescription: string;
}

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: 'service_lwtefri',
  templateId: 'template_lce7tmj',
  publicKey: 'uqoJsBTE-mMfZibSV'
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

export const sendSchedulingAcknowledgment = async (emailData: EmailData): Promise<boolean> => {
  try {
    const formattedDate = new Date(emailData.scheduledDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const formattedTime = new Date(`2000-01-01T${emailData.scheduledTime}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });

    // Prepare template parameters for EmailJS
    const templateParams = {
      customer_name: emailData.customerName,
      customer_email: emailData.customerEmail,
      customer_phone: emailData.customerPhone,
      service_address: emailData.serviceAddress,
      city: emailData.city,
      state: emailData.state,
      zip_code: emailData.zipCode,
      service_type: emailData.service || 'General Consultation',
      scheduled_date: formattedDate,
      scheduled_time: formattedTime,
      project_description: emailData.projectDescription || 'No specific description provided',
      full_address: `${emailData.serviceAddress}, ${emailData.city}, ${emailData.state} ${emailData.zipCode}`,
      reply_to: emailData.customerEmail,
      to_email: emailData.customerEmail,
      from_name: 'Felix Fix-It',
      company_phone: '(650) 315-1390',
      company_email: 'felix@felixfixit.com'
    };

    console.log('Sending email with template params:', templateParams);

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return response.status === 200;
    
  } catch (error) {
    console.error('Error sending acknowledgment email:', error);
    return false;
  }
};

// Alternative function to send admin notification
export const sendAdminNotification = async (emailData: EmailData): Promise<boolean> => {
  try {
    const formattedDate = new Date(emailData.scheduledDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const formattedTime = new Date(`2000-01-01T${emailData.scheduledTime}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });

    // Admin notification template parameters
    const adminParams = {
      customer_name: emailData.customerName,
      customer_email: emailData.customerEmail,
      customer_phone: emailData.customerPhone,
      service_address: emailData.serviceAddress,
      city: emailData.city,
      state: emailData.state,
      zip_code: emailData.zipCode,
      service_type: emailData.service || 'General Consultation',
      scheduled_date: formattedDate,
      scheduled_time: formattedTime,
      project_description: emailData.projectDescription || 'No specific description provided',
      full_address: `${emailData.serviceAddress}, ${emailData.city}, ${emailData.state} ${emailData.zipCode}`,
      to_email: 'felix@felixfixit.com', // Admin email
      from_name: 'Felix Fix-It Website',
      notification_type: 'New Appointment Scheduled'
    };

    // You can create a separate template for admin notifications
    // For now, we'll use the same template but send to admin
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      adminParams
    );

    console.log('Admin notification sent successfully:', response);
    return response.status === 200;
    
  } catch (error) {
    console.error('Error sending admin notification:', error);
    return false;
  }
};

export default {
  sendSchedulingAcknowledgment,
  sendAdminNotification
};