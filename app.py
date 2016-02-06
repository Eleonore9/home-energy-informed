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
    data = dr.read_gas_data(0)
    print data
    return render_template('dashboard.html')



if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
