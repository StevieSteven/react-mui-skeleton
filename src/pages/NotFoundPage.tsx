import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {Box, Button, Typography} from "@mui/material";
import {TitleBar} from "../components/common/TitleBar";


export const NotFoundPage = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    return (
        <Box>
            <TitleBar title={t("notFoundPage.title")}/>

            <Typography>{t("notFoundPage.description")}</Typography>
            <Box>
                <Button onClick={() => navigate("/")}>{t("notFoundPage.goTo.startPage")}</Button>

            </Box>
        </Box>
    );

}