import csv
import json
from itertools import islice
import urllib
import httplib
import base64
import requests

_db_host = "https://mjmottram.cloudant.com"
_db_name = "energy_bdx"
_key = "therstagaventorgarturste"
_secret = "2064f38879837867cc86e27c916ac762a1a604d3"


def view(view_name, **kwargs):
    query_opts = {}    
    for name, value in kwargs.items():
        value = json.dumps(value)
        query_opts[name] = value
    query_string = urllib.urlencode(query_opts, True)
    if len(query_opts):
        query_url = "%s/%s/%s?%s" % (_db_host, _db_name, view_name, query_string)
    else:
        query_url = "%s/%s/%s" % (_db_host, _db_name, view_name)
    return get_response(_db_host, query_url)


def get_response(host, url):
    headers = {}
    r =  requests.get(url, auth = requests.auth.HTTPBasicAuth(_key, _secret))
    if r.status_code == 200:
        return r.json()
    else:
        return {}


def year_to_index(year):
    if year < 1930:
        return 0
    elif year < 1950:
        return 1
    elif year < 1967:
        return 2
    elif year < 1983:
        return 3
    elif year < 1996:
        return 4
    return 5



def read_gas_data(index):
    with open('data/gas_by_build.csv', 'r') as f:
        reader = csv.reader(f)
        for row in islice(reader, index, index + 1):
            counts = [float(r) for r in row]
            return json.dumps(counts)
    

def read_elec_data(type_i, year_i, area_i):
    return view("_design/bdx/_view/elec_by_year", key=[type_i, year_i, area_i])
    
