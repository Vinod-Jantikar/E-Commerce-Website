import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from './pages'


const AppLayout = () => {
  return (
    <div>
      <Header/>
      <Box sx={{minHeight: "100px"}}>
        <Outlet/>
      </Box>
      <Footer/>
    </div>
  )
}

export default AppLayout
