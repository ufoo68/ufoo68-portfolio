import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Divider } from '@mui/material';
import Link from 'next/link'

const Footer = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '0px',
        width: '100%',
        height: '40px',
        textAlign: 'center',
      }}>
      <Divider />
      <Link href="https://github.com/ufoo68">
        <GitHubIcon sx={{margin: '0 15px'}} fontSize="large" />
      </Link>
      <Link href="https://twitter.com/ufoo_yuta">
        <TwitterIcon sx={{ margin: '0 15px' }} fontSize="large" />
      </Link>
      <Link href="https://www.facebook.com/ufoo68">
        <FacebookIcon sx={{ margin: '0 15px' }} fontSize="large" />
      </Link>
    </div>
  )
}

export default Footer;