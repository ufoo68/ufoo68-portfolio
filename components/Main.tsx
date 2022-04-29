import Head from 'next/head'

import { Box } from '@mui/material'
import React from 'react'
import Profile from '@/components/Profile'
import Works from '@/components/Works'
import Sotial from '@/components/Sotial'
import { Work } from '@/libs/types'
import Header from './Header'

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
}

type Props = {
  works: Work[]
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

const Main = ({ works }: Props) => {
  const [tab, setTab] = React.useState(0)

  const handleChangeTab = (_event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  return (
    <div>
      <Head>
        <title>ufoo68 portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header tab={tab} onChangeTab={handleChangeTab} />
      <Box sx={{ textAlign: 'center' }}>
        <TabPanel value={tab} index={0}>
          <Profile />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <Works works={works} />
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <Sotial />
        </TabPanel>
        <TabPanel value={tab} index={3}>
          Coming soon...
        </TabPanel>
      </Box>
    </div>
  )
}

export default Main