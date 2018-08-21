from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)


##### SQL DB FUNCTIONS START ########

def getPosts():
    with open('static/data/data.json', 'r') as dataFile:
        return json.load(dataFile)


##### SQL DB FUNCTIONS START ########

@app.route('/')
def index():
    return render_template('index.html', data=getPosts())


@app.route('/mng')
def manage():
    return render_template('manage.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
