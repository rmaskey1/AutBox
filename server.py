from pymongo.mongo_client import MongoClient
from flask import Flask, jsonify, request, abort, make_response
from flask_cors import CORS

uri = "mongodb+srv://rmaskey:redpaper57@cluster0.n17qqwq.mongodb.net/?retryWrites=true&w=majority"
# Create a new client and connect to the server
client = MongoClient(uri)
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

app = Flask(__name__)
CORS(app)

if __name__ == "__main__":
    app.run(host='192.168.0.39', port='5000',debug=True)

@app.route('/account/create', methods=['POST'])
def create_user():
    user_data = request.get_json()
    # {
    #   password: "password"
    #   email: "john@gmail.com"
    #       INSURANCE ID COMES LATER
    #   pharmacy: "pharm address" -- optional field
    #   medProvider: "PAMF" -- optional field
    #   doctor: "Mike" -- optional field
    #   address: "123 First St., San Jose, CA 95113" -- optional field
    #   phoneNumber: "4088888888"
    # }
    users_collection = client["AutBox"]["users"]
    if users_collection.find({"email": user_data["email"]}):
        print("Account exists")
        abort(make_response(jsonify(message="Email already in use."), 409))
    else:
        users_collection.insert_one(
            {
                "email": user_data['email'],
                "password": user_data['password'],
                "medProvider": user_data['medProvider'],
                "doctor": user_data['doctor'],
                "address": user_data['address'],
                "phoneNumber": user_data['phoneNumber'],
                "pharmacy": user_data['pharmacy']
            }
        )
        return jsonify({"email": user_data['email']})

if __name__ == '__main__':
    app.debug = True
    app.run()