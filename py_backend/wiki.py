import os

import requests as r
from bs4 import BeautifulSoup as soup

def wiki_get_table(query):
    '''
    Returns the side table from the Wikipedia Page
    '''
    URL = "https://en.wikipedia.org/wiki/{query}".format(query=query.replace(" ", "%20"))
    SELECTOR = 'table.infobox:nth-child(5)'
    HEADERS = {'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36'}
    response = r.get(URL, headers=HEADERS)
    if response.status_code == 200:
        html = soup(response.text, 'lxml')
        table = html.select_one(SELECTOR)
        if table:
            return table
    return "Table Not Found"
