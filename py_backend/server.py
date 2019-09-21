import time
import wiki
from flask import Flask, jsonify, make_response, request

app = Flask(__name__)


@app.route('/table', methods=['POST'])
def table():
    data = request.json
    if 'auth_key' in data.keys() and data['auth_key'] in ['ratin', 'naman', 'anshika']:
        print("not-gay")
        query = data['query']
        return jsonify({
                "meta": {
                    "status": "Response Succesful",
                    "time": time.time()
                },
                "response" : {
                    "data": str(wiki.wiki_get_table(query)),
                }
            })

    else:
        print("gay")
        return jsonify({
                "meta": {
                    "status": "Not Authorized",
                    "time": time.time()
                },
                "response" : {
                    "data": "None",
                }
            })

@app.route('/test', methods=['POST'])
def test():
    data = request.json
    return data


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)


'''
Sample POST Request
{"auth_key": "ratin", "query": "HIV/AIDS"}

Sample Wrong POST Request
{"query": "HIV"}


'''