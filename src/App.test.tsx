import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import App from './App'
import { render } from './test-utils'
import { initialLevelState } from '../src/state/level-state'
import '@testing-library/jest-dom/extend-expect'

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />, { initialState: initialLevelState })
    const landingTitle = screen.getByText('Learn typing. Arabic Keyboard.')
    const startButton = screen.getByText('Get started')

    expect(landingTitle).toBeInTheDocument()
    expect(startButton).toBeInTheDocument()
  })

  describe('Start Button onClick', () => {
    beforeEach(() => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: jest.fn(() => null),
          setItem: jest.fn(() => null),
        },
        writable: true,
      })
    })

    it('renders Level component', () => {
      render(<App />, { initialState: initialLevelState })
      const startButton = screen.getByText('Get started')

      fireEvent.click(startButton)

      const statBar = screen.getByTestId('statBar')
      const keyfield = screen.getByTestId('keyfield')
      const keyboard = screen.getByTestId('keyboard')

      expect(statBar).toBeInTheDocument()
      expect(keyfield).toBeInTheDocument()
      expect(keyboard).toBeInTheDocument()
    })

    it('Should call localStorage getItem', () => {
      render(<App />, { initialState: initialLevelState })
      const startButton = screen.getByText('Get started')

      fireEvent.click(startButton)

      expect(window.localStorage.getItem).toHaveBeenCalledTimes(1)
    })
  })
})
