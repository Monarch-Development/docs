import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img
          src="/img/logo.png"
          alt="Logo"
          width={30}
          height={30}
          style={{ display: 'inline', verticalAlign: 'middle' }}
        />
        Monarch Development
      </>
    ),
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
  githubUrl: 'https://github.com/Monarch-Development',
};