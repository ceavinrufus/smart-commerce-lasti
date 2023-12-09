from fastapi import FastAPI, HTTPException
import json
from pydantic import BaseModel
import datetime

class Transaction(BaseModel):
    id: int
    type: str
    transaction_from: str
    description: str
    amount: int
    date: datetime.date

json_filename="transactions.json"

with open(json_filename,"r") as read_file:
	data = json.load(read_file)

app = FastAPI()

@app.get("/")
async def root():
    return {"Hello": "World"}

@app.get('/recap')
async def financial_recap():
	
    total_incoming = 0
    total_outgoing = 0

    for i in data["transactions"]:
        if i["type"] == "incoming":
             total_incoming += i["amount"]
        else:
             total_outgoing += i["amount"]

    return {"total_incoming" : total_incoming, "total_outgoing" : total_outgoing, "transactions" : data["transactions"]}