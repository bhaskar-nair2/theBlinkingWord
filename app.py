from flask import Flask, url_for, render_template
import sqlite3 as sql
from flask_pymongo import PyMongo
from datetime import date

app = Flask(__name__)

##### MONGO DB FUNCTIONS START ########
app.config['MONGO_URI'] = "mongodb://localhost:27017/tbw"
mongo = PyMongo(app)


def newpost(ty, head, data):  # ty=type
    mongo.db.writings.insert_one(
        {"type": ty,
         "heading": head,
         "content": data,
         "date": date.today()
         }
    )


def rempost(data):
    mongo.db.writings.remove({"data": data})


##### MONGO DB FUNCTIONS START ########

# todo: add musings compositions poems

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/musings')
def musings():
    return render_template('musings.html')


@app.route('/compositions')
def compositions():
    return render_template('compositions.html')


@app.route('/rhymes')
def rhymes():
    return render_template('rhymes.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/mng')
def manage():
    return render_template('manage.html')


if __name__ == '__main__':
    app.run(debug=True)
