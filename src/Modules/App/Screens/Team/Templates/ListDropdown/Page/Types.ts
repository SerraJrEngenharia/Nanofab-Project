interface ItemProps {
    name: string;
    unit: string;
    bond: string;
    titration: string;
    personFunction: string;
  }
  

export interface ListDropdownTemplateProps {
    list: Array<ItemProps>;
}