/*
* in this file, there should be the rest calls
 */

import {DomainAEntity} from "../../middleware/domainA/domainAQueries";

const dummyData: DomainAEntity[] = [
    {
        id: 1,
        name: "first entity"
    },
    {
        id: 2,
        name: "second entity"
    },
];

export const callGetDomainAEntities = () => Promise.resolve<DomainAEntity[]>(dummyData);
