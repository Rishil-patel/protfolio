import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
const Card = ({ Description, title, img }) => {
    return (
        <Stack direction={'row'} gap={1.} alignItems={'center'} style={{ background: 'linear-gradient(128deg, #0e021f, #38126D)', filter: "drop-shadow(0px 0px 2px rgb(177, 94, 255))" }} width={{ md: "35%", xs: "100%" }} p={2} borderRadius={1.5} >
            <Box>
                <img src={img} alt="" width={100} />
            </Box>
            <Stack gap={.5}   >
                <Typography variant='h2' color={'primary'} >
                    {title}
                </Typography>
                <Typography variant='body2' color={'primary'} >
                    {Description}

                </Typography>
            </Stack>
        </Stack>
    )
}

export default Card
