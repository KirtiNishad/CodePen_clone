import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'

const Container = styled(AppBar)`
  background : #060606;
`

const Header = () => {
  return (
    <Container  position='static'>
      <Toolbar>
        CodePen
      </Toolbar>
    </Container>
  )
}

export default Header