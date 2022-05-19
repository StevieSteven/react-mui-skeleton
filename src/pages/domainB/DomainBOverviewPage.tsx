import {TitleBar} from "../../components/common/TitleBar";
import {useDomainBOverviewTranslation} from "../../i18n/useTranslations";
import {Box} from "@mui/material";
import {DomainBTable} from "../../components/domainB/DomainBTable";
import {AddEntityForm} from "../../components/domainB/form/AddEntityForm";

export const DomainBOverviewPage = () => {
    const {t} = useDomainBOverviewTranslation();
    return (
        <>
            <TitleBar title={t("title")}/>
            <Box sx={{mt: 2}}>
                <DomainBTable/>
            </Box>
            <Box sx={{mt: 2}}>
                <AddEntityForm/>
            </Box>
        </>
    );
}