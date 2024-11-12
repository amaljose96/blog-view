import { ReactNode } from 'react';
import { CardContainer } from './styles';

interface ICardProps {
  children: ReactNode;
}

export function Card({ children }: ICardProps) {
  return <CardContainer>{children}</CardContainer>;
}
