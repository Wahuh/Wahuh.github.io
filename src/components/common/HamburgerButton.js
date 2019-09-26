import React from 'react'
import { Button, Box } from 'rebass'

const HamburgerButton = ({ isOpen, onClick }) => {
  return (
    <Button
      onClick={onClick}
      size="3.125rem"
      display={{ md: 'none' }}
      sx={{
        padding: 0,
        backgroundColor: 'transparent',
        cursor: 'pointer',
        position: 'relative',
        span: {
          transition: 'transform 300ms ease-out',
          position: 'absolute',
          display: 'block',
          content: "''",
          backgroundColor: 'headerFg',
          width: '1.25rem',
          height: '0.125rem',
          left: 0,
          right: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          '&:nth-child(1)': {
            marginTop: '-0.25rem',
            transform: isOpen && 'translateY(4px) rotate(-45deg)',
          },
          '&:nth-child(2)': {
            marginTop: '0.25rem',
            transform: isOpen && 'translateY(-4px) rotate(45deg)',
          },
        },
      }}
    >
      <span />
      <span />
    </Button>
  )
}

export default HamburgerButton

// .Hamburger {
//   button {
//     background-color: transparent;

//     padding: 0;
//     border: none;

//     cursor: pointer;
//     display: block;
//     width: 50px;
//     height: 50px;
//     position: relative;

//     span {
//       transition: transform 500ms ease 0ms, background-color 0s ease;
//       position: absolute;
//       display: block;
//       content: '';
//       background-color: var(--color-fg);
//       width: 20px;
//       height: 2px;
//       left: 0;
//       right: 0;
//       margin-left: auto;
//       margin-right: auto;

//       &:nth-child(1) {
//         margin-top: -4px;
//       }

//       &:nth-child(2) {
//         margin-top: 4px;
//       }
//     }
//   }
// }

// .open {
//   span {
//     &:nth-child(1) {
//       transform: translateY(4px) rotate(-45deg);
//     }

//     &:nth-child(2) {
//       transform: translateY(-4px) rotate(45deg);
//     }
//   }
// }
