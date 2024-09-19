import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { TableSizeInterface } from "../interface/TableSizeInterface";

import { useState, useEffect } from "react";

interface GridProps {
  xAxis: number,
  yAxis: number,
  direction: 'NORTH'| 'EAST'| 'SOUTH'| 'WEST'
}

const GridTable = ({xAxis, yAxis, direction}: GridProps) => {
  const gridSize: TableSizeInterface = {
    row: 5,
    column: 5,
  };
  const [gridModel, setGridModel] = useState<any[]>([]);

  useEffect(() => {
    const x = xAxis;
    const y = yAxis;
    const target = direction;
    setGridModel(createTableData());
    return () => {};
  }, []);

  const createTableData = () => {
    return Array.from({ length: gridSize.row }, (_, _rowIndex) =>
      Array.from({ length: gridSize.column }, (_, _colIndex) => ``)
    );
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="MUI table">
        <TableBody>
          {gridModel.map((row: any, rowIdx: number) => (
            <TableRow key={rowIdx}>
              {row.map((col: any, colIdx: number) => (
                <TableCell key={colIdx} sx={{ border: "1px solid #aaa" }}>
                  {col}
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
