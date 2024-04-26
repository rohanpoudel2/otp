import InputField from "./InputField";

interface InputFieldGroupsProps {
  code: string[]
  handleInputChange: (index: number, value: string) => void
}

const InputFieldGroups: React.FC<InputFieldGroupsProps> = ({ code, handleInputChange }) => {
  return (
    <div
      className="flex items-center gap-5"
    >
      {code.map((digit, index) => (
        <InputField
          key={index}
          value={digit}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputChange(index, event.target.value)}
        />
      ))}
    </div>
  )
}

export default InputFieldGroups