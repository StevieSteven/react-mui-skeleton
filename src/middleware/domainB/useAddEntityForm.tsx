import {useState} from "react";
import {useAddEntityMutation} from "./domainBQueries";

export interface AddEntityForm {
    readonly name: string;
    readonly setName: (name: string) => void;
    readonly description?: string;
    readonly setDescription: (description?: string) => void;
    readonly tags: string[];
    readonly setTags: (tags: string[]) => void;
    readonly submit: () => void;
}

export const useAddEntityForm = (): AddEntityForm => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string | undefined>();
    const [tags, setTags] = useState<string[]>([]);
    const mutation = useAddEntityMutation();

    const submit = () => {
        console.log("submit: ", {name,description, tags})
        mutation.mutateAsync({
            name,
            description,
            tags
        }).then(() => {
            setName("");
            setDescription("");
            setTags([]);
        })
    }

    return {
        name,
        setName,
        description,
        setDescription,
        tags,
        setTags,
        submit
    };
};