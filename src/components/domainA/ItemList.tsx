import {useGetEntities} from "../../middleware/domainA/domainAQueries";
import {Alert, Box, Card, Typography} from "@mui/material";
import {useDomainATranslation} from "../../i18n/useTranslations";


export const ItemList = () => {
    const {t} = useDomainATranslation()

    const {data: entities = [], isLoading, isError} = useGetEntities();


    if(isLoading) {
        return (<Typography>{t("list.loading")}</Typography>)
    }

    if(isError) {
        return (
            <Alert severity="error">{t("list.error")}</Alert>
        )
    }

    if(entities.length === 0) {
        return (
            <Alert severity="info">{t("list.empty")}</Alert>
        );
    }
    return (
        <Box>
            {entities.map(entity => (
                <Card key={entity.id} sx={{mb: 2, p: 1}}>
                    <Typography>{t("list.entity", {name: entity.name})}</Typography>
                </Card>
            ))}
        </Box>
    )

}