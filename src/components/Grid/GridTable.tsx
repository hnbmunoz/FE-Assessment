import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { GridSizeInterface } from "../interface/GridSizeInterface";
import { GridInputInterface } from "../interface/GridInputInterface";
import NorthIcon from "@mui/icons-material/North";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import SouthIcon from "@mui/icons-material/South";

import { useState, useEffect } from "react";

interface GridTableProps {
  gridInput: GridInputInterface;
  gridSize: GridSizeInterface;
}

const GridTable = ({ gridInput, gridSize }: GridTableProps) => {
  const [gridModel, setGridModel] = useState<any[]>([]);

  useEffect(() => {
    setGridModel(createTableData());
    return () => {};
  }, []);

  const createTableData = () => {
    return Array.from({ length: gridSize.row }, (_, _rowIndex) =>
      Array.from({ length: gridSize.column }, (_, _colIndex) => ``)
    );
  };

  const selectGridMarker = () => {
    if (!gridInput) return;
    switch (gridInput.direction.toLowerCase()) {
      case "north":
        return <NorthIcon />;
      case "east":
        return <EastIcon />;
      case "west":
        return <WestIcon />;
      default:
        return <SouthIcon />;
    }
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="MUI table">
        <TableBody>
          {gridModel.map((row: any, rowIdx: number) => (
            <TableRow key={rowIdx}>
              {row.map((_col: any, colIdx: number) => (
                <TableCell key={colIdx} sx={{ border: "1px solid #aaa" }}>
                  {rowIdx === gridInput.xAxis && colIdx === gridInput.yAxis && selectGridMarker()}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GridTable;
