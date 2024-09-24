import { useState, useEffect, useRef } from "react";
import { GridInputParcer, IsNumber } from "../../utils/helper";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { GridSizeInterface } from "../interface/GridSizeInterface";
import { GridInputInterface } from "../interface/GridInputInterface";
import PopupDialog from "../Dialog/PopupDialog";
import {
  DialogInterface,
  DIALOG_DEFAULT_VALUE,
} from "../interface/DialogInterface";
import { FailMsg, PROMPT_MSG, DirectionList } from "../../constants/Constant";

interface GridInputProps {
  gridSize: GridSizeInterface;
  configuredGridInput: (parcedValue: GridInputInterface | undefined) => void;
}
const GridInput = ({ gridSize, configuredGridInput }: GridInputProps) => {
  const [userInput, setUserInput] = useState<string>("");
  const [dialogConfig, setDialogConfig] =
    useState<DialogInterface>(DIALOG_DEFAULT_VALUE);
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
      setDialogConfig({
        ...dialogConfig,
        header: FailMsg.title,
        body: PROMPT_MSG.noInput,
        isOpen: true,
      });
      return;
    }

    const [xAxis, yAxis, direction] = GridInputParcer(userInput);
    if (!xAxis || !yAxis || !direction) {
      setDialogConfig({
        ...dialogConfig,
        header: FailMsg.title,
        body: PROMPT_MSG.invalidFormat,
        isOpen: true,
      });
      return;
    }

    // validate direction
    if (
      !DirectionList.find(
        (_direction: string) =>
          _direction.toLowerCase().trim() === direction.toLowerCase().trim()
      )
    ) {
      setDialogConfig({
        ...dialogConfig,
        header: FailMsg.title,
        body: PROMPT_MSG.invalidDirection,
        isOpen: true,
      });

      return;
    }

    // validate the axis (x & y)
    if (!IsNumber(xAxis) || !IsNumber(yAxis)) {
      setDialogConfig({
        ...dialogConfig,
        header: FailMsg.title,
        body: PROMPT_MSG.invalidFormat,
        isOpen: true,
      });

      return;
    }

    if (Number(xAxis) >= gridSize.row || Number(yAxis) >= gridSize.column) {
      setDialogConfig({
        ...dialogConfig,
        header: FailMsg.title,
        body: PROMPT_MSG.outsideRange,
        isOpen: true,
      });

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

  const handleToggleDialog = () => {
    setDialogConfig({ ...dialogConfig, isOpen: !dialogConfig?.isOpen });
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
      <PopupDialog
        header={dialogConfig.header}
        body={dialogConfig.body}
        handleToggle={handleToggleDialog}
        isOpen={dialogConfig.isOpen}
      />
    </div>
  );
};

export default GridInput;
