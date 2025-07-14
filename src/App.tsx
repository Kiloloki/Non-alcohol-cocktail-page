import { useEffect, useState } from "react";
import styled from "styled-components";
import type { Drink } from "./interfaces/Drink";
import CocktailList from "./components/CocktailList";

const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 4px solid darkgreen;
  padding: 1rem;
`;

export default function App() {
    const [drinks, setDrinks] = useState<Drink[]>([]);

    useEffect(() => {
        async function fetchDrinks(): Promise<void> {
            try {
                const response = await fetch(
                    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
                );
                const data = await response.json();
                setDrinks(data.drinks);
            } catch (error) {
                console.error("Error fetching drinks:", error);
            }
        }

        fetchDrinks();
    }, []);

    return (
        <ParentDiv>
            <h1>🍹 Non-Alcoholic Drinks</h1>
            <CocktailList drinks={drinks} />
        </ParentDiv>
    );
}
