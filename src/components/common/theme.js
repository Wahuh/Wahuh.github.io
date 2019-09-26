const breakpoints = ['20em', '30em', '48em', '62em', '75em']
breakpoints.xs = breakpoints[0]
breakpoints.sm = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.lg = breakpoints[3]
breakpoints.xl = breakpoints[4]
//    background-color: #171717;

export default {
  colors: {
    buttonText: '#ffffff',
    accent: '#f64747',
    bg: '#171717',
    text: '#ffffff',
    textLighter: '#B0B1B3',
    textLight: '#7A7C80',
    primary: '#ffffff',
    secondary: '#B0B1B3',
    tertiary: 'rgba(255, 255, 255, 0.5)',
    body: 'rgba(255, 255, 255, 0.5)',
    heading: '#000000',
    headerBg: 'rgba(0, 0, 0, 0.8)',
    headerFg: '#ffffff',
    link: '#f4d03f',
  },
  breakpoints,
  fontSizes: [
    0,
    '0.8125rem',
    '0.875rem',
    '0.9375rem',
    '1rem',
    '1.0625rem',
    '1.125rem',
    '1.25rem',
    '1.5rem',
    '1.875rem',
    '2.5rem',
    '5rem',
  ],
  lineHeights: [
    0,
    '1.125rem',
    '1.25rem',
    '1.3125rem',
    '1.375rem',
    '1.5rem',
    '1.5625rem',
    '1.75rem',
    '2.125rem',
    '2.625rem',
    '3.5rem',
    '7rem',
  ],
  letterSpacings: [
    0,
    '-0.003em',
    '-0.006em',
    '-0.009em',
    '-0.011em',
    '-0.013em',
    '-0.014em',
    '-0.017em',
    '-0.019em',
    '-0.021em',
    '-0.022em',
    '-0.022em',
  ],
  space: [
    0,
    '0.3125rem',
    '0.625rem',
    '0.9375rem',
    '1.25rem',
    '1.5625rem',
    '1.875rem',
    '2.5rem',
    '3.125rem',
    '3.75rem',
  ],
  sizes: [],
}
