import GridTable from "../components/Grid/GridTable";

export default {
  title: "GridTable",
  component: GridTable,
};


export const HappyPath = () => (
  <GridTable
    gridSize={{
      row: 5,
      column: 5,
    }}
    gridInput={{
      xAxis: 3,
      yAxis: 2,
      direction: "west",
    }}
  />
);

export const EdgeCase1 = () => (
  <GridTable
    gridSize={{
      row: 5,
      column: 5,
    }}
    gridInput={{
      xAxis: 0,
      yAxis: 0,
      direction: "SOUTH",
    }}
  />
);

export const EdgeCase2 = () => (
  <GridTable
    gridSize={{
      row: 5,
      column: 5,
    }}
    gridInput={{
      xAxis: 4,
      yAxis: 4,
      direction: "wEst",
    }}
  />
);
export const OutofScope = () => (
  <GridTable
    gridSize={{
      row: 5,
      column: 5,
    }}
    gridInput={{
      xAxis: 7,
      yAxis: 0,
      direction: "south",
    }}
  />
);

export const WrongDirection = () => (
  <GridTable
    gridSize={{
      row: 5,
      column: 5,
    }}
    gridInput={{
      xAxis: 2,
      yAxis: 0,
      direction: "souths",
    }}
  />
);
