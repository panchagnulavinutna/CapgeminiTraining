import pandas as pd
data = []
n = int(input("Enter the number of records: "))
for i in range(n):
    name = input("Enter the name: ")
    age = int(input("Enter the age: "))
    city = input("Enter the city: ")
    data.append([name, age, city])
df = pd.DataFrame(data, columns=['Name', 'Age', 'City'])
print(df)