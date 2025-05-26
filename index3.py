from pymongo import MongoClient
def recordinsert():
    try:
        client=MongoClient("mongodb://localhost:27017/")

        db=client["newniharika"]
        print("connected to mongodb successfully!")
        collection=db["employees"]
        while True:
            empno=int(input("Enter employee number:"))
            empname=input("enter employees name:")
            empsal=float(input("enter employee salary:"))
            data={
                "empno":empno,
                "empname":empname,
                "empsal":empsal
            }
            collection.insert_one(data)
            print("Record for {} inserted successfully".format(empname))
            ch=input("Do you want to insert another record ?(yes/no):")
            if(ch.lower()=='no'):
                print("Thanks for using the program")
                break
    except Exception as e:
        print("Failed to connect:",e)
recordinsert()