const ACCESS_KEY = (import.meta.env as any).VITE_WEB3FORMS_ACCESS_KEY || '';

export interface MailPayload {
  subject: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  data?: Record<string, string | number | undefined>;
}

export const mailService = {
  async sendEmail(payload: MailPayload): Promise<void> {
    if (ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
      console.warn('Web3Forms Access Key is missing. Email will not be sent.');
      throw new Error('Email service is not configured. Please add VITE_WEB3FORMS_ACCESS_KEY to your .env file.');
    }

    const submissionData = {
      access_key: ACCESS_KEY,
      subject: payload.subject,
      from_name: payload.name,
      replyto: payload.email,
      name: payload.name,
      email: payload.email,
      phone: payload.phone || 'Not provided',
      message: payload.message,
      ...payload.data
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(submissionData)
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Failed to send email via Web3Forms');
    }
  }
};
