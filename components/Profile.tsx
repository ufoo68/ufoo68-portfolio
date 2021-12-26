import Image from 'next/image'
import icon from '@/images/icon.png'

import { Box, Popover, Typography } from '@mui/material'
import React from 'react'

const Profile = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLImageElement | null>(null)
  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Box sx={{ width: '500px', height: '300px', p: '5px' }}>
          <p>My name is...</p>
          <h2>Yuta Matsunaga</h2>
          <p>My occupation is... </p>
          <h2>Web Application Engineer</h2>
          <p>Mainly used language is... </p>
          <h2>JavaScript, Typescript</h2>
        </Box>
      </Popover>
      <Box sx={{ position: 'absolute', bottom: '0px', left: '0px', right: '0px' }}>
        {!Boolean(anchorEl) ? <h3>Please tap me!</h3> : null}
        <Image src={icon} alt="avator" width={300} height={300} onClick={handleClick} />
      </Box>
    </div>
  )
}

export default Profile