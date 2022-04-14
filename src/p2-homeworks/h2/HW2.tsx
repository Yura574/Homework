import React, {useState} from "react";
import Affairs from "./Affairs";


export type AffType = {
    id: number
    name: string
    priority: FilterType
}
export type AffairPriorityType =  'low' | 'middle' | 'high';
export type AffairType = Array<AffType>;
export type FilterType = 'all' | AffairPriorityType;

// constants
const defaultAffairs: AffairType = [ // need to fix any
    {id: 1, name: "React", priority: "high"},
    {id: 2, name: "anime", priority: "low"},
    {id: 3, name: "games", priority: "low"},
    {id: 4, name: "work", priority: "high"},
    {id: 5, name: "html & css", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: AffairType = defaultAffairs, filter: FilterType): AffairType => { // need to fix any
    if (filter === "all") return affairs;
    if (filter === "low") {
        return affairs.filter(f => f.priority === 'low')
    }
    if (filter === "middle") {
        return affairs.filter(f => f.priority === 'middle')
    }
    if (filter === "high") {

        return affairs.filter(f => f.priority === 'high')
    }
    return affairs
}
export const deleteAffair = (affairs: AffairType, _id: number): AffairType => affairs.filter(a => a.id !== _id)


function HW2() {
    const [affairs, setAffairs] = useState<AffairType>(defaultAffairs);
    const [filter, setFilter] = useState<FilterType>("all");

    const changeFilter = (value: FilterType) => {
        setFilter(value)
    }

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (id: number) => setAffairs(deleteAffair(affairs, id));

    return (
        <div>
            <hr/>
            homeworks 2

            <Affairs
                data={filteredAffairs}
                deleteAffairCallback={deleteAffairCallback}
                changeFilter={changeFilter}

            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    );
}

export default HW2;
