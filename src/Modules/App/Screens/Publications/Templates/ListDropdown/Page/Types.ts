interface ItemProps {
  year: string;
  descriptions: Array<DescriptionProps>
}

export interface DescriptionProps{
  
  description: String;
  
}

// interface MinhaInterface{
//   car: {
//     full: string,
//     empty: string
//   },
//   plane: string
// }


export interface ListDropdownTemplateProps {
  list: Array<ItemProps>;
}
