import { LabelContainer } from './styles';

interface ILabelProps {
  text: string;
}
export function Label({ text }: ILabelProps) {
  return <LabelContainer>{text}</LabelContainer>;
}
