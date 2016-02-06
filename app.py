import os
from flask import Flask, render_template

app = Flask(__name__)

app.config.update(
    DEBUG = True,
)

@app.route('/')
def index():
    return "Hello, world"
    #return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    return "There be dragons"
    #return render_template('dashboard.html')


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
