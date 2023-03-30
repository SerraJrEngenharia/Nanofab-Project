interface NavigationLinkProps {
  name: string;
  url: string;
}

export interface NavigationProps {
  urls: Array<NavigationLinkProps>;
}
