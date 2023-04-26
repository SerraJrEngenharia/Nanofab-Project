export interface ItemProps {
  name: string;
  unit: string;
  bond: string;
  titration: string;
}

export interface FunctionProps{
  personFunction: string,
  persons: Array<ItemProps>
}
  

export interface ListDropdownTemplateProps {
  list: Array<FunctionProps>;
}