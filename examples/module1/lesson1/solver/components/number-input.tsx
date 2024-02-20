interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <input
      type="number"
      className="rounded-md shadow-md p-4"
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
    />
  );
};
