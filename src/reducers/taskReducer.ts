type Task = {id: number; text: string};

type State = Task[];

type Action = 
| {type: "add"; payload: string}
| {type: "remove"; payload: number};

export function taskReducer(state: State, action: Action): State{
    switch (action.type){
        case "add":
            return [...state, {id:Date.now(), text: action.payload}];
        case "remove":
            return state.filter((task) => task.id !== action.payload);
        default:
            throw new Error("Unknown action type");
    }
}