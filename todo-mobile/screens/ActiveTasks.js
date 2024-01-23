import { useQuery } from '@apollo/client';
import { GET_FILTRED_TASKS_LIST } from '../apollo/queries/tasks';
import TasksOutput from '../components/TasksOutput/TasksOutput';

const ActiveTasks = () => {
  const { loading, error, data } = useQuery(GET_FILTRED_TASKS_LIST, {
    variables: { status: 'active' },
  });
  const tasks = (data && data.tasksFilter) || [];
  return <TasksOutput loading={loading} error={error} tasks={tasks} />;
};

export default ActiveTasks;
