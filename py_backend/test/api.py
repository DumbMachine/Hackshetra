from flask import Flask, jsonify, make_response, request

app = Flask(__name__)


@app.route('/score', methods=['POST'])
def score():
    features = request.json['username']
    return make_response(jsonify({'score': features}))

@app.route('/', methods=['GET'])
def something():
    return "gay amam"



if __name__ == '__main__':
    app.run()
    