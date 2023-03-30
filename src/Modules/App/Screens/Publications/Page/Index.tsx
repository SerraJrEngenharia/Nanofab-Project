// React
import React from "react";

// Native Components
import { Container } from "./Style";

// Assets
import PublicationIcon from "@/Assets/Publications/pub.svg";

// Templates
import HeaderTemplate from "@/Templates/Header/Page/Index";
import SubHeaderTemplate from "../Templates/SubHeader/Page/Index";
import ListTemplate from "../Templates/List/Page/Index";
import FooterTemplate from "@/Templates/Footer/Page/Index";

// @Types
import { PageProps } from "./Types";

const PublicationsPage: React.FC<PageProps> = ({}) => {
  const publications = [
    {
      year: "2015",
      descriptions: [
        {
          description:
            "Romani, E. C.; LARRUDE, D. G. ; NACHEZ, L. ; VILANI, C. ; DE CAMPOS, J. B. ; PERIPOLLI, S. B. ; FREIRE, F. L. .Graphene Grown by Chemical Vapour Deposition on Steel Substrates: Friction Behaviour. TRIBOLOGY LETTERS, v. 65, p. 96, 2017.",
        },
        {
          description:
            "Romani, E. C.; LARRUDE, D. G. ; NACHEZ, L. ; VILANI, C. ; DE CAMPOS, J. B. ; PERIPOLLI, S. B. ; FREIRE, F. L. .Graphene Grown by Chemical Vapour Deposition on Steel Substrates: Friction Behaviour. TRIBOLOGY LETTERS, v. 65, p. 96, 2017.",
        },
        {
          description:
            "Romani, E. C.; LARRUDE, D. G. ; NACHEZ, L. ; VILANI, C. ; DE CAMPOS, J. B. ; PERIPOLLI, S. B. ; FREIRE, F. L. .Graphene Grown by Chemical Vapour Deposition on Steel Substrates: Friction Behaviour. TRIBOLOGY LETTERS, v. 65, p. 96, 2017.",
        },
        {
          description:
            "Romani, E. C.; LARRUDE, D. G. ; NACHEZ, L. ; VILANI, C. ; DE CAMPOS, J. B. ; PERIPOLLI, S. B. ; FREIRE, F. L. .Graphene Grown by Chemical Vapour Deposition on Steel Substrates: Friction Behaviour. TRIBOLOGY LETTERS, v. 65, p. 96, 2017.",
        },
      ],
    },
    {
      year: "2017",
      descriptions: [
        {
          description:
            "Romani, E. C.; LARRUDE, D. G. ; NACHEZ, L. ; VILANI, C. ; DE CAMPOS, J. B. ; PERIPOLLI, S. B. ; FREIRE, F. L. .Graphene Grown by Chemical Vapour Deposition on Steel Substrates: Friction Behaviour. TRIBOLOGY LETTERS, v. 65, p. 96, 2017.",
        },
        {
          description:
            "Romani, E. C.; LARRUDE, D. G. ; NACHEZ, L. ; VILANI, C. ; DE CAMPOS, J. B. ; PERIPOLLI, S. B. ; FREIRE, F. L. .Graphene Grown by Chemical Vapour Deposition on Steel Substrates: Friction Behaviour. TRIBOLOGY LETTERS, v. 65, p. 96, 2017.",
        },
        {
          description:
            "Romani, E. C.; LARRUDE, D. G. ; NACHEZ, L. ; VILANI, C. ; DE CAMPOS, J. B. ; PERIPOLLI, S. B. ; FREIRE, F. L. .Graphene Grown by Chemical Vapour Deposition on Steel Substrates: Friction Behaviour. TRIBOLOGY LETTERS, v. 65, p. 96, 2017.",
        },
        {
          description:
            "Romani, E. C.; LARRUDE, D. G. ; NACHEZ, L. ; VILANI, C. ; DE CAMPOS, J. B. ; PERIPOLLI, S. B. ; FREIRE, F. L. .Graphene Grown by Chemical Vapour Deposition on Steel Substrates: Friction Behaviour. TRIBOLOGY LETTERS, v. 65, p. 96, 2017.",
        },
      ],
    },
  ];

  return (
    <Container>
      <HeaderTemplate />

      <SubHeaderTemplate title="Publicações" image={PublicationIcon} />

      {publications.map((eachPublication) => (
        <ListTemplate
          key={publications.indexOf(eachPublication)}
          year={eachPublication.year}
          list={eachPublication.descriptions}
        />
      ))}

      <FooterTemplate />
    </Container>
  );
};

export default PublicationsPage;
