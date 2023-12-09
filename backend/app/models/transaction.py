from pydantic import BaseModel
import datetime

class Transaction(BaseModel):
    type: str
    transaction_from: str
    description: str
    amount: int
    date: datetime.date
