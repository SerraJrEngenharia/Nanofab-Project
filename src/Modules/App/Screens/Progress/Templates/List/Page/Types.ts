export interface ListProps {
  name: string,
  institution: string,
  startDate: string,
  endDate: string | null,
  samples: number,
  situation: string,
}

export interface PageProps {
  list: Array<ListProps>,
}
