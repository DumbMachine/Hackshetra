#!/home/dumbmachine/anaconda3/envs/gpu/bin/python
import os
from docproduct.predictor import RetreiveQADoc

def get_prediction(query):
    '''
    Will return the analysed things after predicting from the query
    '''
    PRETRAINED_PATH = os.path.join(os.path.expanduser("~"), "data", "BioBert", "biobert_v1.0_pubmed_pmc")
    BERT_FFN_WEIGHT_FILE = os.path.join(os.path.expanduser("~"), "data", "newFolder", "models", "bertffn_crossentropy", "bertffn")
    EMBEDDING_FILE = os.path.join(os.path.expanduser("~"), "data", "Float16EmbeddingsExpanded5-27-19.pkl")

    DOCTOR = RetreiveQADoc(
        pretrained_path=PRETRAINED_PATH,
        ffn_weight_file=None,
        bert_ffn_weight_file=BERT_FFN_WEIGHT_FILE,
        embedding_file=EMBEDDING_FILE
    )


    return DOCTOR.predict(
        query,
        search_by="answer",
        topk=1,
        answer_only=True)
