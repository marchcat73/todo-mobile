import { useQuery } from '@apollo/client';

import { GET_TASKS_LIST } from '../queries/tasks';

export const useGetTasksList = () => useQuery(GET_TASKS_LIST);
