import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
// import Gradient from "../../Assetes/Svg/Gradient.svg"
import person from "../../Assetes/Images/image 1.png"
import arrow from "../../Assetes/Svg/Arrow.svg"
import "./home.css"

const Home = () => {
    return (
        <>
            <Box>
                <Stack alignItems={'center'} justifyContent={'center'} gap={20.5}>
                    <Stack alignItems={'center'} direction={'row'} justifyContent={'center'} gap={6.1}>
                        <Box className="box"  >
                            <img src={person} alt="color" width={110} className='person' />

                        </Box>
                        <Stack   >
                            <Stack >
                                <Stack direction={'row'}  >
                                    <img src={arrow} alt="color" width={80} style={{ objectFit: "none" }} />
                                    <Typography variant='body1' color={'primary'} fontFamily={"cursive"} >Hello, I'm  <span style={{ color: "#7127BA" }} >!Patel Rishil</span> </Typography>
                                </Stack>

                                <Box>
                                    <Typography variant='h6' color={'primary'} fontFamily={"cursive"} >A Designer Who</Typography>
                                    <Typography sx={{ fontSize: "37px" }} color={'primary'} fontFamily={"cursive"} width={300}  >Judges a book
                                        by its  <span style={{ color: "#7127BA" }} >   cover... </span> </Typography>
                                    <Typography variant='h6' color={'primary'} fontFamily={"cursive"} >Because if the cover does not impress you what else can?</Typography>
                                </Box>

                            </Stack>

                        </Stack>
                    </Stack>
                    <Stack justifyContent={'flex-start'} width={'100%'} marginLeft={20} >

                        <Typography sx={{ fontSize: "45px" }} color={'primary'} fontFamily={"cursive"}  >I'm a Software Engineer </Typography>
                        <Typography variant='body1' color={'primary'} fontFamily={"cursive"} >Currently, I'm a Software Engineer at Facebook,</Typography>
                    </Stack>
                    <Stack  >

                        <Typography variant='h4' color={'primary'} fontFamily={"cursive"} width={600}   > A self-taught UI/UX designer, functioning in the industry for 3+ years now.
                            I make meaningful and delightful digital products that create an equilibrium
                            between user needs and business goals.  </Typography>

                    </Stack>
                </Stack>


            </Box>



        </>
    )
}

export default Home
