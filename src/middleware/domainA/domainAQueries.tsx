import {useQuery} from "react-query";
import {callGetDomainAEntities} from "../../rest/domainA/domainACalls";


export interface DomainAEntity {
    readonly id: number;
    readonly name: string;
}

export const useGetEntities = () => useQuery("domain-a-list", () => callGetDomainAEntities());
