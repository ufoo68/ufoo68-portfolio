import { useState } from 'react';
import { FormControl, Input, InputLabel, Box, TextareaAutosize, Fab, FormHelperText } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  text: string;

};



const Contact = () => {
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    text: '',
  });
  const isValidEmail = contactForm.email.length === 0 || /[\w\-\._]+@[\w\-\._]+\.[A-Za-z]+/.test(contactForm.email)
  const showSendButton =
    contactForm.name.length > 0
    && contactForm.email.length > 0
    && contactForm.subject.length > 0
    && contactForm.text.length > 0
    && isValidEmail
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '10px',
        padding: '0 20px'
      }}
      component="form"
    >
      <FormControl margin="dense">
        <InputLabel aria-label="name" htmlFor="name">会社名もしくは個人名</InputLabel>
        <Input
          aria-label="name"
          id="name"
          onChange={(e) => {
            setContactForm({
              ...contactForm,
              name: e.target.value,
            })
          }}
        />
      </FormControl>
      <FormControl error={!isValidEmail} margin="dense">
        <InputLabel aria-label="email" htmlFor="email">メールアドレス</InputLabel>
        <Input
          aria-label="email"
          id="email"
          onChange={(e) => {
            setContactForm({
              ...contactForm,
              email: e.target.value,
            })
          }}
        />
        <FormHelperText id="email">
          {!isValidEmail ? 'メールアドレスの形式が正しくありません' : ''}
        </FormHelperText>
      </FormControl>
      <FormControl margin="dense">
        <InputLabel aria-label="subject" htmlFor="subject">件名</InputLabel>
        <Input
          aria-label="subject"
          id="subject"
          onChange={(e) => {
            setContactForm({
              ...contactForm,
              subject: e.target.value,
            })
          }}
        />
      </FormControl>
      <FormControl margin="dense">
        <TextareaAutosize
          aria-label="text"
          placeholder="本文"
          style={{ height: '190px' }}
          onChange={(e) => {
            setContactForm({
              ...contactForm,
              text: e.target.value,
            })
          }}
        />
      </FormControl>
      {showSendButton ?
        <Fab
          sx={{
            position: 'absolute',
            bottom: '50px',
            right: '20px',
          }}
          color="primary"
          aria-label="submit">
          <SendIcon />
        </Fab>
        : null}
    </Box>
  )
}

export default Contact;