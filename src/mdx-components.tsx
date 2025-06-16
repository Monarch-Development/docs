import defaultComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { GithubInfo } from 'fumadocs-ui/components/github-info';
import { TypeTable } from 'fumadocs-ui/components/type-table';

// MDXComponents
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    GithubInfo,
    TypeTable,
  };
}