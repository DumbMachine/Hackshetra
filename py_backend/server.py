import os
import time
import wiki

from docproduct.predictor import RetreiveQADoc
from flask import Flask, jsonify, make_response, request

app = Flask(__name__)



MODEL_LOADED = False
REPO_LOCATION = os.path.join("code", "Hackshetra", "py_backend")
PRETRAINED_PATH = os.path.join(os.path.expanduser("~"), REPO_LOCATION, "data", "BioBert", "biobert_v1.0_pubmed_pmc")
BERT_FFN_WEIGHT_FILE = os.path.join(os.path.expanduser("~"), REPO_LOCATION, "data", "newFolder", "models", "bertffn_crossentropy", "bertffn")
EMBEDDING_FILE = os.path.join(os.path.expanduser("~"), REPO_LOCATION, "data", "Float16EmbeddingsExpanded5-27-19.pkl")

DOCTOR = RetreiveQADoc(
    pretrained_path=PRETRAINED_PATH,
    ffn_weight_file=None,
    bert_ffn_weight_file=BERT_FFN_WEIGHT_FILE,
    embedding_file=EMBEDDING_FILE
)

MODEL_LOADED = True
print("\n\n MODEL LOADED YAY 😀")

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

@app.route('/predict', methods=['POST'])
def get_prediction(query):
    '''
    Will return the analysed things after predicting from the query
    '''
    global MODEL_LOADED
    if MODEL_LOADED:
        prediction =  DOCTOR.predict(
            query,
            search_by="answer",
            topk=1,
            answer_only=True)

        return jsonify({
            "meta": {
                "status": "Model Loaded",
                "time" : time.time()
            },
            "response" : {
                "data": prediction[0],
            }
        })
    else:
        return jsonify({
            "meta": {
                "status": "Model Not Loaded Yet",
                "time" : time.time()
            },
            "response" : {
                "data": "None",
            }
        })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)


'''
Sample POST Request
{"auth_key": "ratin", "query": "HIV/AIDS"}

Sample Wrong POST Request
{"query": "HIV"}


'''
