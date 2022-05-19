import {useAddEntityForm} from "../../../middleware/domainB/useAddEntityForm";
import {Box, Button, Paper, styled, TextField, Typography} from "@mui/material";
import {useDomainBOverviewTranslation} from "../../../i18n/useTranslations";
import {MultipleSelectChip} from "./ChipSelect";

const tagOptions: string[] = ["red", "green", "blue", "orange", "yellow"]

export const AddEntityForm = () => {

    const {t} = useDomainBOverviewTranslation();
    const {name, setName, description, setDescription, tags, setTags, submit} = useAddEntityForm();

    return (
        <Paper sx={{p: 1}}>
            <Typography variant="h3">{t("form.title")}</Typography>
            <FormLine>
                <TextField label={t("form.labels.name")} variant="outlined" value={name}
                           onChange={(e) => setName(e.target.value)}/>
            </FormLine>
            <FormLine>
                <TextField label={t("form.labels.description")} variant="outlined" value={description} multiline={true} minRows={3}
                           onChange={(e) => setDescription(e.target.value)}/>
            </FormLine>
            <FormLine>
                <MultipleSelectChip
                    id={"tags-input"}
                    label={t("form.labels.tags")}
                    onChange={setTags}
                    options={tagOptions}
                    values={tags}
                />
            </FormLine>
            <FormLine>
                <Button onClick={submit} color={"primary"} variant={"contained"}>{t("form.submit")}</Button>
            </FormLine>
        </Paper>
    );
};

const FormLine = styled(Box)({marginBottom: "1em"});