import {createContext, ReactNode, useContext} from "react";
import {DomainBEntity} from "./domainBQueries";


const DetailsDataContext = createContext<DomainBEntity>({
    id: 0,
    name: "",
    description: "",
    tags: []
});

export const useDetailsDataContext = () => useContext<DomainBEntity>(DetailsDataContext);

interface DetailsDataProviderProps {
    readonly entity: DomainBEntity;
    readonly children: ReactNode;
}

export const DetailsDataProvider = (props: DetailsDataProviderProps) => {
    return (
        <DetailsDataContext.Provider value={props.entity}>
            {props.children}
        </DetailsDataContext.Provider>
    );
};