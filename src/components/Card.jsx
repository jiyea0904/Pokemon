import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
    width: 150px;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 6px;

    img {
    width: 120px;
    }
`

const Card = ({ pokemon }) => {
    const navigate = useNavigate();
    return(
        <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
            <img src={pokemon.frontImg} alt={pokemon.name} />
            <h6>{pokemon.name}</h6>
        </CardContainer>
    )
}

export default Card;
