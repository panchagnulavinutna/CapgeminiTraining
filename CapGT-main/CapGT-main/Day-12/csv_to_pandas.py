import pandas as pd
data = []
def main():
    while True:
        print("1. Add Customer")
        print("2. Display Customers")
        print("3. Exit")
        choice = int(input("Enter your choice: "))
        if choice == 1:
            add_customer()
        elif choice == 2:
            display_customers()
        elif choice == 3:
            break
        else:
            print("Invalid Choice")
def add_customer():
    name = input("Enter the name: ")
    age = int(input("Enter the age: "))
    city = input("Enter the city: ")
    data.append([name, age, city])
def display_customers():
    df = pd.DataFrame(data, columns=['Name', 'Age', 'City'])
    print(df)
if __name__ == "__main__":
    main()
# Compare this snippet from CapGT-main/DataFrame/pandas_to_csv.py:
# import pandas as pd
# data = {
#     'Name': ['Alice', 'Bob','Charlie', 'David'],
#     'Age': [25, 30, 35, 40],
#     'City': ['New York', 'Los Angeles', 'Chicago', 'Houston']
# }
# df = pd.DataFrame(data)
# df.to_csv('data.csv', index=False)
# print("Data saved to data.csv")
