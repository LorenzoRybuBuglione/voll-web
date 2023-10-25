import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Botao from "../../components/Botao";
import CampoDigitacao from "../../components/CampoDigitacao";
import Logo from "./Logo.png";

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

const ParagrafoCadastro = styled(Paragrafo)`
    color: var(--cinza);
`;

const LinkCustomizado = styled(Link)`
    color: var(--azul-claro);
    font-weight: 700;
    text-decoration: none;
`;

const Formulario = styled.form`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <Formulario>
            <img src={Logo} alt="Logo da Voll" />
            <Titulo>Faça login em sua conta</Titulo>
            <CampoDigitacao
                valor={email}
                tipo="email"
                placeholder="Insira seu endereço de e-mail"
                onChange={setEmail}
                label="E-mail"
            />
            <CampoDigitacao
                valor={senha}
                tipo="password"
                placeholder="Insira sua senha"
                onChange={setSenha}
                label="Senha"
            />
            <Botao type="submit">Entrar</Botao>
            <Paragrafo>Esqueceu sua senha?</Paragrafo>
            <ParagrafoCadastro>
                Ainda não tem conta?{" "}
                <LinkCustomizado to="/cadastro">
                    Faça seu cadastro!
                </LinkCustomizado>
            </ParagrafoCadastro>
        </Formulario>
    );
}
