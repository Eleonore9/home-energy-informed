import os
from flask import Flask, render_template
import data_reader as dr

app = Flask(__name__)

app.config.update(
    DEBUG = True,
)

@app.route('/')
def index():
    return render_template('homepage.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/dashboard/gas_data')
def data_readings():
    gas_readings = dr.read_gas_data(101, 101, 4)
    return gas_readings

@app.route('/dashboard/elec_data')
def elec_data():
    elec_readings = dr.read_elec_data(101, 101, 4)
    return elec_readings

@app.route('/embed')
def embed():
    return render_template('embed.html')

@app.route('/dashboard/gas_data/<int:type>/<int:age>/<int:area>')
def data_readings_filtered(type, age, area):
    gas_readings = dr.read_gas_data(type, age, area)
    return gas_readings

@app.route('/dashboard/elec_data/<int:type>/<int:age>/<int:area>')
def elec_data_filtered(type, age, area):
    elec_readings = dr.read_elec_data(type, age, area)
    return elec_readings

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
