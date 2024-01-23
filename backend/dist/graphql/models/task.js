import { isValidObjectId } from 'mongoose';
class Task {
    constructor(model) {
        this.Model = model;
    }
    async create(data) {
        try {
            const res = await this.Model.create(data);
            if (!res) {
                throw new Error('Task not created');
            }
            return res;
        }
        catch (error) {
            console.error(error);
            throw new Error(`Error ${error}`);
        }
    }
    async findAndUpdate(_id, data) {
        if (!isValidObjectId(_id)) {
            throw new Error('Task not found');
        }
        const task = await this.Model.findById(_id);
        if (!task) {
            throw new Error('Task not found');
        }
        try {
            const res = await this.Model.findOneAndUpdate({ _id }, { ...data }, { new: true });
            if (!res) {
                throw new Error('Task not updated');
            }
            return res;
        }
        catch (error) {
            console.error(error);
            throw new Error(`Error ${error}`);
        }
    }
    async delete(_id) {
        if (!isValidObjectId(_id)) {
            throw new Error('Task not found');
        }
        const task = await this.Model.findById(_id);
        if (!task) {
            throw new Error('Task not found');
        }
        try {
            const res = await this.Model.findByIdAndDelete(_id);
            console.log('delete', res);
            if (!res) {
                throw new Error('Task not deleted');
            }
            return res;
        }
        catch (error) {
            console.error(error);
            throw new Error(`Error ${error}`);
        }
    }
    async getAll() {
        try {
            const res = await this.Model.find({});
            if (!res) {
                throw new Error('Tasks not found');
            }
            return res;
        }
        catch (error) {
            console.error(error);
            throw new Error(`Error ${error}`);
        }
    }
    async getByStatus(status) {
        try {
            const res = await this.Model.find({ status: status });
            if (!res) {
                throw new Error('Tasks not found');
            }
            return res;
        }
        catch (error) {
            console.error(error);
            throw new Error(`Error ${error}`);
        }
    }
    async getById(_id) {
        try {
            const res = await this.Model.findById(_id);
            if (!res) {
                throw new Error('Tasks not found');
            }
            return res;
        }
        catch (error) {
            console.error(error);
            throw new Error(`Error ${error}`);
        }
    }
}
export { Task };
