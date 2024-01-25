import { useQuery, useMutation } from '@apollo/client';

import {
  GET_TASKS_LIST,
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  GET_TASK_BY_ID,
} from '../queries/tasks';

export const useGetTasksList = () =>
  useQuery(GET_TASKS_LIST, {
    pollInterval: 500,
  });

export const useGetTaskById = (options) => useQuery(GET_TASK_BY_ID, options);

export const useCreateTask = () =>
  useMutation(CREATE_TASK, {
    // refetchQueries: [GET_TASKS_LIST],
  });

export const useDeleteTask = () =>
  useMutation(DELETE_TASK, {
    // refetchQueries: [GET_TASKS_LIST],
  });

export const useUpdateTask = () =>
  useMutation(UPDATE_TASK, {
    // refetchQueries: [GET_TASKS_LIST],
  });
