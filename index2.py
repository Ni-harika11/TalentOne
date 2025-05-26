from pymongo import MongoClient
def recordinsert():
    try:
        client=MongoClient("mongodb://localhost:27017/")

        db=client["newniharika"]
        print("connected to mongodb successfully!")
        collection=db["employees"]
        data={
            "empno":1,
            "empname":"Niharika",
            "empsal":15000
        }
        collection.insert_one(data)
        print("Database and collection created with one recored")
    except Exception as e:
        print("Failed to connect:",e)
recordinsert() 