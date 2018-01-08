import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import './index.css'

const StyledHeader = styled.header`
  margin-top: 15px;
  text-align: center;
`;

const Header = () => (
  <StyledHeader>
    <h1>Welcome to Humdrum, USA</h1>
  </StyledHeader>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Humdrum, USA"
      meta={[
        { name: 'description', content: 'Just a humdrum little town' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      <Header />
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
