export interface ITask {
    text: string;
    // label: false; 
}

export interface ITaskList {
    tasks: ITask[];
    currentValue: string;
}