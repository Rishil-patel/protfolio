import React from 'react'
import { Typography, Box, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = () => {

    const headerstyle = {
        background: "#1A0B2E",
        height: "70px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    }
    const linkstyle = {
        color: "#fff",
        textDecoration: "none",
    }


    return (
        <>
            <header style={headerstyle} >
                <Box display={'flex'} justifyContent={'space-evenly'} width={'100%'}  >

                    <Box>
                        <Typography variant='h2' color={'primary'}  >
                            My Portfolio
                        </Typography>

                    </Box>

                    <Stack flexDirection={'row'} gap={15}  >
                        <Typography variant='Headingtext ' >
                            <Link to='/' style={linkstyle} >Home</Link>
                        </Typography>
                        <Typography variant='Headingtext'  >
                            <Link to='/about' style={linkstyle} >About</Link>
                        </Typography>
                        <Typography variant='Headingtext' >
                            <Link to='/contact' style={linkstyle}>Contact</Link>
                        </Typography>
                    </Stack>
                </Box>
            </header>
        </>
    )
}

export default Header
