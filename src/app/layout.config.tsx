import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img width="30" height="30" src="static/img/logo.png" aria-label="Logo"></img>
        Monarch Development
      </>
    ),
  },
  links: [
    {
      text: 'Docs',
      url: '/docs',
      active: 'nested-url',
    },
  ],
  githubUrl: 'https://github.com/Monarch-Development',
};