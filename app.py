from flask import Flask, render_template, redirect, abort, url_for
import config

app = Flask(__name__, static_folder='static')
app.config.from_object(config)

@app.route('/')
def home():
	homepage = True
	return render_template("index.html", homepage=homepage)

@app.route('/difference/')
def difference():
	return render_template("difference.html")

@app.route('/our_people/')
def our_people():
	return render_template("people.html")

@app.route('/careers/')
def careers():
	return render_template("careers.html")

@app.route('/contact/')
def contact():
	return render_template("contact.html")

if __name__ == '__main__':
    app.run('0.0.0.0', port=1313,  debug=True)