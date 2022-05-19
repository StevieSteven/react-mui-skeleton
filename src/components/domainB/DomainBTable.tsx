import {useGetEntities} from "../../middleware/domainB/domainBQueries";
import {useDomainBOverviewTranslation} from "../../i18n/useTranslations";
import {
    Alert, Button,
    Card,
    Chip,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const DomainBTable = () => {
    const {t} = useDomainBOverviewTranslation();
    const {data = [], isError, isLoading} = useGetEntities();
    const navigate = useNavigate();
    if (isLoading) {
        return <Card><Typography>{t("table.loading")}</Typography></Card>
    }
    if (isError) {
        return <Alert severity={"error"}>{t("table.error")}</Alert>
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}}>
                <TableHead>
                    <TableRow>
                        <TableCell>{t("table.header.id")}</TableCell>
                        <TableCell>{t("table.header.name")}</TableCell>
                        <TableCell>{t("table.header.description")}</TableCell>
                        <TableCell>{t("table.header.tags")}</TableCell>
                        <TableCell>{t("table.header.actions")}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.description || ""}</TableCell>
                            <TableCell>{row.tags.map((tag, index) => <Chip key={index} sx={{mr: 1}}
                                                                           label={tag}/>)}</TableCell>
                            <TableCell><Button
                                onClick={() => navigate("" + row.id)}>{t("table.body.open")}</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};