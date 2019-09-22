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

@app.route('/wiki', methods=['POST'])
def table():
    '''
    Will return the data from side table from WikiPedia
    '''
    try:
        query = request.json['query']
        return jsonify(wiki.wiki_get_table(query))
        
    except Exception as e:
        return jsonify({
            "data" : e
        })

@app.route('/test', methods=['POST'])
def test():
    '''
    Sample API Endpoint to check the working of the model
    '''
    data = request.json
    return data

@app.route('/predict', methods=['POST'])
def get_prediction():
    '''
    Will return the analysed things after predicting from the query
    '''
    global MODEL_LOADED
    query = request.json['query']
    if MODEL_LOADED:
        prediction =  DOCTOR.predict(
            query,
            search_by="answer",
            topk=1,
            answer_only=True)


        return jsonify({
            # "data": ". ".join[(text.strip()[0].capitalize() + text.strip()[1:]) for text in prediction.split(".")]
            "data": prediction[0]
        })
    else:
        return jsonify({
            "data" : "Model Note Yet loaded, try again latter"
        })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

