const userCollection = require("../config/mongoDB-user").getCollection(
    "userCollection"
);
const { ObjectId } = require("mongodb");

exports.save = async (data) => {
    try {
        const col = await userCollection();
        const result = await col.insertOne(data);
        return result.ops && result.ops[0];
    } catch (error) {
        throw new Error("Error Adding user");
    }
};

exports.findAll = async () => {
    try {
        const col = await userCollection();
        return col.find({}).toArray();
    } catch (error) {
        throw new Error("Error Listing users");
    }
};

exports.update = async (id, post) => {
    try {
        const col = await userCollection();
        const result = await col.findOneAndUpdate(
            { _id: ObjectId(id) },
            { $set: post },
            { returnOriginal: false }
        );
        return result.value;
    } catch (error) {
        throw new Error("Error Updating user");
    }
};

exports.delete = async (id) => {
    try {
        const col = await userCollection();
        await col.deleteOne({ _id: ObjectId(id) });
    } catch (error) {
        throw new Error("Error Deleting user");
    }
};