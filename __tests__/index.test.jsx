/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePage from '../pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<HomePage />)
      expect(() => screen.getByText('Welcome to the Home Page')).toThrow();
  })
});
