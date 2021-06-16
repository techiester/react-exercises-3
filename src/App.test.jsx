import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

const testRenderer = renderer.create(<App />);

afterAll(() => {
  testRenderer.unmount();
})

test('app render test', () => {
  const tree = testRenderer.toJSON()
  expect(tree).toMatchSnapshot();
});
