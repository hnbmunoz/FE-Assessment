export interface DialogInterface {
  header: string;
  body: string;
  isOpen:boolean
}

export const  DIALOG_DEFAULT_VALUE : DialogInterface = {
  header: '',  
  body: '',   
  isOpen: false 
}