import React from 'react'
import { Link } from 'rebass'

const ExternalLink = props => (
  <Link {...props} target="_blank" rel="noopener noreferrer" />
)

export default ExternalLink
