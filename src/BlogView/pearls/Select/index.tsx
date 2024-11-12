import { SelectComponent, SelectContainer, SelectLabel } from './styles';

interface ISelectProps {
  options: {
    label: string;
    value: string;
  }[];
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export function Select({ options, value, onChange, label }: ISelectProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };
  return (
    <SelectContainer>
      <SelectLabel htmlFor={label}>{label}</SelectLabel>
      <SelectComponent id={label} value={value} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectComponent>
    </SelectContainer>
  );
}
