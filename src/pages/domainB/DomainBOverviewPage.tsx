import {TitleBar} from "../../components/common/TitleBar";
import {useDomainBOverviewTranslation} from "../../i18n/useTranslations";

export const DomainBOverviewPage = () => {
    const {t} = useDomainBOverviewTranslation();
    return (
        <>
            <TitleBar title={t("title")}/>
        </>
    );
}