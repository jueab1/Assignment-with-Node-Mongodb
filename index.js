
// CREATE&Read

const MongoClient= require("mongodb").MongoClient

URL= "mongodb+srv://jony:D67lp89uPRKGZfbB@cluster0.btqeo8y.mongodb.net/?retryWrites=true&w=majority"

MongoClient.connect(URL,function (error,MyMongoClient) {

    if (error){
        console.log("connection failed")
    }
    else {
        console.log("connection success")
        // InsertData (MyMongoClient)
        // NewDataUpdate(MyMongoClient)
        DeleteMyData(MyMongoClient)
    }
})


function InsertData (MyMongoClient) {

    const MyDataBase=MyMongoClient.db("country")
    const MyCollection=MyDataBase.collection("bangladesh")
    const MyData={Name:"Bangladesh",Distric:"Mymenshingh",Thana:"sadar",pos:"sadar"}

  MyCollection.insertOne(MyData, function (error, result) {
      console.log(result)

  })
    
}
// UPDATE
function NewDataUpdate(MyMongoClient) {
    const MyDataBase=MyMongoClient.db("country")
    const MyCollection=MyDataBase.collection("bangladesh")

    const Query={Thana: "sadar"}
    const NewValues={$set:{Name:"Dhaka",pos:"kotowali",Thana:"kotowali"}}

   MyCollection.updateOne(Query,NewValues,function (error, result) {

        console.log(result)
    })

}
// DELETE
function DeleteMyData(MyMongoClient) {

    const MyDataBase=MyMongoClient.db("country")
    const MyCollection=MyDataBase.collection("bangladesh")
    const DeleteData={pos:"sadar"}
    MyCollection.deleteOne(DeleteData,function (error, result) {
        console.log(result)

    })
}