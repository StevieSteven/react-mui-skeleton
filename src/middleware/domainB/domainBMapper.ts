import {DomainBEntityResponse} from "../../apiClient/domainB/domainBCalls";
import {DomainBEntity} from "./domainBQueries";

export const mapDomainBEntityResponseToDomainBEntity = (response: DomainBEntityResponse): DomainBEntity => ({
    id: response.id,
    name: response.name,
    description: response.description,
    tags: response.tagNames
});