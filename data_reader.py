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
    print query_url
    return get_response(_db_host, query_url)


def get_response(host, url):
    headers = {}
    r =  requests.get(url, auth = requests.auth.HTTPBasicAuth(_key, _secret))
    print url
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


def read_data(par, *args):
    # Query the database, just return row values along with a header
    data = view("_design/bdx/_view/%s_by_year" % par, key=[a for a in args])
    data = [[r['value']] for r in data['rows']]
    header = [[par]]
    data = header + data
    return json.dumps(data)
    
def read_elec_data(type_i, year_i, area_i):
    # Query the database, just return row values along with a header
    print "ELEC:"
    return read_data('elec', type_i, year_i, area_i)

def read_gas_data(type_i, year_i, area_i):
    # Query the database, just return row values along with a header
    print "GAS:"
    return read_data('gas', type_i, year_i, area_i)

    
if __name__ == "__main__":
    #    print read_gas_data(0)
    read_elec_data(101, 101, 4)


