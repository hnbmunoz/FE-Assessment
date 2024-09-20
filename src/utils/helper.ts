import swal from "sweetalert"
import { SwalFailMsg, PROMPT_MSG, DirectionList} from "../constants/Constant"
import { GridSizeInterface } from "../components/interface/GridSizeInterface"
import { GridInputInterface } from "../components/interface/GridInputInterface"

export const GridInputParcer = (gridInput: string, gridSize: GridSizeInterface): GridInputInterface | undefined => {
  if (!gridInput || gridInput.trim() === '') {
    swal(SwalFailMsg.title, PROMPT_MSG.noInput, SwalFailMsg.icon)
    return
  }
  
  // split strings by (,)
  const [xAxis, yAxis, direction] = gridInput.split(',').map(s => s.trim());

  // validate if proper format
  if (!xAxis || !yAxis || !direction)  {
    swal(SwalFailMsg.title, PROMPT_MSG.invalidFormat, SwalFailMsg.icon)
    return
  }

  // validate direction
  if (!DirectionList.find((_direction: string) => _direction.toLowerCase().trim() === direction.toLowerCase().trim())) {
    swal(SwalFailMsg.title, PROMPT_MSG.invalidDirection, SwalFailMsg.icon)
    return
  }

  // validate the axis (x & y)
  if (!isNumber(xAxis) || !isNumber(yAxis)) {
    swal(SwalFailMsg.title, PROMPT_MSG.invalidFormat, SwalFailMsg.icon)
    return
  } 

  if (Number(xAxis) >= gridSize.row || Number(yAxis) >= gridSize.column) {
    swal(SwalFailMsg.title, PROMPT_MSG.outsideRange, SwalFailMsg.icon)
    return
  } 


  return {
    xAxis: Number(xAxis),
    yAxis: Number(yAxis),
    direction: direction
  }
}

// for valudating if value is a number
const isNumber = (value: any) => {
  return typeof value === 'number' || !isNaN(value);
}