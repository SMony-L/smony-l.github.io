import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import App from './App';

vi.mock('react-ga', () => ({
  default: {
    initialize: vi.fn(),
    pageview: vi.fn(),
  },
}));

beforeEach(() => {
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({
    clearRect: vi.fn(),
    fillRect: vi.fn(),
    beginPath: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    stroke: vi.fn(),
    arc: vi.fn(),
    fill: vi.fn(),
    fillText: vi.fn(),
    createRadialGradient: () => ({ addColorStop: vi.fn() }),
    createLinearGradient: () => ({ addColorStop: vi.fn() }),
  });
  vi.stubGlobal('requestAnimationFrame', vi.fn(() => 1));
  vi.stubGlobal('cancelAnimationFrame', vi.fn());
});

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  try {
    act(() => {
      ReactDOM.render(<App />, div);
    });
    expect(div.querySelector('.App')).not.toBeNull();
    for (const id of ['about', 'experience', 'education', 'skills', 'projects']) {
      expect(div.querySelector(`#${id}`)).not.toBeNull();
    }
  } finally {
    act(() => {
      ReactDOM.unmountComponentAtNode(div);
    });
    div.remove();
  }
});
