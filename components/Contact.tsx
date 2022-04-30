import { FormControl, Input, InputLabel, Box, TextareaAutosize, SxProps } from '@mui/material';

const formItemStyle: SxProps = {
  marginBottom: '10px',
}

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
      <FormControl sx={formItemStyle}>
        <InputLabel aria-label="name" htmlFor="name">会社名もしくは個人名</InputLabel>
        <Input aria-label="name" id="name" />
      </FormControl>
      <FormControl sx={formItemStyle}>
        <InputLabel aria-label="email" htmlFor="email">メールアドレス</InputLabel>
        <Input aria-label="email" id="email" />
      </FormControl>
      <FormControl sx={formItemStyle}>
        <InputLabel aria-label="subject" htmlFor="subject">件名</InputLabel>
        <Input aria-label="subject" id="subject" />
      </FormControl>
      <FormControl sx={formItemStyle}>
        <TextareaAutosize
          aria-label="text"
          placeholder="本文"
          style={{ height: 300 }}
        />
      </FormControl>
    </Box>
  )
}

export default Contact;