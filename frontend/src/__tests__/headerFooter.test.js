import { render, screen, cleanup } from '@testing-library/react'
import Header from '../header'
import Footer from '../footer'

afterEach(() => {
    cleanup();
})

test('Should render header component', () => {
    render(<Header/>)
    const headerComponent = screen.getByTestId('header')
    expect(headerComponent).toBeInTheDocument()
    expect(headerComponent).toHaveTextContent('REST Countries App')
})

test('Should render footer component', () => {
    render(<Footer/>)
    const footerComponent = screen.getByTestId('footer')
    expect(footerComponent).toBeInTheDocument()
    expect(footerComponent).toHaveTextContent('karlmulhall@live.ie')
})