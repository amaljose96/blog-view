import { ReactNode } from 'react';
import { Body, Header1, Header2 } from './styles';

interface ITypographyProps {
  variant: 'h1' | 'h2' | 'body';
  children: ReactNode;
}

const componentMap = {
  h1: Header1,
  h2: Header2,
  body: Body,
};

export function Typography({ variant, children }: ITypographyProps) {
  const Component = componentMap[variant];
  return <Component>{children}</Component>;
}
