import emailjs from '@emailjs/browser';

interface EmailParams {
  name: string;
  email: string;
  message: string;
}

class EmailService {
  private static instance: EmailService;
  private initialized = false;

  private constructor() {}

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  private validateConfig() {
    const config = {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    };

    console.log('Validating EmailJS configuration:', {
      hasPublicKey: !!config.publicKey,
      hasServiceId: !!config.serviceId,
      hasTemplateId: !!config.templateId
    });

    const missingConfigs = Object.entries(config)
      .filter(([_, value]) => !value)
      .map(([key]) => key);

    if (missingConfigs.length > 0) {
      throw new Error(`Missing EmailJS configuration: ${missingConfigs.join(', ')}`);
    }

    return config;
  }

  public init() {
    try {
      const { publicKey } = this.validateConfig();
      emailjs.init(publicKey);
      this.initialized = true;
      console.log('EmailJS initialized');
    } catch (error) {
      console.error('EmailJS initialization failed:', error);
      throw error;
    }
  }

  public async sendEmail({ name, email, message }: EmailParams): Promise<void> {
    try {
      if (!this.initialized) {
        console.log('Initializing EmailJS before sending...');
        this.init();
      }

      const { serviceId, templateId } = this.validateConfig();

      const templateParams = {
        to_name: 'Heidy',
        from_name: name,
        from_email: email,
        message: message,
        reply_to: email
      };

      console.log('Template Params:', templateParams);

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      if (response.status === 200) {
        console.log('Email sent successfully:', response);
      } else {
        throw new Error(`EmailJS returned status ${response.status}`);
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      throw error;
    }
  }
}

export const emailService = EmailService.getInstance();