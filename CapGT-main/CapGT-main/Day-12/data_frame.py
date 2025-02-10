# DataFrames is a readable and writable table of data in pandas. It is record-set.
import pandas as pd
data = {
    'Name': ['Alice', 'Bob','Charlie', 'David'],
    'Age': [25, 30, 35, 40],
    'City': ['New York', 'Los Angeles', 'Chicago', 'Houston']
}

df = pd.read_csv('CapGT-main\\DataFrame\\data.csv') #reads the csv file
print(df)
df.to_csv('output.csv', index = False) #creates a csv file

df1 = df.to_json('output.json') #creates a json file
print(df1)

df3 = df.sort_values(by='Age', ascending=False) #sorts the values in descending order
print(df3)

df4 = df.groupby('City').count() #counts the number of values in the same city
print(df4)

df5 = df.groupby('Age').sum() #sums the values of the same age
print(df5)

df6 = df.to_html('output.html') #creates an html file
print(df6)

