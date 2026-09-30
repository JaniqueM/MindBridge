# MindBridge
MindBridge is a web application designed for people aged 13 and older. It provides a supportive space where users can check in with their wellbeing, reflect on how they are feeling, explore wellbeing resources, and find pathways toward human support.
MindBridge is an early-support wellbeing platform. It is not a replacement for professional healthcare, diagnosis, counselling, or treatment.

1. Problem Statement
People may experience emotional or wellbeing difficulties without knowing how to understand what they are experiencing or where to find appropriate support.
MindBridge provides an accessible starting point where users can:
* Reflect on their current wellbeing
* Explore helpful wellbeing information
* Learn about self-care and coping strategies
* Identify possible support options
* Find pathways toward appropriate human support

2. Main Features
# Wellbeing Check-In
Allows users to reflect on their current wellbeing through a simple check-in.

# Reflection
Provides opportunities for users to reflect on their feelings, experiences, and current needs.

# Wellbeing Resources
Provides information relating to areas such as:
* Stress
* Self-care
* Coping strategies
* Emotional wellbeing
* Healthy habits

# Support Pathways
Helps users identify possible next steps, including speaking to someone they trust or seeking professional support.

# Safety Information
Provides guidance toward appropriate support when a user may require additional or urgent help.

3. Technology
MindBridge is a static HTML, CSS and JavaScript web application.
The project uses:
* HTML
* CSS
* JavaScript
* Python 3
* Git
* GitHub

Python's built-in HTTP server is used to run the website locally.

4. Project Structure
MindBridge/
│
├── docs/
│   └── Project documentation
│
├── public/
│   └── Public assets
│
├── src/
│   ├── app.js
│   ├── content.js
│   ├── state.js
│   └── views.js
│
├── .gitignore
├── app.config.ts
├── ideas.md
├── index.html
├── routes.json
├── styles.css
└── README.md

#Important files
index.html
The main entry point of the website.

styles.css
Contains the website's layout, styling, colours, typography, and responsive design.

src/content.js
Contains content displayed throughout the application.

src/state.js
Manages application state and user interaction state.

src/views.js
Handles the creation and display of the application's different views.

src/app.js
Initialises the application and connects the different JavaScript components.

public
Contains publicly used website assets.

docs/
Contains supporting project documentation.

5. Installation Requirements
To run MindBridge locally, you need:

- Git
Git is required to download the project from GitHub.
Check whether Git is installed:
```powershell id="a0j8ma"
git --version
```

- Python 3
Python is used to run the local web server.
Check whether Python is installed:
```powershell id="z0d9qi"
python --version
```
A Python 3 version should be displayed.

- Web Browser
Use a modern browser such as:
* Google Chrome
* Microsoft Edge
* Mozilla Firefox

6. Running MindBridge Locally
Follow these steps from the beginning if you are setting up the project on a new computer.
Step 1 — Clone the GitHub Repository
Open **PowerShell** or another terminal.

Run:
git clone YOUR_GITHUB_REPOSITORY_URL

Replace `YOUR_GITHUB_REPOSITORY_URL` with the actual public GitHub repository URL.
This downloads a copy of the MindBridge project to your computer.

Step 2 — Enter the Project Folder
After cloning the repository, move into the project folder:
cd MindBridge
You should now be inside the MindBridge project directory.
You can check the project files using:
dir
You should see files and folders such as:
docs
public
src
index.html
styles.css
README.md

Step 3 — Start the Local Web Server
MindBridge is a static website, so no package installation is required.
Start Python's built-in web server:
python -m http.server 8000
If successful, the terminal will display a message similar to:
Serving HTTP on 0.0.0.0 port 8000
Keep this PowerShell window open while using the website.

Step 4 — Open the Website
Open a web browser.
Enter the following address:
http://localhost:8000
Press **Enter**.
The MindBridge website should now load.

Step 5 — Use the Website
Once the website opens, the user can navigate through the available MindBridge features, including:
* The wellbeing check-in
* Reflection features
* Wellbeing resources
* Support information
* Other available pages and interactions

Step 6 — Stop the Local Server
When you are finished, return to the PowerShell window running the server.
Press:
Ctrl + C
The local server will stop.

7. Alternative Way to Open the Website
Because MindBridge is a static website, the `index.html` file can also be opened directly.
From inside the project folder:
start index.html
However, the recommended method is:
python -m http.server 8000
http://localhost:8000
This runs the project through a local web server and more closely matches how a deployed website is served.

8. Live Website
The publicly deployed version of MindBridge is available at:
Live Website:
https://janiquem.github.io/MindBridge/
The website can be accessed directly through a web browser. Users do not need to install Git, Python, or any other software to access the deployed version.
For local development, the website can still be run using:
http://localhost:8000
The local address is only available on the computer running the local development server.

9. GitHub Repository
The source code is available through the public GitHub repository.
GitHub Repository:
`YOUR_GITHUB_REPOSITORY_URL`

10. Development Workflow
Git is used to manage changes to the project.

#Check the current changes
git status

#Add changes
git add .

#Commit changes
git commit -m "Describe the changes"

#Push changes to GitHub
git push

11. Testing
The prototype is tested against the requirements defined in the Software Requirements Specification (SRS).
Testing may include:
* Navigation testing
* Button and interaction testing
* Input validation
* Responsive design testing
* Browser compatibility
* Accessibility checks
* Error handling
* Safety-related behaviour

12. Project Documentation
Supporting documentation is available in the `docs/` folder.

#SRS
The Software Requirements Specification contains the requirements used to guide the design and development of MindBridge.

SRS:
https://docs.google.com/document/d/1iT6ZfXTfUkb8oX7r91i9AS2OTdx14_zdnQzZ0DxQ0Dk/edit?usp=sharing

# 13. Project Status
MindBridge is currently in the prototype/development stage.
The project demonstrates the software development process, including:
* Problem identification
* Requirements engineering
* System design
* Prototyping
* Implementation
* Testing
* Version control
* Deployment

14. Important Project Links

| Resource              | Link                         |
| --------------------- | ---------------------------- |
| **Live Website**      | https://janiquem.github.io/MindBridge/#/
| **GitHub Repository** | `YOUR_GITHUB_REPOSITORY_URL` 
| **SRS Document**      | https://docs.google.com/document/d/1iT6ZfXTfUkb8oX7r91i9AS2OTdx14_zdnQzZ0DxQ0Dk/edit?usp=sharing
| **Demo Video**        | https://youtu.be/kHyLzbSNz8Y?si=Bi4su9rTjbW9-fHI

# 15. Disclaimer

MindBridge is an educational early-support wellbeing project.

It does not provide:

* Medical diagnosis
* Medical treatment
* Professional counselling
* Emergency intervention

Users who require professional or emergency support should contact an appropriate qualified service.


#Quick Setup Summary
For someone who already has Git and Python installed:

git clone YOUR_GITHUB_REPOSITORY_URL
cd MindBridge
python -m http.server 8000

Then open:
http://localhost:8000
That's all that is required to run MindBridge locally.
