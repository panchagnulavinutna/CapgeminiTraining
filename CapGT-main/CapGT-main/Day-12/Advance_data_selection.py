import pandas as pd
data = {
    'Name': ['Alice', 'Bob','Charlie', 'David'],
    'Age': [25, 30, 45, 40],
    'City': ['New York', 'Los Angeles', 'Chicago', 'Houston']
}
df = pd.DataFrame(data)

df.set_index(['Name', 'City'], inplace=True)
print(df)