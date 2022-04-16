export type PeopleType = {
    _id: number
    name: string
    age: number
}

type InitialPeopleType = PeopleType[]

const initialPeople: InitialPeopleType = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]


export const homeWorkReducer = (state: PeopleType[] = initialPeople, action: ActionType): PeopleType[] => {
    switch (action.type) {
        case "sort": {
            const newState = [...state].sort((a: PeopleType, b: PeopleType) => {
                if (a.name > b.name) return 1
                if (a.name < b.name) return -1
                else return 0
            })

            switch (action.payload) {
                case 'up' :
                    return newState
                case 'down' :
                    return newState.reverse()
            }
            return state

        }
        case "check": {

            return state.filter(el => el.age > 17)
        }
        default:
            return state
    }
};

type SortACType = ReturnType<typeof sort>
type CheckAgeACType = ReturnType<typeof checkAge>
type ActionType = SortACType | CheckAgeACType
export const sort = (sortType: 'up' | 'down') => {
    return {
        type: 'sort',
        payload: sortType
    }
}
export const checkAge = (age: number) => {
    return {
        type: 'check',
        payload: age
    }
}


