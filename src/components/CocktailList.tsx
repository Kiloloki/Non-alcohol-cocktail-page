import styled from "styled-components";
import type {Drink} from "../interfaces/Drink";

interface Props {
    drinks: Drink[];
}

const DrinkGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
    // Aligns items to the center along the main axis (horizontal in a row-based flex container)
  justify-content: center;
`;

const DrinkCard = styled.div`
    width: 20vw;
    margin: 1vw;
    padding: 1vw;
    border: 0.2vw solid #ccc;
    border-radius: 1vw;
    background-color: #fff;
    text-align: center;
    // Enables smooth animations when the element is transformed or when its shadow changes
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    // Applies a slight zoom and shadow effect when the user hovers over the card
    &:hover {
        // Slightly enlarges the element to create a zoom-in effect
        transform: scale(1.05);
        // Adds a subtle shadow to create depth on hover
        box-shadow: 0 4vw 12vw rgba(0, 0, 0, 0.1);
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
