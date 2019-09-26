import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'
import { Box, Flex } from 'rebass'
import './TechList.css'
import randomColor from 'randomcolor'

const techs = ['Javascript', 'CSS', 'HTML', 'SASS', 'React', 'Redux', 'Express']

const TechList = () => {
  const typedRef = useRef(null)
  const typedStringsRef = useRef(null)
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      stringsElement: typedStringsRef.current,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      preStringTyped: () => {
        typedRef.current.style.background = `linear-gradient(${randomColor()}, ${randomColor()})`
      },
    })
    return () => {
      typed.destroy()
    }
  })
  return (
    <>
      <Box sx={{ display: 'none' }} ref={typedStringsRef} id="typed-strings">
        {techs.map(tech => (
          <p>{tech}</p>
        ))}
      </Box>
      <span>
        <Box
          display="inline"
          width="100%"
          height="3rem"
          fontSize={10}
          lineHeight={7}
          letterSpacing={7}
          fontWeight={700}
          color="transparent"
          sx={{
            'background-clip': 'text !important',
            '-webkit-background-clip': 'text !important',
            background: `linear-gradient(${randomColor()}, ${randomColor()})`,
          }}
          as="span"
          ref={typedRef}
        ></Box>
      </span>
    </>
  )
}

export default TechList
