export enum StatusTypes {
  Completed = 'Completed',
  InProgress = 'InProgress',
  Active = 'Active',
}

export interface TaskFields {
  name: string;
  taskDate: string;
  status: StatusTypes;
}

export interface ICreateTaskInput {
  input: TaskFields;
}

export interface TaskResponse extends TaskFields {
  _id: string;
}
