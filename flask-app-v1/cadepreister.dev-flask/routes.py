from flask import Flask, render_template, redirect
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

app = Flask(
    __name__,
    url_prefix='/v1',
    static_url_path='/v1/static',
    static_folder=os.path.join(BASE_DIR, 'static'),
    template_folder=os.path.join(BASE_DIR, 'templates')
)

options = {'Home': 'home', 'About': 'about', 'Projects': 'projects'}

@app.route('/')
def index():
    return render_template('home.html', options=options)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/projects')
def projects():
    projects_dict = {}
    with open('projects.txt', 'r') as file:
        for line in file:
            curr_project = line.strip('\n').split('@')
            projects_dict[curr_project[0]] = [curr_project[1], curr_project[2]]
    return render_template('projects.html', projects_dict=projects_dict)

@app.route('/github')
def github():
    return redirect('https://github.com/Cpreister109')

@app.errorhandler(404)
def not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(e):
    return render_template('500.html'), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

