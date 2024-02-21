interface SearchInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <>
      <label htmlFor="search">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        id="search"
        required
      />
    </>
  );
};
