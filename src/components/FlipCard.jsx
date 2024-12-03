import { useState } from "react";
import styled from "styled-components";

const FlipImageContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "isFlipped"
})`
    transform-style: preserve-3d;
    width: 200px;
    height: 200px;
    transform: ${props => (props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
    transition: transform 0.6s;
    position: relative;
`;

const FrontImage = styled.img`
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
`;

const BackImage = styled.img`
    backface-visibility: hidden;
    transform: rotateY(180deg);
    width: 100%;
    height: 100%;
    position: absolute;
`;

const FlipCard = ({ frontImg, backImg }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <>
            <FlipImageContainer isFlipped={isFlipped}>
                <FrontImage src={frontImg} alt="Front Side" />
                <BackImage src={backImg} alt="Back Side" />
            </FlipImageContainer>
            <button onClick={() => setIsFlipped(prev => !prev)}>뒤집기</button>
        </>
    );
};

export default FlipCard;
