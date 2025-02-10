import pandas as pd

df_sales = pd.DataFrame({'State': ['Delhi', 'Tamil Nadu', 'Telagana'], 'Sales': [123364,14465763,2565756]})
df_profit = pd.DataFrame({'State': ['Delhi', 'Tamil Nadu', 'Telagana'], 'Profit': [4304954,205986,3295745]})
df_merged = pd.merge(df_sales, df_profit, on = 'State', how = 'inner')
print(df_merged)

