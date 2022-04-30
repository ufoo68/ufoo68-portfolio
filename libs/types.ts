export type Work = {
  id: string;
  title: string;
  overview: string;
  image: {
    url: string;
    height: 565;
    width: 1024;
  }
  link: string;
}

export type EmailMessage = {
  from_name: string;
  reply_to: string;
  subject: string;
  message: string;
}
