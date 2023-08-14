// Import the matchMedia polyfill
import { matchMediaPolyfill } from 'mq-polyfill';
matchMediaPolyfill(window);

// Mock the react-slick Slider component
jest.mock('react-slick', () => {
  return {
    __esModule: true,
    default: ({ children }) => <div>{children}</div>,
  };
});
