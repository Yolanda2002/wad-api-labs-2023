import mongoose from 'mongoose';

const Schema = mongoose.Schema;
//构造函数

const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    deadline: Date,
    done: Boolean,
    priority: { type: String, enum: ["Low", "Medium", "High"], required: true },
    created_at: Date,
    updated_at: Date
});

//将架构实例与名为“Task”的数据库集合关联起来,并返回模型对象
export default mongoose.model('Task', TaskSchema);
const dateValidator = (date) => {
    return date > new Date();
}
TaskSchema.path("deadline").validate(dateValidator);