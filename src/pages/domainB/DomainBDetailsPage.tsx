import {TitleBar} from "../../components/common/TitleBar";
import {useDomainBDetailsTranslation} from "../../i18n/useTranslations";
import {useParams} from "react-router-dom";

export const DomainBDetailsPage = () => {
    const {t} = useDomainBDetailsTranslation();
    const {id} = useParams<{id: string}>();
    return (
        <>
            <TitleBar title={t("title")}/>
            id: {id}
        </>
    );
}