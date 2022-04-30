import { EmailMessage } from '@/libs/types';
import { send, EmailJSResponseStatus } from '@emailjs/browser';

export const sendEmail = (params: EmailMessage): Promise<EmailJSResponseStatus> => send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      params,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
