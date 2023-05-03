// React
import React from "react";

// Native Components
import { Container } from "./Style";

// @Types
import { NavigationProps } from "./Types";

//Components
import Link from "../Components/Link/Index";

const NavigationTemplate: React.FC<NavigationProps> = ({ urls }) => {
  return (
    <Container>
      {urls.map((eachOption) => (
        <Link
          key={urls.indexOf(eachOption)}
          name={eachOption.name}
          url={eachOption.url}
        />
      ))}

      
    </Container>
  );
};

export default NavigationTemplate;
