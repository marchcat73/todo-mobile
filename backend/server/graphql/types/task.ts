const TaskFields = `
  name: String!
  taskDate: String!
`;

export const taskTypes = `
  enum StatusTypes {
    completed,
    inProgress,
    active,
  }

  input TaskInput {
    ${TaskFields}
    status: StatusTypes
  }

  input TaskUpdateInput {
    _id: ID!
    name: String
    taskDate: String
    status: StatusTypes
  }

  input TaskDeleteInput {
    _id: ID!
  }

  type TaskResponse {
    _id: ID!
    ${TaskFields}
    status: StatusTypes!
  }
`;
