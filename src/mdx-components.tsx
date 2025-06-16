import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { GithubInfo } from 'fumadocs-ui/components/github-info';

// MDXComponents
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    GithubInfo,
  };
}

export const useMDXComponents = getMDXComponents;