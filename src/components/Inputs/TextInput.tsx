import { useState } from "react";

interface NumberInputProps {
  max?: number;
  min?: number;
  value?: number;
  onChange: () => void;
}
const TextInput = ({ max, min = 0, value, onChange }: NumberInputProps) => {
  const [input, setInput] = useState<number>(0)
  const handleOnChange = (e: any) => {
    setInput(e.currentTarget.value)
  }
  return (
    <input
      type="number"
      value={input}
      max={20}
      min={min}
      onChange={handleOnChange}
    />
  );
};

export default TextInput;
