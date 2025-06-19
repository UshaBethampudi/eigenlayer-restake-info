# 🚀 EigenLayer Restaking Info API

This is a Node.js + MongoDB backend API that shows restaking info for EigenLayer using dummy data (since live data sources are unavailable).

---

## 📌 Features

- API to get restakers, validators, and rewards
- Uses Express and Mongoose
- Dummy data added through a script

---

## 🗂️ Project Structure

eigenlayer-restaking-api/
│
├── controllers/
├── models/
├── routes/
├── scripts/
│ └── fetchData.js <-- adds dummy data
├── index.js
├── db.js
├── .env
└── README.md


## ⚙️ How to Run

1. Clone the repo  
2. Install packages  
   ```bash
   npm install
Add .env file


PORT=5000
MONGO_URI=mongodb://localhost:27017/eigenlayerDB
Start MongoDB locally

Insert dummy data

node scripts/fetchData.js
Start server

npm run dev
🔗 API Endpoints
Method	Route	Description
GET	/restakers	List of restakers

🧪 Dummy Data Example
[
  {
    "userAddress": "0xabc...123",
    "amountRestakedStETH": "1000000000000000000",
    "targetAVSOperatorAddress": "0xdef...456"
  }
]
📍 Note
Real subgraph URLs were removed, so this project uses hardcoded dummy data to simulate real API responses.