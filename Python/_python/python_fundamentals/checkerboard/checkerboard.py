from flask import Flask
from flask.templating import render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', route1or2 = 'True', times=8)


@app.route('/play/<amount>')
def amount(amount):
    return render_template('index.html', route1or2 = 'True', times=int(amount))

@app.route('/play/<x>/<y>')
def row_by_column(x,y):
    return render_template('index.html', route3 = 'True', row=int(x),column=int(y))



if __name__=="__main__":
    app.run(debug=True) 