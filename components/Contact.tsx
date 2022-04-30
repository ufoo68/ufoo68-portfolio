import { FormControl, Input, InputLabel, Box, TextareaAutosize, SxProps } from '@mui/material';

const Contact = () => {
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
        <Input aria-label="name" id="name" />
      </FormControl>
      <FormControl margin="dense">
        <InputLabel aria-label="email" htmlFor="email">メールアドレス</InputLabel>
        <Input aria-label="email" id="email" />
      </FormControl>
      <FormControl margin="dense">
        <InputLabel aria-label="subject" htmlFor="subject">件名</InputLabel>
        <Input aria-label="subject" id="subject" />
      </FormControl>
      <FormControl margin="dense">
        <TextareaAutosize
          aria-label="text"
          placeholder="本文"
          style={{ height: 200 }}
        />
      </FormControl>
    </Box>
  )
}

export default Contact;