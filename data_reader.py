import csv
import json
from itertools import islice

def read_gas_data(index):
    with open('data/gas_by_build.csv', 'r') as f:
        reader = csv.reader(f)
        for row in islice(reader, index, index + 1):
            counts = [float(r) for r in row]
            return json.dumps(counts)
    
