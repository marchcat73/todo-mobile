import { useGetTasksList } from '../apollo/actions';
import TasksOutput from '../components/TasksOutput/TasksOutput';

const AllTasks = () => {
  const { loading, error, data } = useGetTasksList();
  const tasks = (data && data.tasks) || [];
  return <TasksOutput loading={loading} error={error} tasks={tasks} />;
};

export default AllTasks;
