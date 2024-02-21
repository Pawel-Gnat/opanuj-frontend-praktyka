interface SelectProps {
  setFilterOptions: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({ setFilterOptions }) => {
  return (
    <>
      <label htmlFor="options">Wybierz opcję filtrowania:</label>
      <select
        name="options"
        id="options"
        onChange={(e) => setFilterOptions(e.target.value)}
      >
        <option value="">Opcje</option>
        <option value="currency">Waluta</option>
        <option value="lang">Język</option>
        <option value="capital">Stolica</option>
        <option value="name">Nazwa państwa</option>
      </select>
    </>
  );
};
