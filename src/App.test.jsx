import React from 'react';
import ReactDOM from 'react-dom';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { act } from 'react-dom/test-utils';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import App from './App';
import profileData from './profileData.json';

vi.mock('react-ga', () => ({
  default: {
    initialize: vi.fn(),
    pageview: vi.fn(),
  },
}));

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<App />, container);
  });
});

afterEach(() => {
  act(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
  container.remove();
  vi.restoreAllMocks();
});

it('renders the profile and every portfolio section from the existing data', () => {
  for (const id of ['about', 'projects', 'experience', 'skills', 'education']) {
    expect(container.querySelector(`#${id}`)).not.toBeNull();
  }

  expect(container.querySelector('h1').textContent).toContain(profileData.landing.firstName.trim());
  expect(container.querySelector('h1').textContent).toContain(profileData.landing.lastName);
  expect(container.querySelector('.landing-title').textContent).toContain(profileData.experience[0].position);
  expect(container.querySelector('.landing-title').textContent).toContain(profileData.experience[0].organization);
  expect(container.querySelector('.landing-bio').textContent).toBe(profileData.landing.bio);
  expect(container.querySelectorAll('.project-card')).toHaveLength(profileData.projects.length);
  expect(container.querySelectorAll('.experience-item')).toHaveLength(profileData.experience.length);
  expect(container.querySelectorAll('.skill-badge')).toHaveLength(profileData.skills.length);
  expect(container.querySelectorAll('.education-item')).toHaveLength(profileData.education.length);

  for (const project of profileData.projects) {
    expect(container.querySelector('#projects').textContent).toContain(project.title);
    expect(container.querySelector('#projects').textContent).toContain(project.aboutProject);
  }
  for (const item of profileData.experience) {
    expect(container.querySelector('#experience').textContent).toContain(item.aboutWork);
  }
  for (const skill of profileData.skills) {
    expect(container.querySelector('#skills').textContent).toContain(skill.name);
  }
  for (const item of profileData.education) {
    expect(container.querySelector('#education').textContent).toContain(item.university);
    expect(container.querySelector('#education').textContent).toContain(item.degree);
    expect(container.querySelector('#education').textContent).toContain(item.major);
  }
});

it('uses the requested name and omits the removed experience entries', () => {
  const firstName = 'Sovan"Mony"';
  const fullName = `${firstName} Lim`;

  expect(container.querySelector('h1').textContent).toBe(`${firstName}Lim.`);
  expect(container.querySelector('.brand-name').textContent).toBe(fullName);
  expect(container.querySelector('.portrait-frame img').alt).toBe(`Portrait of ${fullName}`);
  for (const paragraph of container.querySelectorAll('.footer-bottom p')) {
    expect(paragraph.textContent).toContain(fullName);
  }

  for (const organization of ['ArrowDot Co., Ltd', 'American University of Phnom Penh']) {
    expect(profileData.experience.some((item) => item.organization === organization)).toBe(false);
    expect(container.textContent).not.toContain(organization);
  }
});

it('keeps contact and social links working, including the projects GitHub link', () => {
  const projectLink = container.querySelector('.projects-footer a');
  const phone = profileData.landing.phoneNumber.replace(/[^\d+]/g, '');

  expect(projectLink.getAttribute('href')).toBe(profileData.landing.github);
  expect(projectLink.getAttribute('rel')).toContain('noopener');
  expect(container.querySelector(`a[href="mailto:${profileData.landing.email}"]`)).not.toBeNull();
  expect(container.querySelector(`a[href="tel:${phone}"]`)).not.toBeNull();
  expect(container.querySelector(`a[href="${profileData.landing.linkedin}"]`)).not.toBeNull();
  expect(container.querySelector('a[href="#"]')).toBeNull();
});

it('opens and closes the mobile navigation with its button, links, and Escape', () => {
  const button = container.querySelector('.mobile-toggle');
  const navigation = container.querySelector('#portfolio-navigation');

  expect(button.getAttribute('aria-expanded')).toBe('false');
  expect(navigation.classList.contains('is-open')).toBe(false);

  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(button.getAttribute('aria-expanded')).toBe('true');
  expect(navigation.classList.contains('is-open')).toBe(true);

  act(() => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
  });
  expect(button.getAttribute('aria-expanded')).toBe('false');
  expect(document.activeElement).toBe(button);

  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  const projectLink = navigation.querySelector('a[href="#projects"]');
  projectLink.addEventListener('click', (event) => event.preventDefault(), { once: true });
  act(() => {
    projectLink.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
  });
  expect(button.getAttribute('aria-expanded')).toBe('false');
  expect(navigation.classList.contains('is-open')).toBe(false);
});

it('provides matching browser and installed-site icons', () => {
  const publicDir = join(process.cwd(), 'public');
  const manifest = JSON.parse(readFileSync(join(publicDir, 'manifest.json'), 'utf8'));
  const favicon = readFileSync(join(publicDir, 'favicon.ico'));
  const iconSvg = readFileSync(join(publicDir, 'favicon.svg'), 'utf8');
  const appCss = readFileSync(join(process.cwd(), 'src', 'App.css'), 'utf8');
  const html = readFileSync(join(process.cwd(), 'index.html'), 'utf8');
  const background = appCss.match(/--page-bg:\s*(#[0-9a-f]{6})/i)?.[1];
  const accent = appCss.match(/--accent:\s*(#[0-9a-f]{6})/i)?.[1];

  expect(manifest.name).toBe('Sovan "Mony" Lim | Portfolio');
  expect(html).toContain('<title>Sovan "Mony" Lim | Portfolio</title>');
  expect(html).toContain('Portfolio of Sovan &quot;Mony&quot; Lim:');
  expect(background).toBeTruthy();
  expect(accent).toBeTruthy();
  expect(manifest.theme_color).toBe(background);
  expect(manifest.background_color).toBe(background);
  expect(html).toContain(`name="theme-color" content="${background}"`);
  expect(iconSvg).toContain(`fill="${accent}"`);
  expect(manifest.icons.map((icon) => icon.sizes)).toEqual(['192x192', '512x512']);
  expect(favicon.readUInt16LE(0)).toBe(0);
  expect(favicon.readUInt16LE(2)).toBe(1);

  for (const icon of manifest.icons) {
    const png = readFileSync(join(publicDir, icon.src));
    const [width, height] = icon.sizes.split('x').map(Number);
    expect(png.subarray(0, 8)).toEqual(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
    expect(png.readUInt32BE(16)).toBe(width);
    expect(png.readUInt32BE(20)).toBe(height);
  }
});
