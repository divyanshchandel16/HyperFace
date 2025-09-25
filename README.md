# HyperFace Assignment 


# Routes
## Fetch All Entries 
Route = (GET) http://localhost:3000/transactions

This is a basic route to fetch all the entries that have been made till now. It will return an object of all entries
<img width="1758" height="768" alt="image" src="https://github.com/user-attachments/assets/e3081962-ec5d-4d98-9f6d-866a383dca85" />




## Add An Entry
Route = (POST) http://localhost:3000/transactions

This lets you add entries to the expense manager. It expects a JSON body like below and will return the entry that was just added.
```bash
{
        "amount": 550,
        "type": "debit",
        "category": "Travel",
        "description": "CHD to DEL"
} 
```
<img width="1757" height="760" alt="image" src="https://github.com/user-attachments/assets/4192ae95-61e1-4407-87d8-c5071213183d" />

## Delete An Entry
Route = (DELETE) http://localhost:3000/transactions/:id

This lets you delete the specified entry. It will return the entry that was just deleted. 
<img width="1755" height="539" alt="image" src="https://github.com/user-attachments/assets/6e16ab11-33b2-4521-a610-2a5da465424e" />


## Known Limitations
Given the time constraints there are no error checks in place. So it expects everything in a strict format and works in that case only. The project wont prompt you whenever the constraints are not met.
