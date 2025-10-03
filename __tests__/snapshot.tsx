import { render } from '@testing-library/react'  // The purpose of the "render" function is to render a React component into a virtual DOM that can be tested.
import HomePage from '../src/app/page'
 
it('renders homepage unchanged', () => {
  const { container } = render(<HomePage />)
// Jest saves the rendered DOM structure of the container as a snapshot file (usually in the __snapshots__ directory).
// If the rendered DOM changes during subsequent tests, Jest will alert you to the snapshot mismatch, helping you identify unexpected changes in your component.
// Use case: Ensuring that the UI output remains consistent with the previous snapshot.
  expect(container).toMatchSnapshot()
})