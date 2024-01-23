const TaskFields = `
  name: String!
  taskDate: String!
`;
export const taskTypes = `
  enum StatusTypes {
    Completed,
    InProgress,
    Active,
  }

  input TaskInput {
    ${TaskFields}
    status: StatusTypes!
  }

  input TaskUpdateInput {
    _id: ID!
    ${TaskFields}
    status: StatusTypes!
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
