import styled from "@emotion/styled";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import IConsulta from "../../types/IConsulta";
import Botao from "../Botao";

const CelulaEstilizada = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        color: "var(--azul-escuro)",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "var(--fonte-principal)",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        fontFamily: "var(--fonte-principal)",
    },
}));

const LinhaEstilizada = styled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]: {
        backgroundColor: "var(--cinza-claro)",
        align: "right",
    },
}));

function Tabela({ consultas }: { consultas: IConsulta[] | null }) {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                            <CelulaEstilizada>Data</CelulaEstilizada>
                            <CelulaEstilizada>Horário</CelulaEstilizada>
                            <CelulaEstilizada>Profissional</CelulaEstilizada>
                            <CelulaEstilizada>Especialidade</CelulaEstilizada>
                            <CelulaEstilizada>Paciente</CelulaEstilizada>
                            <CelulaEstilizada>Modalidade</CelulaEstilizada>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {consultas?.map((linha) => {
                            return (
                                <LinhaEstilizada>
                                    <CelulaEstilizada
                                        component="th"
                                        scope="row"
                                    >
                                        {new Date(
                                            linha.data
                                        ).toLocaleDateString("pt-BR")}
                                    </CelulaEstilizada>
                                    <CelulaEstilizada>
                                        {linha.horario}
                                    </CelulaEstilizada>
                                    <CelulaEstilizada>
                                        {linha.profissional[0].nome}
                                    </CelulaEstilizada>
                                    <CelulaEstilizada>
                                        {linha.profissional[0].especialidade}
                                    </CelulaEstilizada>
                                    <CelulaEstilizada>
                                        {linha.paciente}
                                    </CelulaEstilizada>
                                    <CelulaEstilizada>
                                        {linha.modalidade}
                                    </CelulaEstilizada>
                                </LinhaEstilizada>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Botao>Ver mais</Botao>
        </>
    );
}

export default Tabela;
