import styled from "styled-components";
import Atividades from "./Atividades";
import Banner from "./Banner";
import Depoimentos from "./Depoimentos";
import Formulario from "./Pesquisa";

const ContainerEstilizado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Inicial() {
    return (
        <ContainerEstilizado>
            <Banner />
            <Formulario />
            <Atividades />
            <Depoimentos />
        </ContainerEstilizado>
    );
}
