import { useState } from "react";
import { GridSizeInterface } from "../interface/GridSizeInterface";
import { GridInputInterface } from "../interface/GridInputInterface";
import GridInput from "./GridInput";
import GridTable from "./GridTable";
const Grid = () => {
  const [parcedInput, setParcedInput] = useState<GridInputInterface>({xAxis: 0, yAxis: 0, direction: ''})

  const gridSize: GridSizeInterface = {
    row: 5,
    column: 5,
  };
  
  const handleParcedInput = (value: GridInputInterface | undefined) => {
    if (!value) return
    setParcedInput(value)
  }

  return (
    <div className="grid">
      <GridInput gridSize={gridSize} configuredGridInput={handleParcedInput} />
      <GridTable gridSize={gridSize} gridInput={parcedInput}/>;
    </div>
  );
};

export default Grid;
