export type Work = {
  id: string;
  overview: string;
  detail: string;
  technologies: string[];
  years: number;
}

export type EmailMessage = {
  from_name: string;
  reply_to: string;
  subject: string;
  message: string;
}
