from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, world"
    #return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    return "There be dragons"
    #return render_template('dashboard.html')


if __name__ == '__main__':
    app.run(debug=True)
