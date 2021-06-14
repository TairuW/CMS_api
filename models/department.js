const departmentCollection = require("../config/mongoDB-department").getCollection(
    "departmentCollection"
);
const { ObjectId } = require("mongodb");

exports.save = async (data) => {
    try {
        const col = await departmentCollection();
        const result = await col.insertOne(data);
        return result.ops && result.ops[0];
    } catch (error) {
        throw new Error("Error Adding department");
    }
};

exports.findAll = async () => {
    try {
        const col = await departmentCollection();
        return col.find({}).toArray();
    } catch (error) {
        throw new Error("Error Listing departments");
    }
};

exports.updateStatus = async (data) => {
    try {
        const col = await departmentCollection();
        const result = await col.findOneAndUpdate(
            { _id: ObjectId(data._id) },
            { $set: { status: data.status } },
            { new: true }
        );
    } catch (error) {
        throw new Error("Error Updating department");
    }
};

exports.findOne = async (data) => {
    try {
        const col = await departmentCollection();
        const result = await col.findOne(
            { _id: ObjectId(data._id) });
        return result;
    } catch (error) {
        throw new Error("Error finding department");
    }
}

exports.edit = async (id, update) => {
    try {
        const col = await departmentCollection();
        await col.updateOne(
            { _id: ObjectId(id) },
            { $set: update },
            { new: true }
        );
    } catch (error) {
        throw new Error("Error finding department");
    }
}

exports.delete = async (data) => {
    try {
        const col = await departmentCollection();
        return col.deleteOne({ _id: ObjectId(data.id) });
    } catch (error) {
        throw new Error("Error Deleting department");
    }
};