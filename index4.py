import threading,time,re
tname=threading.current_thread().name
print(tname)
c=24+22
time.sleep(5)
print(c)
# Print names of all active threads
print("Active thread names:")
for t in threading.enumerate():
    print("-", t.name)
# ////
email=r'^[\w\.-]+@[\w\.-]+\.\w{2,}$'
def is_valid_email(email):
    return re.match(r".+@.+\..+", email) is not None

# Example usage
email = input("Enter your email: ")

if is_valid_email(email):
    print("✅ Valid email")
else:
    print("❌ Invalid email")




