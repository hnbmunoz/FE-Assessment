export const GridInputParcer = (gridInput: string): string[] => {
  return gridInput.split(',').map(s => s.trim());
}

// for valudating if value is a number
export const IsNumber = (value: any) => {
  return typeof value === 'number' || !isNaN(value);
}