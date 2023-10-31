import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Modal,
    Switch,
} from "@mui/material";
import { truncate } from "fs";
import React, { useState } from "react";
import styled from "styled-components";
import Botao from "../../../components/Botao";
import CampoDigitacao from "../../../components/CampoDigitacao";
import Subtitulo from "../../../components/Subtitulo";
import Titulo from "../../../components/Titulo";
import autenticaStore from "../../../stores/autentica.store";
import IProfissional from "../../../types/IProfissional";
import usePost from "../../../usePost";

const BoxCustomizada = styled(Box)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30vw;
    max-height: 90vh;
    overflow-y: auto;
    background-color: white;
    border: none;
    border-radius: 16px;
    padding: 1em 5em;
`;

const Container = styled.div`
    text-align: left;
`;

const EnderecoContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 2fr 1fr;
    grid-gap: 0 1em;
`;

const ContainerSwitch = styled.div`
    text-align: center;
`;

const TextoSwitch = styled.p`
    color: var(--cinza);
`;
const BotaoCustomizado = styled(Botao)`
    width: 50%;
    display: block;
    margin: 0 auto;
`;

export default function ModalCadastro({
    open,
    handleClose,
}: {
    open: boolean;
    handleClose: () => void;
}) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [repitaSenha, setRepitaSenha] = useState("");
    const [especialidade, setEspecialidade] = useState("");
    const [crm, setCrm] = useState("");
    const [telefone, setTelefone] = useState("");
    const [imagem, setImagem] = useState("");
    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [estado, setEstado] = useState("");
    const [atendePorPlano, setAtendePorPlano] = useState(false);
    const [planosSelecionados, setPlanosSelecionados] = useState<string[]>([]);

    const label = { inputProps: { "aria-label": "Atende por plano?" } };

    const { cadastrarDados } = usePost();
    const { usuario } = autenticaStore;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checkboxValue = event.target.value;
        if (event.target.checked) {
            setPlanosSelecionados([...planosSelecionados, checkboxValue]);
        } else {
            setPlanosSelecionados(
                planosSelecionados.filter((plano) => plano !== checkboxValue)
            );
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const profissional: IProfissional = {
            nome,
            crm,
            senha,
            planoSaude: planosSelecionados,
            especialidade,
            possuiPlanoSaude: atendePorPlano,
            estaAtivo: true,
            imagem,
            email,
            telefone,
            endereco: {
                cep,
                rua,
                estado,
                numero,
                complemento,
            },
        };

        await cadastrarDados({
            url: "especialista",
            dados: profissional,
            token: usuario.token,
        });
    };

    return (
        <Modal
            open={open}
            onClose={() => {
                setAtendePorPlano(false);
                handleClose();
            }}
            aria-labelledby="Modal de cadastro do especialista"
            aria-describedby="Nesse modal será feito o cadastro do especialista"
        >
            <BoxCustomizada>
                <Titulo>
                    Cadastre o especialista inserindo os dados abaixo:
                </Titulo>
                <form onSubmit={handleSubmit}>
                    <Container>
                        <CampoDigitacao
                            label="Nome"
                            placeholder="Digite o nome da clínica"
                            valor={nome}
                            onChange={setNome}
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
                        <CampoDigitacao
                            label="Especialidade"
                            placeholder="Qual a sua especialidade?"
                            valor={especialidade}
                            onChange={setEspecialidade}
                            tipo="text"
                        />
                        <CampoDigitacao
                            label="CRM"
                            placeholder="Insira seu número de registro"
                            valor={crm}
                            onChange={setCrm}
                            tipo="number"
                        />

                        <CampoDigitacao
                            label="Telefone"
                            placeholder="(DDD) XXXXX-XXXX"
                            valor={telefone}
                            onChange={setTelefone}
                            tipo="tel"
                        />
                        <CampoDigitacao
                            label="Insira a URL da imagem"
                            placeholder="https://img.com/fotos/retrato"
                            valor={imagem}
                            onChange={setImagem}
                            tipo="text"
                        />

                        <CampoDigitacao
                            label="CEP"
                            placeholder="Insira o CEP"
                            valor={cep}
                            onChange={setCep}
                            tipo="text"
                        />

                        <EnderecoContainer>
                            <CampoDigitacao
                                label="Rua"
                                placeholder="Rua"
                                valor={rua}
                                onChange={setRua}
                                tipo="text"
                            />
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
                    </Container>

                    <ContainerSwitch>
                        <Subtitulo>Atende por plano?</Subtitulo>
                        <Switch
                            {...label}
                            onChange={() => {
                                atendePorPlano
                                    ? setAtendePorPlano(false)
                                    : setAtendePorPlano(true);
                            }}
                        />
                        <TextoSwitch>Não/Sim</TextoSwitch>
                    </ContainerSwitch>

                    {atendePorPlano && (
                        <>
                            <Subtitulo>Selecione os planos:</Subtitulo>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            onChange={handleChange}
                                            value="Sulamerica"
                                        />
                                    }
                                    label="Sulamerica"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            onChange={handleChange}
                                            value="Unimed"
                                        />
                                    }
                                    label="Unimed"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            onChange={handleChange}
                                            value="Bradesco"
                                        />
                                    }
                                    label="Bradesco"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            onChange={handleChange}
                                            value="Amil"
                                        />
                                    }
                                    label="Amil"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            onChange={handleChange}
                                            value="Biosaude"
                                        />
                                    }
                                    label="Biosaude"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            onChange={handleChange}
                                            value="Biovida"
                                        />
                                    }
                                    label="Biovida"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            onChange={handleChange}
                                            value="Outro"
                                        />
                                    }
                                    label="Outro"
                                />
                            </FormGroup>
                        </>
                    )}
                    <BotaoCustomizado type="submit">Cadastrar</BotaoCustomizado>
                </form>
            </BoxCustomizada>
        </Modal>
    );
}
