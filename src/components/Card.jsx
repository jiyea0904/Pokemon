import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import { memo, useState } from "react";

export const CardContainer = styled.div`
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
`;

const Image = styled.img`
    display: ${props => (props.isLoading ? 'none' : 'block')};
    width: 120px;
    height: 120px;
`;

const Card = memo(({ pokemon }) => {
    const [isImgLoading, setIsImgLoading] = useState(true);
    const navigate = useNavigate();

    return (
        <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
            {isImgLoading ? <div className="w-[120px] h-[120px] leading-[120px] text-center">Loading...</div> : null}
            <Image
                isLoading={isImgLoading}
                onLoad={() => setIsImgLoading(false)}
                src={pokemon.frontImg}
                alt={`${pokemon.name} image`}
            />
            <h6>
                {pokemon.name}
                <FavoriteButton pokemonId={pokemon.id} />
            </h6>
        </CardContainer>
    );
}, (prevProps, nextProps) => prevProps.pokemon.id === nextProps.pokemon.id);

export default Card;
