import styled from "styled-components";
import IProfissional from "../../types/IProfissional";
import Card from "./Card";

const SecaoCard = styled.section`
    display: flex;
    flex-wrap: wrap;

    justify-content: space-between;
    width: 100%;
`;

function Avaliacao({
    profissionais,
}: {
    profissionais: IProfissional[] | null;
}) {
    return (
        <SecaoCard>
            {profissionais && profissionais.length
                ? profissionais?.map((profissional) => {
                      return <Card profissional={profissional} />;
                  })
                : "Não há avaliações para mostrar"}
        </SecaoCard>
    );
}

export default Avaliacao;
