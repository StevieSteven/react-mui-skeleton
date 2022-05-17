import {TitleBar} from "../components/common/TitleBar";
import {useDomainATranslation} from "../i18n/useTranslations";
import {ItemList} from "../components/domainA/ItemList";

export const DomainAPage = () => {
    const {t} = useDomainATranslation();
    return (
        <>
            <TitleBar title={t("title")}/>
            <ItemList/>
        </>
    );
};
