import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link'

const Footer = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "10px",
        width: "100%",
        height: "40px",
        textAlign: "center",
      }}
    >
      <Link href="https://github.com/ufoo68" passHref>
        <a target="_blank" rel="noopener noreferrer">
          <GitHubIcon sx={{ margin: "0 15px" }} fontSize="large" />
        </a>
      </Link>
      <Link href="https://twitter.com/ufoo_yuta" passHref>
        <a target="_blank" rel="noopener noreferrer">
          <TwitterIcon sx={{ margin: "0 15px" }} fontSize="large" />
        </a>
      </Link>
      <Link href="https://www.facebook.com/ufoo68" passHref>
        <a target="_blank" rel="noopener noreferrer">
          <FacebookIcon sx={{ margin: "0 15px" }} fontSize="large" />
        </a>
      </Link>
    </div>
  );
}

export default Footer;