import { useState } from 'react';
import {
  FormControl,
  Input,
  InputLabel,
  Box,
  TextareaAutosize,
  Fab,
  FormHelperText,
  Snackbar,
  Alert,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { EmailMessage } from '@/libs/types'
import { sendEmail } from '@/libs/emailjs-client'

const Contact = () => {
  const [contactForm, setContactForm] = useState<EmailMessage>({
    from_name: '',
    reply_to: '',
    subject: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState<boolean>(false)
  const [sendStatus, setSendStatus] = useState<number>(0)
  const isValidEmail = contactForm.reply_to.length === 0 || /[\w\-\._]+@[\w\-\._]+\.[A-Za-z]+/.test(contactForm.reply_to)
  const showSendButton =
    contactForm.from_name.length > 0
    && contactForm.reply_to.length > 0
    && contactForm.subject.length > 0
    && contactForm.message.length > 0
    && isValidEmail
  const onSubmit = async () => {
    const res = await sendEmail(contactForm);
    setSendStatus(res.status);
    setShowAlert(true);
  }
  const handleCloseAlert = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowAlert(false);
  };
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
              from_name: e.target.value,
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
              reply_to: e.target.value,
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
              message: e.target.value,
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
          aria-label="submit"
          onClick={onSubmit}
        >
          <SendIcon />
        </Fab>
        : null}
      <Snackbar open={showAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
        {sendStatus === 200 ?
          <Alert onClose={handleCloseAlert} severity="success">
            メールが送信されました
          </Alert>
          : <Alert onClose={handleCloseAlert} severity="error">
            メールの送信に失敗しました
          </Alert>
        }
      </Snackbar>
    </Box>
  )
}

export default Contact;