export enum StatusTypes {
  completed = 'completed',
  inProgress = 'inProgress',
  active = 'active',
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

export interface TaskUpdateArgs {
  _id: string;
  name?: string;
  taskDate?: string;
  status?: StatusTypes;
}
