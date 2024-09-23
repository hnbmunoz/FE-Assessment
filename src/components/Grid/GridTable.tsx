import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { GridSizeInterface } from "../interface/GridSizeInterface";
import { GridInputInterface } from "../interface/GridInputInterface";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
interface GridTableProps {
  gridInput: GridInputInterface;
  gridSize: GridSizeInterface;
}

const GridTable = ({ gridInput, gridSize }: GridTableProps) => {
  const [gridModel, setGridModel] = useState<string[][]>([]);

  useEffect(() => {
    setGridModel(createTableModel());
    return () => {};
  }, []);

  const createTableModel = () => {
    return Array.from({ length: gridSize.row }, (_, _rowIndex) =>
      Array.from({ length: gridSize.column }, (_, _colIndex) => ``)
    );
  };

  const selectGridMarker = () => {
    if (!gridInput) return;
    switch (gridInput.direction.toLowerCase()) {
      case "north":
        return <ArrowCircleUpOutlinedIcon color="primary"/>;
      case "east":
        return <ArrowCircleRightOutlinedIcon color="primary"/>;
      case "west":
        return <ArrowCircleLeftOutlinedIcon color="primary"/>;
      case "south":
        return <ArrowCircleDownOutlinedIcon color="primary"/>;
      default:
        return null;
    }
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="MUI table">
        <TableBody>
          {gridModel.map((row, rowIdx: number) => (
            <TableRow key={rowIdx}>
              {row.map((_col: string, colIdx: number) => (
                <TableCell
                  key={colIdx}
                  sx={{
                    border: "1px solid #333",
                    width: "2rem",
                    height: "1rem",
                    textAlign: "center",
                  }}
                >
                  {rowIdx === gridInput.xAxis &&
                    colIdx === gridInput.yAxis &&
                    selectGridMarker()}
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
