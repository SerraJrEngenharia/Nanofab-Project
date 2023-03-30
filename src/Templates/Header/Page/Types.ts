interface NavigationLinkProps {
  name: string;
  url: string;
}

export interface PageProps {
  navLinks: Array<NavigationLinkProps>;
}
