from flask import Flask, render_template, request, jsonify
from flask_pymongo import PyMongo
from datetime import datetime

app = Flask(__name__)

##### MONGO DB FUNCTIONS START ########
app.config['MONGO_URI'] = "mongodb://localhost:27017/tbw"
mongo = PyMongo(app)


##### MONGO DB FUNCTIONS START ########

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/mng')
def manage():
    return render_template('manage.html')


if __name__ == '__main__':
    app.run(debug=True)
