interface ItemProps {
  year: string;
  descriptions: {
    description: String 
  }
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
