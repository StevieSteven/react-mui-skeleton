import {useQuery} from "@tanstack/react-query";
import {callGetDomainAEntities} from "../../apiClient/domainA/domainACalls";


export interface DomainAEntity {
    readonly id: number;
    readonly name: string;
}

export const useGetEntities = () => useQuery({
    queryKey: ["domain-a-list"],
    queryFn: () =>callGetDomainAEntities(),
});
