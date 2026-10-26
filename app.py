from flask import Flask, render_template 

app=Flask(__name__)

@app.route("/")
def home():
    return render_template("/index.html")

@app.route("/about")
def about():
    return render_template("/about.html")

@app.route("/register_demo")
def register_demo():
    return render_template("/register_demo.html")

@app.route("/registration")
def registration():
    return render_template("/registration.html")

@app.route("/contact")
def contact():
    return render_template("/contactus.html")  

if __name__=="__main__":
    app.run(debug=True)
