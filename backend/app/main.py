from fastapi import FastAPI, HTTPException
import json
from pydantic import BaseModel
import datetime

class Transaction(BaseModel):
    type: str
    transaction_from: str
    description: str
    amount: int
    date: datetime.date

json_filename="../data/transaction.json"

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

@app.post('/add_transaction')
async def add_transaction(transaction: Transaction):
    new_id = len(data["transaction"]) + 1

    new_transaction = {
        "id": new_id,
        "amount": transaction.amount,
        "type": transaction.type,
        "from": transaction.transaction_from,
        "description": transaction.description,
        "date": str(transaction.date),
    }

    data["transaction"].append(new_transaction)

    with open(json_filename, "w") as write_file:
        json.dump(data, write_file, indent=2)

    return {"message": "Transaction added successfully", "transaction": new_transaction}