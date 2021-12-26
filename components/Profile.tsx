import Image from 'next/image'
import icon from '@/images/icon.png'

import { Box } from '@mui/material'

const Profile = () => (
  <Box>
    <Image src={icon} alt="avator" width={300} height={300} />
  </Box>
)

export default Profile