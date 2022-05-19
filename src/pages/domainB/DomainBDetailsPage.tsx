import {TitleBar} from "../../components/common/TitleBar";
import {useDomainBDetailsTranslation} from "../../i18n/useTranslations";
import {useNavigate, useParams} from "react-router-dom";
import {useGetEntity} from "../../middleware/domainB/domainBQueries";
import {Alert, Box, Button, Chip, Paper, Typography} from "@mui/material";
import {DetailsDataProvider, useDetailsDataContext} from "../../middleware/domainB/DetailsDataProvider";

export const DomainBDetailsPage = () => {
    const {t} = useDomainBDetailsTranslation();
    const {id} = useParams<{ id: string }>();
    const parsedId: number = +id!!;
    const {data, isLoading, isError} = useGetEntity(parsedId);
    const navigate = useNavigate();

    if (isLoading) {
        return (
            <Box><Typography>{t("loading")}</Typography></Box>
        )
    }

    if (isError || !data) {
        return (
            <Alert severity={"error"}>{t("error")}</Alert>
        )
    }

    return (
        <>
            <DetailsDataProvider entity={data}>
                <TitleBar title={data.name}/>
                <Box mt={1}>
                    <DescriptionSection/>
                </Box>
                <Box mt={1}>
                    <TagSection/>
                </Box>
                <Box mt={1}>
                <Button onClick={() => navigate("/domainB")}>{t("goTo.overview")}</Button>
                </Box>

            </DetailsDataProvider>
        </>
    );
}

const DescriptionSection = () => {
    const {description} = useDetailsDataContext();
    const {t} = useDomainBDetailsTranslation();

    return (
        <Paper sx={{p: 1}}>
            <Typography variant="h3">{t("description.title")}</Typography>
            {
                description
                    ? <Typography>{description}</Typography>
                    : <Typography>{t("description.noDescription")}</Typography>
            }
        </Paper>
    )
}

const TagSection = () => {
    const {tags} = useDetailsDataContext();
    const {t} = useDomainBDetailsTranslation();

    return (
        <Paper sx={{p: 1}}>
            <Typography variant="h3">{t("tags.title")}</Typography>
            {
                tags.length > 0
                    ? tags.map((tag, index) => <Chip key={index} label={tag} sx={{mr: 1}}/>)
                    : <Typography>{t("tags.noTags")}</Typography>
            }
        </Paper>
    );
};
