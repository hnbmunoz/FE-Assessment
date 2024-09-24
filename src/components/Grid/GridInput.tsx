import { useState, useEffect, useRef } from "react";
import { GridInputParcer, IsNumber } from "../../utils/helper";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { GridSizeInterface } from "../interface/GridSizeInterface";
import { GridInputInterface } from "../interface/GridInputInterface";
import swal from "sweetalert";
import {
  SwalFailMsg,
  PROMPT_MSG,
  DirectionList,
} from "../../constants/Constant";

interface GridInputProps {
  gridSize: GridSizeInterface;
  configuredGridInput: (parcedValue: GridInputInterface | undefined) => void;
}
const GridInput = ({ gridSize, configuredGridInput }: GridInputProps) => {
  const [userInput, setUserInput] = useState<string>("");
  const parameterRef = useRef<HTMLInputElement | null>(null); // The ref can initially be null

  useEffect(() => {
    parameterRef?.current?.focus();
    return () => {};
  }, []);

  const handleGridInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSetParameters = () => {
    if (!userInput || userInput.trim() === "") {
      swal(SwalFailMsg.title, PROMPT_MSG.noInput, SwalFailMsg.icon);
      return;
    }

    const [xAxis, yAxis, direction] = GridInputParcer(userInput);
    if (!xAxis || !yAxis || !direction) {
      swal(SwalFailMsg.title, PROMPT_MSG.invalidFormat, SwalFailMsg.icon);
      return;
    }

    // validate direction
    if (
      !DirectionList.find(
        (_direction: string) =>
          _direction.toLowerCase().trim() === direction.toLowerCase().trim()
      )
    ) {
      swal(SwalFailMsg.title, PROMPT_MSG.invalidDirection, SwalFailMsg.icon);
      return;
    }

    // validate the axis (x & y)
    if (!IsNumber(xAxis) || !IsNumber(yAxis)) {
      swal(SwalFailMsg.title, PROMPT_MSG.invalidFormat, SwalFailMsg.icon);
      return;
    }

    if (Number(xAxis) >= gridSize.row || Number(yAxis) >= gridSize.column) {
      swal(SwalFailMsg.title, PROMPT_MSG.outsideRange, SwalFailMsg.icon);
      return;
    }
    configuredGridInput({
      xAxis: Number(xAxis),
      yAxis: Number(yAxis),
      direction: direction,
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === "Enter" && handleSetParameters();
  };

  return (
    <div className="grid-input">
      <TextField
        required
        id="mui-grid-input"
        label="Enter Object Placement and Direction"
        value={userInput}
        onChange={handleGridInput}
        onKeyDown={handleKeyPress}
        inputRef={parameterRef}
        className="grid-input--text-box"
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
