import { DescriptionProps } from "../../Page/Types";

export interface DropdownComponentProps {
  year: string,
  descriptions: Array<DescriptionProps>
}

export interface DropdownStyleProps {
  isVisible: boolean;
}