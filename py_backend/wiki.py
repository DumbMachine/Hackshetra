import os

import requests as r
from bs4 import BeautifulSoup as soup
from docproduct.predictor import RetreiveQADoc

MODEL_LOADED = False

PRETRAINED_PATH = os.path.join(os.path.expanduser("~"), "data", "BioBert", "biobert_v1.0_pubmed_pmc")
BERT_FFN_WEIGHT_FILE = os.path.join(os.path.expanduser("~"), "data", "newFolder", "models", "bertffn_crossentropy", "bertffn")
EMBEDDING_FILE = os.path.join(os.path.expanduser("~"), "data", "Float16EmbeddingsExpanded5-27-19.pkl")

DOCTOR = RetreiveQADoc(
    pretrained_path=PRETRAINED_PATH,
    ffn_weight_file=None,
    bert_ffn_weight_file=BERT_FFN_WEIGHT_FILE,
    embedding_file=EMBEDDING_FILE
)


def wiki_get_table(query):
    '''
    Returns the side table from the Wikipedia Page
    '''
    URL = "https://en.wikipedia.org/wiki/{query}".format(query=query.replace(" ", "%20"))
    SELECTOR_TABLE = 'table.infobox:nth-child(5)'
    SELECTOR_ROW = ".infobox > tbody:nth-child(1) > tr:nth-child({child_number})"
    SELECTOR_TD = ".infobox > tbody:nth-child(1) > tr:nth-child({child_number}) > td:nth-child({one_or_two})"
    HEADERS = {'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36'}
    DATA = {}

    response = r.get(URL, headers=HEADERS)
    if response.status_code == 200:
        html = soup(response.text, 'lxml')
        # table = html.select_one(SELECTOR_TABLE)
        if html:
            fails = 0
            count = 1
            while fails < 4:
                # attribute = html.select_one(SELECTOR_ROW.format(child_number=count, one_or_two=1))
                # value = html.select_one(SELECTOR_ROW.format(child_number=count, one_or_two=1))
                row = html.select_one(SELECTOR_ROW.format(child_number=count))
                # if attribute and value:
                if row:
                    try:
                        # print(row)
                        text = soup(str(row), 'lxml').find("tr").get_text().split("[")[0]
                        print(text)
                        print("-----------------------------")
                    except:
                        print("gay: ", row)
                else:
                    fails+=1
                count+=1
            # return 0
    # return "Table Not Found"

'''
wiki_get_table("AIDS")
'''
