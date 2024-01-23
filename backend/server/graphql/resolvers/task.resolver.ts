import { GraphQLError } from 'graphql';
import { StatusTypes, TaskFields, TaskResponse } from '@app/interfaces';

export const tasksQueris = {
  tasks: async (
    _root: undefined,
    _args,
    ctx,
    _info,
  ): Promise<TaskResponse[]> => {
    try {
      return await ctx.models.Task.getAll();
    } catch (error) {
      throw new GraphQLError(`GraphQLError ${error}`);
    }
  },

  tasksFilter: async (
    _root: undefined,
    { status }: { status: StatusTypes },
    ctx,
    _info,
  ): Promise<TaskResponse[]> => {
    try {
      return await ctx.models.Task.getByStatus(status);
    } catch (error) {
      throw new GraphQLError(`GraphQLError ${error}`);
    }
  },

  taskById: async (
    _root: undefined,
    { _id }: { _id: string },
    ctx,
    _info,
  ): Promise<TaskResponse> => {
    try {
      return await ctx.models.Task.getById(_id);
    } catch (error) {
      throw new GraphQLError(`GraphQLError ${error}`);
    }
  },
};

export const tasksMutations = {
  createTask: async (
    _root: undefined,
    { name, taskDate, status }: TaskFields,
    ctx,
    _info,
  ): Promise<TaskResponse> => {
    try {
      const createdTask = await ctx.models.Task.create({
        name,
        taskDate,
        status,
      });

      if (!createdTask) {
        throw new GraphQLError(`GraphQLError not server response`);
      } else {
        return createdTask;
      }
    } catch (error) {
      throw new GraphQLError(`GraphQLError ${error}`);
    }
  },

  updateTask: async (
    _root: undefined,
    { _id, name, taskDate, status }: TaskResponse,
    ctx,
    _info,
  ): Promise<TaskResponse> => {
    try {
      const updatedTask = await ctx.models.Task.findAndUpdate(_id, {
        name,
        taskDate,
        status,
      });

      if (!updatedTask) {
        throw new GraphQLError(`GraphQLError not server response`);
      } else {
        return updatedTask;
      }
    } catch (error) {
      throw new GraphQLError(`GraphQLError ${error}`);
    }
  },

  deleteTask: async (
    _root: undefined,
    { _id }: { _id: string },
    ctx,
    _info,
  ): Promise<boolean | any> => {
    try {
      const deletedTask = await ctx.models.Task.delete(_id);

      if (!deletedTask) {
        throw new GraphQLError(`GraphQLError not server response`);
      } else {
        return true;
      }
    } catch (error) {
      throw new GraphQLError(`GraphQLError ${error}`);
    }
  },
};