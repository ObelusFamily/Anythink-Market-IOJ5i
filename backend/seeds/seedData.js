const mongoose = require('mongoose')
require("../models/User");
require("../models/Item");

const User = mongoose.model("User");
const Item = mongoose.model("Item");

mongoose.connect("mongodb://127.0.0.1", {
    useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Mongo connected!")
    }).catch((err) => {
        console.log(err)
    })


const seedUsers = [
    {
        _id: mongoose.Types.ObjectId("6204072559e36b4c2f5a0a5a"),
        role: 'user',
        favorites: [],
        following: [],
        username: 'coolnickname',
        email: 'esapir@gmail.com',
        salt: '3632065afe7775bd0081339bd263c01a',
        hash: 'f6d1a2978b60cc6fb369e17f8ec2374b37b1cecc35a4f5ab4284b0171c8561722f69966ecd4eb04f2e2fdb80c3f398a2c6648b0e922759d18f4415a2f0ad71c642705fcc12afa777601d6dd2accd22aeecea093b0cf96c4d28510cf20f02a18d23a8815cad5e190014e4e15e985a6f84f3c7a36a5cf98f71dd8e6d6f1355037c8baf9cce43a4e8f294f360f37e68219f6c0caa5486534b6df7d08dbd3d3ebaf821d1831ea6ce3625bb4ce95a389b84af3c730f80ae87e0fda8f27be13fac2c0ff18886af34a5fb83c676977a1802e1a25403fda39d6e7ee5af82eba7a9192c8c5117132465d88157e6d7d8015131a3fd0e31d064adb02ec39c582a09c318d371eceb99ca56fd6a174440d16e1af8225a55154e8bcd58a9d60793ced7fa770ff3547e67cf0d61e4233a7612d5fa41e096ea34f4e5b89dd9fbc44d73ed2e4f899fab2c2897b52d8357d48ead4af47b53dcd41cd35d90eab645e47e150d52adfcb9853d9c0cf2bdccdf67c656d54f34a5db9c0741d01ca905283a730e0d16258b39b9e89f1efb3d4d4fbe833c2fddd9080f5e0a1300ba06380ed7802638f0ac7851653dad3b6cde77a80fe2080002b89d6c0d23ee947b91936caa4e547f7102917c1b8bae3fd4cc6141ce024951749011e6577fddd3e4eb1522c82f39d7299ae4c2029addf665acfc59ea5ba58ab551b233979b77c4e9e182cded1a441dde3da3e4',
        createdAt: new Date("2022-02-09T18:25:41.771Z"),
        updatedAt: new Date("2022-02-09T18:25:41.771Z"),
        __v: 0
    }
]

const seedItems = [
    {
        _id: mongoose.Types.ObjectId("620504c3899fb2933dc73676"),
        slug: 'itemone',
        title: 'Item Title',
        description: 'Item description',
        image: '',
        favoritesCount: 0,
        comments: [],
        tagList: [],
        seller: mongoose.Types.ObjectId("6204072559e36b4c2f5a0a5a"),
        createdAt: new Date("2022-02-10T12:27:47.045Z"),
        updatedAt: new Date("2022-02-10T12:27:47.045Z"),
        __v: 0
    }
]

const seedDB = async () => {
    await Item.deleteMany({})
    await User.deleteMany({})

    await User.insertMany(seedUsers)
    await Item.insertMany(seedItems)
}

seedDB().then(() => {
    mongoose.connection.close();
});
