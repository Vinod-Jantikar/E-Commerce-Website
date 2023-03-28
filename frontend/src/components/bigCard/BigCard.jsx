import { Box, Typography } from '@mui/material'
import React from 'react'

const BigCard = ({item}) => {
  return (
    <Box sx={{width: "30%", border: "4px solid whitesmoke", boxSizing: "border-box", padding: "20px" }}>
        <img src={item.imgUrl} alt="jh" width="100%" height="80%" sx={{ transition: "transform .5s ease" }}/>
        <Typography>{item.text}</Typography>
    </Box>
  )
}

export default BigCard
