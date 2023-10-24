import Avaliacao from "../../components/Avaliacao";
import Botao from "../../components/Botao";
import Cabecalho from "../../components/Cabecalho";
import Container from "../../components/Container";
import Grafico from "../../components/Grafico";
import Rodape from "../../components/Rodape";
import Subtitulo from "../../components/Subtitulo";
import Tabela from "../../components/Tabela";
import Titulo from "../../components/Titulo";

import useDadosConsulta from "../../useDadosConsulta";
import useDadosProfissional from "../../useDadosProfissionais";

export default function Dashboard() {
    const { dados: consultas, erro: consultasErro } = useDadosConsulta();
    const { dados: profissionais, erro: profissionaisErro } =
        useDadosProfissional();

    if (consultasErro || profissionaisErro) {
        console.log("Ocorreu um erro na reguisição");
    }

    return (
        <Container>
            <Titulo>Área Administrativa</Titulo>
            <Botao>Cadastrar especialista</Botao>
            <Titulo imagem="consulta">Consultas do Dia</Titulo>
            <Tabela consultas={consultas} />
            <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
            <Grafico consultas={consultas} profissionais={profissionais} />
            <Titulo imagem="avaliacao">Avaliação de especialistas</Titulo>
            <Subtitulo>Dezembro/22</Subtitulo>
            <Avaliacao profissionais={profissionais} />
        </Container>
    );
}
