import mysql.connector
def recordinsert():
    while True:
        try:
            con=mysql.connector.connect(host="127.0.0.1",   # or "localhost"
                                        user="root",     # your MySQL username
                                        passwd="Niharika@123",# your MySQL password
                                        database="newniharika", # the DB you created
                                        auth_plugin='mysql_native_password'  # Specify this here
                                        )
            cur=con.cursor()
            empno=int(input("Enter employe number:"))    
            empname=input("Enter employee name:")
            empsal=float(input("enter employee salary:"))
            # //define the querry
            iq="INSERT INTO employees VALUES (%d, '%s', %f)" % (empno, empname, empsal)
            cur.execute(iq)
            con.commit()
            print("{} record inserted succefully ".format(cur.rowcount))
            ch=input("Do you want to insert another record(yes/no):")
            if(ch.lower()=="no"):
                print("Thanks for using program")
                break
            # if con.is_connected():
            #     print("connected to MYSQL")
            #     print("python program coonections from mysql")
        # except mysql.connector.DatabaseError as e:
        #     print("priblem in mysql",e)////
        except ValueError:
            print("Dont enter alnum,strs and symbols for empln and emplsal")
recordinsert()

    









