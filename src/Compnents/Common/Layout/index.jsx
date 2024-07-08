import React from 'react'
import Header from '../Header'
import { Box } from '@mui/material'
import Footer from '../Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Box bgcolor={'#11071F'} >
                <Header />
                <Box p={12}  >{children}</Box>
                <Footer />
            </Box>
        </>
    )
}

export default Layout
