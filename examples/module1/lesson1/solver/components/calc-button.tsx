interface CalcButtonProps {
  operation: string;
  onClick: () => void;
}

export const CalcButton: React.FC<CalcButtonProps> = ({
  operation,
  onClick,
}) => {
  return (
    <button
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={() => onClick()}
    >
      {operation}
    </button>
  );
};
