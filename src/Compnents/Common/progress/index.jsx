import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import { Stack, Box } from '@mui/material'
import "../../Home/home.css"

const Progress = ({ img, completed }) => {
    return (
        <Box>
            <Stack direction={'row'} alignItems={'center'} gap={1} justifyContent={'center'} >
                <img src={img} alt="" width={{ md: 30, xs: 15 }} />
                <ProgressBar completed={completed} className='progress' />
            </Stack>
        </Box>
    )
}

export default Progress
