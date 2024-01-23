import { useQuery } from '@apollo/client';
import { GET_TASKS_LIST } from '../apollo/queries/tasks';
import TasksOutput from '../components/TasksOutput/TasksOutput';

const AllTasks = () => {
  const { loading, error, data } = useQuery(GET_TASKS_LIST);
  const tasks = (data && data.tasks) || [];
  return <TasksOutput loading={loading} error={error} tasks={tasks} />;
};

export default AllTasks;
