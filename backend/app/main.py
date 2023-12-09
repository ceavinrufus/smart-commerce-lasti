from fastapi import FastAPI, HTTPException
import json
import uvicorn
from models.transaction import Transaction
from fastapi.middleware.cors import CORSMiddleware

json_filename="data/transaction.json"

with open(json_filename,"r") as read_file:
	data = json.load(read_file)

app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True, 
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"Hello": "World"}

@app.get('/recap')
async def financial_recap():
	
    total_incoming = 0
    total_outgoing = 0

    for i in data["transaction"]:
        if i["type"] == "incoming":
             total_incoming += i["amount"]
        else:
             total_outgoing += i["amount"]

    return {"total_incoming" : total_incoming, "total_outgoing" : total_outgoing, "transactions" : data["transaction"]}

@app.post('/transaction')
async def add_transaction(transaction: Transaction):

    if transaction.type != "incoming" and transaction.type != "outgoing":
         raise HTTPException(status_code=400,detail="Invalid transaction type")

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

if __name__ == '__main__':
    uvicorn.run('main:app', host='0.0.0.0', port=80)