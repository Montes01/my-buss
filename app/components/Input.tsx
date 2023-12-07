type InputComponentProps = {
  label: string;
  name: string;
  type: string;
  required: boolean;
};

export const Input = ({ label, name, type, required }: InputComponentProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={name} className="block mb-2">
        {label}
      </label>
      <input
        type={type}
        required={required}
        autoComplete="off"
        id={name}
        placeholder={label}
        name={name}
        className="w-full mb-4 p-2 border border-gray-300 rounded-xl text-black"
      />
    </div>
  );
};
