import Image from 'next/image'
import avator from '@/images/icon.png'

import { Box, Popover } from '@mui/material'
import React from 'react'

type ProfileContentProps = {
  title: string;
  text: string;
}

const Profile = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLImageElement | null>(null)
  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const ProfileContent = ({ title, text }: ProfileContentProps) => <div>
    <p>{title}</p>
    <h2>{text}</h2>
  </div>

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Box sx={{ width: '450px', height: '500px', p: '10px' }}>
          <ProfileContent title="My name is..." text="Yuta Matsunaga" />
          <ProfileContent title="My occupation is..." text="Web Application Engineer" />
          <ProfileContent title="Mainly used language is...." text="JavaScript, Typescript" />
          <ProfileContent title="I live in..." text="Shiga in Japan" />
          <ProfileContent title="Who is this avator...?" text="Shikura" />
        </Box>
      </Popover>
      <Box
        sx={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translate(-50%, 0)'
        }}>
        {!Boolean(anchorEl) ? <h3>Please tap me!</h3> : null}
        <Image src={avator} alt="avator" width={300} height={300} onClick={handleClick} />
      </Box>
    </div>
  )
}

export default Profile