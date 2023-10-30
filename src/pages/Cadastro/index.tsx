import { Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import Botao from "../../components/Botao";
import CampoDigitacao from "../../components/CampoDigitacao";
import IClinica from "../../types/IClinica";
import usePost from "../../usePost";
import Logo from "./Logo.png";
import { useNavigate } from "react-router-dom";

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
    text-align: center;
`;

const Formulario = styled.form`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BotaoCustomizado = styled(Botao)`
    width: 50%;
`;

const EnderecoContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 30% 65%;
    justify-content: space-between;
`;

export default function Cadastro() {
    const [etapaAtiva, setEtapaAtiva] = useState(0);
    const [nome, setNome] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [repitaSenha, setRepitaSenha] = useState("");

    const [telefone, setTelefone] = useState("");
    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [estado, setEstado] = useState("");

    const { cadastrarDados, erro, sucesso } = usePost();
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const clinica: IClinica = {
            nome,
            senha,
            email,
            endereco: {
                cep,
                rua,
                numero,
                complemento,
                estado,
            },
        };

        if (etapaAtiva !== 0) {
            try {
                cadastrarDados({ url: "clinica", dados: clinica });
                navigate("/login");
            } catch (erro) {
                erro && alert("Erro ao cadastrar os dados");
            }
        }

        setEtapaAtiva(etapaAtiva + 1);
    };

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

            {etapaAtiva === 0 ? (
                <Formulario onSubmit={handleSubmit}>
                    <Titulo>
                        Primeiro, alguns dados <br /> básicos:
                    </Titulo>
                    <CampoDigitacao
                        label="Nome"
                        placeholder="Digite o nome da clínica"
                        valor={nome}
                        onChange={setNome}
                        tipo="text"
                    />
                    <CampoDigitacao
                        label="CNPJ"
                        placeholder="Digite o CNPJ"
                        valor={cnpj}
                        onChange={setCnpj}
                        tipo="text"
                    />
                    <CampoDigitacao
                        label="Email"
                        placeholder="Insira o endereço de e-mail para login"
                        valor={email}
                        onChange={setEmail}
                        tipo="text"
                    />
                    <CampoDigitacao
                        label="Digite sua senha"
                        placeholder="Digite sua senha"
                        valor={senha}
                        onChange={setSenha}
                        tipo="password"
                    />
                    <CampoDigitacao
                        label="Repira a senha"
                        placeholder="Repita sua senha"
                        valor={repitaSenha}
                        onChange={setRepitaSenha}
                        tipo="password"
                    />
                    <BotaoCustomizado type="submit">Avançar</BotaoCustomizado>
                </Formulario>
            ) : (
                <Formulario onSubmit={handleSubmit}>
                    <Titulo>Agora, os dados técnicos:</Titulo>
                    <CampoDigitacao
                        label="Telefone"
                        placeholder="(DDD) XXXXX-XXXX"
                        valor={telefone}
                        onChange={setTelefone}
                        tipo="text"
                    />
                    <CampoDigitacao
                        label="CEP"
                        placeholder="Insira o CEP"
                        valor={cep}
                        onChange={setCep}
                        tipo="text"
                    />

                    <CampoDigitacao
                        label="Rua"
                        placeholder="Rua"
                        valor={rua}
                        onChange={setRua}
                        tipo="text"
                    />
                    <EnderecoContainer>
                        <CampoDigitacao
                            label="Numero"
                            placeholder="Numero"
                            valor={numero}
                            onChange={setNumero}
                            tipo="text"
                        />
                        <CampoDigitacao
                            label="Complemento"
                            placeholder="Complemento"
                            valor={complemento}
                            onChange={setComplemento}
                            tipo="text"
                        />
                        <CampoDigitacao
                            label="Estado"
                            placeholder="Estado"
                            valor={estado}
                            onChange={setEstado}
                            tipo="text"
                        />
                    </EnderecoContainer>
                    <BotaoCustomizado type="submit">Cadastrar</BotaoCustomizado>
                </Formulario>
            )}
        </>
    );
}
