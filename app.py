from flask import Flask, render_template, request, jsonify, session
from flask_sessions import Session
from flask_socketio import SocketIO, emit
import json
from datetime import timedelta

app = Flask(__name__)
socket = SocketIO(app)
sess = Session()
sess.init_app(app)
app.secret_key = 'bkhHUo0*&%vulwdb&bhbI&658xYIbibwLUIbk'
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(minutes=5)


##### SQL DB FUNCTIONS START ########

def getPosts():
    with open('static/data/data.json', 'r') as dataFile:
        return json.load(dataFile)


def editPost(postID, editDict):
    data = getPosts()
    data[postID] = editDict
    with open('static/data/data.json', 'w') as dataFile:
        json.dump(data, dataFile)


##### SQL DB FUNCTIONS START ########

@app.route('/')
def index():
    return render_template('index.html', data=getPosts())


@app.route('/manage')
def manage():
    session.permanent = True
    return render_template('manage.html', data=getPosts())


@socket.on('init')
def handle_my_custom_event(json):
    print('received json: ' + str(json))


@socket.on('saved')
def save_evt(data):
    try:
        if session['user'] == 'adisha':
            editPost(data[0], data[1])
            print('saved')
    except KeyError:
        print('No User In Session')


@socket.on('login')
def login(data):
    if data[0] == 'adisha' and data[1] == 'flatass':
        session['user'] = 'adisha'
        return emit('reply', 1)
    else:
        return emit('reply', 0)


if __name__ == '__main__':
    app.run(host='0.0.0.0')
