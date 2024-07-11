import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import Gradient from "../../Assetes/Images/Gradient .png"
import person from "../../Assetes/Images/image 1.png"
import Skills from "../../Assetes/Images/Skills (1).png"
import arrow from "../../Assetes/Svg/Arrow.svg"
import Progress from "../Common/progress"
import progressdata from "../../Data/progress"
import "./home.css"

import Reactimg from "../../Assetes/Svg/React.svg"

import Card from '../Common/Card'
import Data from '../../Data'

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
                                    <Typography variant='body1' color={'primary'} fontFamily={"cursive"} >Hello, I'm  <span style={{ color: "#7127BA", fontSize: "22px" }} >!Patel Rishil</span> </Typography>
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
                        <Typography variant='body1' color={'primary'} fontFamily={"cursive"} >Currently, I'm a Front-End Developer at <span style={{ color: "#7127BA", fontSize: "22px" }} >React-JS</span> </Typography>
                    </Stack>
                    <Stack  >

                        <Typography variant='h4' color={'primary'} fontFamily={"cursive"} width={600}   > A React Web/App Desigen, functioning in the industry for 1 years now.
                            I make meaningful and delightful digital products that create an equilibrium
                            between user needs and business goals.  </Typography>

                    </Stack>

                    <Stack width={'100%'} alignItems={'center'} gap={1} className='blog' >
                        <Box position={'absolute'} top={-36} display={{ md: "block", xs: "none" }} >
                            <img src={Gradient} alt="" height={460} width={450} />
                        </Box>
                        <Stack alignItems={{ md: 'flex-start', xs: "center" }} paddingLeft={{ md: 24, xs: 0 }} width={'100%'} >
                            <Typography variant='title2' color={'white'}  >Work Experience</Typography>
                        </Stack>

                        <Stack direction={{ md: 'row', xs: "column" }} flexWrap={'wrap'} gap={2.2} justifyContent={'center'} >
                            {Data.map((item) => (
                                <Card
                                    img={item.img}
                                    title={item.title}
                                    Description={item.Description}

                                />


                            ))}

                        </Stack>


                    </Stack>
                    <Stack justifyContent={'center'} width={'100%'} alignItems={'center'} gap={2} >
                        <Stack width={"50%"} justifyContent={'center'} >
                            <Typography color={'primary'} variant='h2' textAlign={'center'} >I'm currently looking to join a <span style={{ color: "#7127BA", fontSize: "22px" }} > cross-functional  </span>  team
                                that values improving people's lives through accessible design </Typography>
                        </Stack>
                        <Stack justifyContent={'center'} width={'100%'} alignItems={'center'} display={{ md: "flex", xs: "none" }} >
                            <img src={Skills} alt="Skills" />
                        </Stack>

                        <Stack width={{ md: '75%', xs: "100%" }} gap={1.5} bgcolor={'red'} alignItems={'center'} p={2} style={{ background: 'linear-gradient(128deg, #0e021f, #38126D)', filter: "drop-shadow(0px 0px 2px rgb(177, 94, 255))" }} borderRadius={1.5} display={{ md: "none", xs: "flex" }} >
                            <Box width={'100%'}>
                                {progressdata.map((item) => (
                                    <Progress
                                        img={item.img}
                                        completed={item.completed}

                                    />


                                ))}
                            </Box>


                        </Stack>

                    </Stack>

                </Stack>




            </Box >



        </>
    )
}

export default Home
