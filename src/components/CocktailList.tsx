import styled from "styled-components";
import type {Drink} from "../interfaces/Drink";

interface Props {
    drinks: Drink[];
}

const DrinkGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const DrinkCard = styled.div`
    width: 20vw;
    margin: 1vw;
    padding: 1vw;
    border: 2px solid #ccc;
    border-radius: 1vw;
    background-color: #fff;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
`;

const DrinkImage = styled.img`
  width: 100%;
  border-radius: 5vw;
`;

export default function CocktailList({ drinks }: Props) {
    return (
        <DrinkGrid>
            {drinks.map((drink) => (
                <DrinkCard key={drink.idDrink}>
                    <DrinkImage src={drink.strDrinkThumb} alt={drink.strDrink} />
                    <h3>{drink.strDrink}</h3>
                    <p>ID: {drink.idDrink}</p>
                </DrinkCard>
            ))}
        </DrinkGrid>
    );
}
