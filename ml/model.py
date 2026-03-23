import pandas as pd
from sklearn.linear_model import LogisticRegression

data = pd.read_csv("data.csv")

X = data[['feature1']]
y = data['target']

model = LogisticRegression()
model.fit(X, y)

print("Prediction:", model.predict([[1]]))