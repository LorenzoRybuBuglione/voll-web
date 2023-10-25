import { Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo.png";

interface PropsCustomizadas {
    cor: string;
}

const Imagem = styled.img`
    padding: 2em 0;
`;

const PassoCustomizado = styled.div<PropsCustomizadas>`
    background-color: ${({ cor }) => cor};
    width: 16px;
    height: 16px;
    border-radius: 50%;
`;

const Titulo = styled.h2`
    margin-top: 80px;
    color: var(--cinza);
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
`;

const Paragrafo = styled.p`
    color: var(--azul-escuro);
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
`;

const Formulario = styled.form`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Cadastro() {
    const [etapaAtiva, setEtapaAtiva] = useState(0);

    return (
        <>
            <Imagem src={Logo} alt="Logo da Voll" />
            <Stepper activeStep={etapaAtiva}>
                <Step>
                    <StepLabel
                        StepIconComponent={(props) => (
                            <PassoCustomizado
                                cor={props.active ? "lightblue" : "lightgray"}
                            />
                        )}
                    />
                </Step>
                <Step>
                    <StepLabel
                        StepIconComponent={(props) => (
                            <PassoCustomizado
                                cor={props.active ? "lightblue" : "lightgray"}
                            />
                        )}
                    />
                </Step>
            </Stepper>
        </>
    );
}
