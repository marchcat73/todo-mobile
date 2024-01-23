import { GraphQLError } from 'graphql';
export const tasksQueris = {
    tasks: async (_root, _args, ctx, _info) => {
        try {
            return await ctx.models.Task.getAll();
        }
        catch (error) {
            throw new GraphQLError(`GraphQLError ${error}`);
        }
    },
    tasksFilter: async (_root, { status }, ctx, _info) => {
        try {
            return await ctx.models.Task.getByStatus(status);
        }
        catch (error) {
            throw new GraphQLError(`GraphQLError ${error}`);
        }
    },
    taskById: async (_root, { _id }, ctx, _info) => {
        try {
            return await ctx.models.Task.getById(_id);
        }
        catch (error) {
            throw new GraphQLError(`GraphQLError ${error}`);
        }
    },
};
export const tasksMutations = {
    createTask: async (_root, { name, taskDate, status }, ctx, _info) => {
        try {
            const createdTask = await ctx.models.Task.create({
                name,
                taskDate,
                status,
            });
            if (!createdTask) {
                throw new GraphQLError(`GraphQLError not server response`);
            }
            else {
                return createdTask;
            }
        }
        catch (error) {
            throw new GraphQLError(`GraphQLError ${error}`);
        }
    },
    updateTask: async (_root, { _id, name, taskDate, status }, ctx, _info) => {
        try {
            const updatedTask = await ctx.models.Task.findAndUpdate(_id, {
                name,
                taskDate,
                status,
            });
            if (!updatedTask) {
                throw new GraphQLError(`GraphQLError not server response`);
            }
            else {
                return updatedTask;
            }
        }
        catch (error) {
            throw new GraphQLError(`GraphQLError ${error}`);
        }
    },
    deleteTask: async (_root, { _id }, ctx, _info) => {
        try {
            const deletedTask = await ctx.models.Task.delete(_id);
            if (!deletedTask) {
                throw new GraphQLError(`GraphQLError not server response`);
            }
            else {
                return true;
            }
        }
        catch (error) {
            throw new GraphQLError(`GraphQLError ${error}`);
        }
    },
};
