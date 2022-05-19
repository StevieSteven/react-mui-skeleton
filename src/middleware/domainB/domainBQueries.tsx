import {useMutation, useQuery, useQueryClient} from "react-query";
import {callAddDomainBEntry, callGetDomainBEntities, callGetDomainBEntry} from "../../rest/domainB/domainBCalls";
import {mapDomainBEntityResponseToDomainBEntity} from "./domainBMapper";

export interface DomainBEntity {
    readonly id: number;
    readonly name: string;
    readonly description?: string;
    readonly tags: string[];
}

export interface DomainBAddEntryInput {
    readonly name: string;
    readonly description?: string;
    readonly tags: string[];
}

const queryListSelector = "domain-B-list"
const queryDetailsSelector = (id: number) => `domain-B-details-${id}`

export const useGetEntities = () => useQuery<DomainBEntity[]>(queryListSelector, () => {
    return callGetDomainBEntities()
        .then(data => Promise.resolve(data.map(it => mapDomainBEntityResponseToDomainBEntity(it))))
});

export const useGetEntity = (id: number) => useQuery<DomainBEntity>(queryDetailsSelector(id), () => {
    return callGetDomainBEntry(id)
        .then(data => Promise.resolve(mapDomainBEntityResponseToDomainBEntity(data)));
});

export const useAddEntityMutation = () => {
    const queryClient = useQueryClient();

    return useMutation<DomainBEntity, string, DomainBAddEntryInput>((input) => {
        return callAddDomainBEntry({
            name: input.name,
            description: input.description,
            tagNames: input.tags,
        }).then(data => Promise.resolve(mapDomainBEntityResponseToDomainBEntity(data)));
    }, {
        onSuccess: (newData) => {
            queryClient.setQueriesData(queryListSelector, (oldData: DomainBEntity[] = []) => [...oldData, newData]);
        },
    });
};

