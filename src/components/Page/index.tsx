import { Box, Container, CssBaseline, ThemeProvider } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { TypeBackground } from '@material-ui/core/styles/createPalette'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import React, { ReactElement, ReactNode } from 'react'

type PageProps = {
  children?: ReactElement | Element | ReactNode | JSX.Element
  backgroundColor: TypeBackground
  containerMaxWidth: false | 'md' | 'xs' | 'sm' | 'lg' | 'xl' | undefined
  containerStyles?: CSSProperties | React.CSSProperties | undefined
}

const Page: React.FC<PageProps> = ({
  children,
  backgroundColor,
  containerMaxWidth,
  containerStyles,
}) => {

  const theme = useTheme()
  theme.palette.background = backgroundColor
  console.log(theme)
  
  return (
    <ThemeProvider theme={outerTheme => ({ ...outerTheme, ...theme })}>
      <CssBaseline/>
      <Box>
        <Container style={containerStyles} maxWidth={containerMaxWidth}>
          {(children as unknown) as ReactElement}
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default Page
