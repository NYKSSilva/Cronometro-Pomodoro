
export type TaskType = 'workTime'| 'shortBreakTime'| 'longBreakTime'

export type TaskModel ={
    id: string;
    name: string;
    duration: number;
    startDate: number;
    completeDate: number|null; //quando o timer chega ao final
    interruptDate:number|null;
    type: TaskType;
};