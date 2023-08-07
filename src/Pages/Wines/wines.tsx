import { useEffect, useState } from "react";
import { AppHeader } from "../../Components/AppHeader";
import {
  Container,
  SectionTitle,
  WineDescriptionDiv,
  WineInfo,
  WinesSection,
} from "./styles";
import { BASE_URL, api } from "../../services/api";

interface WineProps {
  id: number;
  photo: string;
  description: string;
  name: string;
}

export function Wines() {
  const [wines, setWines] = useState<WineProps[]>([]);

  async function fetchWines() {
    const response = api.get("/api/wines?populate=*");

    return response;
  }

  useEffect(() => {
    async function populateWines() {
      const response = await fetchWines();

     // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const winesArray = response.data.data.map((wine) => {
        return {
          id: wine.id,
          name: wine.attributes.name,
          description: wine.attributes.description,
          photo: wine.attributes.photo.data.attributes.url,
        };
      });

      setWines(winesArray);
    }
    populateWines();
  }, []);

  return (
    <Container>
      <AppHeader />
      <SectionTitle>
        <h2>Vinhos</h2>
      </SectionTitle>

      <WinesSection>
        {wines.length > 0 &&
          wines.map((wine) => (
            <WineInfo key={wine.id}>
              <img src={`${BASE_URL}${wine.photo}`} alt="Foto do vinho" />
              <WineDescriptionDiv>
                <h2>{wine.name}</h2>
                <p>{wine.description}</p>
              </WineDescriptionDiv>
            </WineInfo>
          ))}
      </WinesSection>
    </Container>
  );
}
