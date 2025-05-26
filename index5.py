files=open("text.txt","w")
files.write("Woops! I have deleted the content!")
files.close()

files=open("text.txt","r")
print(files.read())