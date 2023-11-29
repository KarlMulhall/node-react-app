import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import App from '../App'

afterEach(() => {
    cleanup();
})

test('Component snapshot to ensure all components are loading consistently', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
})

test('test', () => {
    expect(true).toBe(true)
})

