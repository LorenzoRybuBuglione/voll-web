import facebook from "./assets/facebook.png";
import google from "./assets/google.png";
import instagram from "./assets/instagram.png";
import whatsapp from "./assets/whatsapp.png";
import styled from "styled-components";

const RodapeEstilizado = styled.footer`
    height: 10%;
    color: white;
    padding: 1em;
    background-color: var(--azul-escuro);
    text-align: center;
`;

const ListaEstilizada = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 10%;
    margin: 1em auto;
`;

const ItemEslizado = styled.li`
    list-style-type: none;
`;

function Rodape() {
    return (
        <RodapeEstilizado>
            <ListaEstilizada>
                <ItemEslizado>
                    <a href="#">
                        <img src={facebook} alt="Logo do Facebook" />
                    </a>
                </ItemEslizado>
                <ItemEslizado>
                    <a href="#">
                        <img src={google} alt="Logo do Google" />
                    </a>
                </ItemEslizado>
                <ItemEslizado>
                    <a href="#">
                        <img src={instagram} alt="Logo do Instagram" />
                    </a>
                </ItemEslizado>
                <ItemEslizado>
                    <a href="#">
                        <img src={whatsapp} alt="Logo do Whatsapp" />
                    </a>
                </ItemEslizado>
            </ListaEstilizada>
            <p>
                2023 @ Desenvolvido por Lorenzo | Projeto fictício sem fins
                comerciais.
            </p>
        </RodapeEstilizado>
    );
}

export default Rodape;
