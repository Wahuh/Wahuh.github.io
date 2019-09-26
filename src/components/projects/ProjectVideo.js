import React from 'react'
import { Flex, Box } from 'rebass'

const ProjectVideo = () => {
  return (
    // <video
    //   autoPlay
    //   muted
    //   loop
    //   playsInline
    //   width="610"
    //   height="254"
    //   poster="one-does-not-simply.jpg"
    // >
    //   <source
    //     data-src="https://www.youtube.com/embed/DfV5yMQ5H6E"
    //     type="video/webm"
    //   />
    // </video>
    <Flex
      flex={{ lg: 1 }}
      width="100%"
      sx={{
        position: 'relative',
        paddingBottom: '56.25%',
        paddingTop: '25px',
        height: 0,
        overflow: 'hidden',
      }}
    >
      <Box
        backgroundColor='grey'
        // as="iframe"
        sx={{ position: 'absolute', top: 0, left: 0 }}
        width="100%"
        height="100%"
        // src="https://www.youtube.com/embed/DfV5yMQ5H6E"
        // frameborder="0"
        // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        // allowfullscreen
      ></Box>
    </Flex>
  )
}

export default ProjectVideo
