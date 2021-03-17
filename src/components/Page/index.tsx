import { Container, CssBaseline, ThemeProvider } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import React, { ReactElement, ReactNode } from 'react'

type PageProps = {
  children?: ReactElement | Element | ReactNode | JSX.Element
  theme: Theme
  containerMaxWidth: false | 'md' | 'xs' | 'sm' | 'lg' | 'xl' | undefined
  containerStyles?: CSSProperties | React.CSSProperties | undefined
}

const Page: React.FC<PageProps> = ({
  children,
  theme,
  containerMaxWidth,
  containerStyles,
}) => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container style={containerStyles} maxWidth={containerMaxWidth}>
        {children as ReactElement}
      </Container>
    </ThemeProvider>
  )
}

export default Page
