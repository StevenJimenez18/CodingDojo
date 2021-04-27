from flask import Flask
from flask.templating import render_template
app = Flask(__name__)


@app.route('/play')
def index():
    return render_template('index.html', phrase="Hello World!", box="",times=3,level1or2= "True")

@app.route('/play/<amount>')
def amount(amount):
    return render_template('index.html', phrase="Hello World!", box="", times=int(amount),level1or2 ="True")

@app.route('/play/<amount>/<color>')
def color(amount,color):
    return render_template('index.html', phrase="Hello World!", box="", times=int(amount), textcolor=color, level3="True")

if __name__=="__main__":
    app.run(debug=True) 