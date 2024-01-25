import { Model, isValidObjectId } from 'mongoose';
import {
  StatusTypes,
  TaskFields,
  TaskResponse,
  TaskCreateArgs,
  TaskUpdateArgs,
} from '@app/interfaces/index.js';

class Task {
  [x: string]: any;
  constructor(model: Model<any>) {
    this.Model = model;
  }

  async create(data: TaskCreateArgs): Promise<TaskResponse> {
    try {
      const res = await this.Model.create(data);

      if (!res) {
        throw new Error('Task not created');
      }
      return res;
    } catch (error) {
      console.error(error);
      throw new Error(`Error ${error}`);
    }
  }

  async findAndUpdate(
    _id: string,
    data: Omit<TaskUpdateArgs, 'id'>,
  ): Promise<TaskResponse> {
    if (!isValidObjectId(_id)) {
      throw new Error('Task not found');
    }
    const task = await this.Model.findById(_id);
    if (!task) {
      throw new Error('Task not found');
    }
    try {
      const res = await this.Model.findOneAndUpdate(
        { _id },
        { ...data },
        { new: true },
      );

      if (!res) {
        throw new Error('Task not updated');
      }

      return res;
    } catch (error) {
      console.error(error);
      throw new Error(`Error ${error}`);
    }
  }

  async delete(_id: string): Promise<any> {
    if (!isValidObjectId(_id)) {
      throw new Error('Task not found');
    }
    const task = await this.Model.findById(_id);
    if (!task) {
      throw new Error('Task not found');
    }
    try {
      const res = await this.Model.findByIdAndDelete(_id);
      // console.log('delete', res);
      if (!res) {
        throw new Error('Task not deleted');
      }
      return res;
    } catch (error) {
      console.error(error);
      throw new Error(`Error ${error}`);
    }
  }

  async getAll(): Promise<TaskResponse[]> {
    try {
      const res = await this.Model.find({});
      if (!res) {
        throw new Error('Tasks not found');
      }
      return res;
    } catch (error) {
      console.error(error);
      throw new Error(`Error ${error}`);
    }
  }

  async getByStatus(status: StatusTypes): Promise<TaskResponse[]> {
    try {
      const res = await this.Model.find({ status: status });
      if (!res) {
        throw new Error('Tasks not found');
      }
      return res;
    } catch (error) {
      console.error(error);
      throw new Error(`Error ${error}`);
    }
  }

  async getById(_id: string): Promise<TaskResponse> {
    try {
      const res = await this.Model.findById(_id);
      if (!res) {
        throw new Error('Tasks not found');
      }
      return res;
    } catch (error) {
      console.error(error);
      throw new Error(`Error ${error}`);
    }
  }
}

export { Task };
