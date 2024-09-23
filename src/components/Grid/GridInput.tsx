import { useState, useEffect, useRef } from "react";
import { GridInputParcer } from "../../utils/helper";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { GridSizeInterface } from "../interface/GridSizeInterface";
import { GridInputInterface } from "../interface/GridInputInterface";

interface GridInputProps {
  gridSize: GridSizeInterface;
  configuredGridInput: (parcedValue: GridInputInterface | undefined) => void;
}
const GridInput = ({ gridSize, configuredGridInput }: GridInputProps) => {
  const [userInput, setUserInput] = useState<string>("");
  const parameterRef = useRef<HTMLInputElement | null>(null);  // The ref can initially be null


  useEffect(() => {
    parameterRef?.current?.focus()    
    return () => { }
  }, [])
  
  const handleGridInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSetParameters = () => {
    const parcedValue = GridInputParcer(userInput, gridSize);
    parcedValue && configuredGridInput(parcedValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === "Enter" && handleSetParameters();
  };

  return (
    <div className="grid-input">
      <label htmlFor="grid-input">Enter Object Placement and Direction: </label>
      <input
        id="grid-input"
        className="grid-input--text-box"
        type="text"
        value={userInput}
        onChange={handleGridInput}
        onKeyDown={handleKeyPress}
        ref={parameterRef}
      />
      <Button
        onClick={handleSetParameters}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Set Parameters
      </Button>
    </div>
  );
};

export default GridInput;
