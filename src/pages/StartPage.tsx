import {TitleBar} from "../components/common/TitleBar";
import {Box, Button, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

export const StartPage = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    return (
        <Box>
            <TitleBar title={t("startPage.title")}/>

            <Typography>{t("startPage.description")}</Typography>
            <Typography>{t("startPage.navigation")}</Typography>
            <Box>
            <Button onClick={() => navigate("/domainA")}>{t("startPage.goTo.domainA")}</Button>
            <Button onClick={() => navigate("/domainB")}>{t("startPage.goTo.domainB")}</Button>
            <Button onClick={() => navigate("/not-existing")}>{t("startPage.goTo.notExistingRoute")}</Button>
            </Box>
        </Box>
    );
};
