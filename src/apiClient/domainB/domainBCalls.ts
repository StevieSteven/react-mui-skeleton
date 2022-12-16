export interface DomainBEntityResponse {
    readonly id: number;
    readonly name: string;
    readonly description?: string;
    readonly tagNames: string[];
}

export interface DomainBAddEntityRequest {
    readonly name: string;
    readonly description?: string;
    readonly tagNames: string[];
}

export let dummyData: DomainBEntityResponse[] = [
    {
        id: 1,
        name: "first entry",
        description: "description of first entry",
        tagNames: [],
    },
    {
        id: 2,
        name: "second entry",
        tagNames: ["tag1", "tag2", "tag3"],
    },
    {
        id: 3,
        name: "third entry",
        description: "description",
        tagNames: ["blue", "green", "red"]
    },
    {
        id: 4,
        name: "fourth entry",
        tagNames: []
    },
    {
        id: 5,
        name: "another entry",
        tagNames: []
    }
];

export const callGetDomainBEntities = () => Promise.resolve<DomainBEntityResponse[]>(dummyData);
export const callGetDomainBEntry = (id: number) => {
    const found = dummyData.find(it => it.id === id);
    return found
        ? Promise.resolve<DomainBEntityResponse>(found)
        : Promise.reject("not found");
};

export const callAddDomainBEntry = (input: DomainBAddEntityRequest) => {
    const newEntry: DomainBEntityResponse = {
        id: dummyData.length + 1,
        name: input.name,
        description: input.description,
        tagNames: input.tagNames
    }
    dummyData = [...dummyData, newEntry];
    return Promise.resolve<DomainBEntityResponse>(newEntry);
};
