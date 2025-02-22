# Installation for local development

1. Initial set up and prerequisites:

	a. Linux distribution (Native Linux system or <a href="https://docs.microsoft.com/en-us/windows/wsl/install-win10#update-to-wsl-2">WSL</a>)

	After it has been set up make sure it is updated:

	>sudo apt-get update

	>sudo apt-get upgrade
	
	b. <a href=" https://code.visualstudio.com/docs/setup/setup-overview">Visual Studio Code</a> (VS Code)

	c. Follow the first two sections of <a href="https://code.visualstudio.com/docs/python/tutorial-django#_create-a-project-environment-for-the-django-tutorial">this guide</a> to install a virtual python environment for the Django project (at least python3.7).

	d. Install Mafft, python3-dev, cdhit, nodejs, and npm:

	>sudo apt-get install -y mafft
	
	>sudo apt-get install python3-dev

	>sudo apt install cd-hit

	>sudo apt-get install nodejs npm
	
	e. Instal git and get an account on github.com. Contact the current admin (anton.petrov@biology.gatech.edu) to receive access to the project repository,
	as well as user account and password for the MySQL database.

	f. In the Linux startup file (.bashrc or .bash_profile) add these lines:

	>export DJANGO_SECRET_KEY='' (random character string of length 50)
	
	>export DJANGO_USERNAME='' (MySQL username provided by admin)
	
	>export DJANGO_PASSWORD='' (MySQL password provided by admin)

	g. Set up the Georgia Tech GlobalProtect VPN. Follow <a href="https://vpn.gatech.edu/https/gatech.service-now.com/home/?id=kb_article_view&sysparm_article=KB0026837">these</a> instructions.

2. Clone the <a href="https://github.com/hmccann3/Ribovision_2.0_GT_SWES.git">project repository</a> in a new folder. Switch to the local branch for development.

3. Using the command line from the root directory of the project run the following commands:

	a. Activate the virtual environment

	>source .venv/bin/activate

	b. Install python requirements

	>pip install -r requirements.txt

	c. Install nodejs requirements (listed in package.json)

	>npm install

	d. Initial set up of nodejs scripts

	>./node_modules/.bin/webpack --config webpack.config.js

	f. (Optional) If developing/updating the nodejs scripts

	>npm run watch

	g. **(Optional) For admins**: if necessary also add the user to the django authentication side. From the project root execute:

	```bash
	python3 manage.py shell
	```
	```python
	import django.contrib.auth
	User = django.contrib.auth.get_user_model()
	user = User.objects.create_user('USERNAME', password='PASSWORD')
	user.is_superuser = False
	user.save()
	exit()
	```

4. Installing PDB RNA viewer for development

	a. cd into the pdbe-rna-viewer directory and execute the following (might need sudo)

	> npm install
	
	> npm link

	b. cd into the root of the project directory (one up from the previous location) and run:

	> npm link pdb-rna-viewer

	c. Go back to the **pdbe-rna directory** and update babel

	> npm update --depth 5 @babel/compat-data
	
	d. After editing the typescript of the Topology viewer run the following command **from the pdbe-rna directory!**

	> npm run build

5. Installing react MSA viewer for development

	a. cd into the react-msa-viewer directory and execute the following (might need sudo and **do not** use VS code terminal)

	> npm install
	
	> npm link

	b. cd into the root of the project directory (one up from the previous location) and run:

	> npm link react-msa-viewer

	c. While editing files in the src folder the following command should be running **from the msa-viewer directory!**

	> npm run watch

	d. **npm run watch** can also be running from the project root directory to update the top level main bundle.

6. Open a VS Code folder in the root directory of the project.

7. Enter these commands in terminal to start local server:

	>source .venv/bin/activate

	>python3 manage.py runserver --noreload 
	
8. Follow steps 1-3 from this <a href="https://cloudbytes.dev/snippets/run-selenium-and-chrome-on-wsl2#step-2-install-latest-chrome-for-linux">this guide</a> to install chromedriver for Selenium testing 
	> Update the path to chromedriver in seleniumtest.py to reflect your path
	
	> python3 seleniumtest.py to run tests
# Serving a public branch

Public set-up does not differ significantly from local installations. There are several things to keep in mind when setting-up the RiboVision 2 web-server on a Linux machine. The web-server should have its own home folder within the Linux server (in our first implementation this was located in /home/RiboVision3). The steps are following the numbering from INSTALLATION up above:

1. Initial set up and prerequisites:

	a. There is no need to install WSL, since you are likely serving through a Linux machine.

	b. VS Code makes work extremely easy by allowing developers to connect directly to the Linux server from their personal/local machines. Apollo1 does not support VS Code. Apollo2 already has VS Code installed, follow [these instructions](https://code.visualstudio.com/docs/remote/ssh) to set up VS Code on other hosts and to connect from your local machine to a remote host.

	c. Virtual Python installation is the same.

	d. System-wide prerequisites are the same and necessary to be installed (e.g. mafft, cd-hit, python-dev, nodejs, and npm).

	e. git is crucial for bringing the public branch up to speed. git should already be installed on the server.

	f. For security reasons this step is different. The web-server has its own user name, password and hidden key, stored in a write protected file on the server.

	g. No need for VPN. The server is already located at GaTech and you can only reach it through VPN anyway.

2. Same, except you'd want to clone the public branch.

3. All steps are the same, except:

	e. Execute the commands from the home directory of the server.
	
4. Steps are not necessary since all development of PDB rna viewer and MSA viewer should be done locally and after compiling, the .js files should be synced with git. 

5. Same as previous.

6. This is specific for local development and not necessary.

7. Same as previous.

8. **In several places the python code uses paths to machine folders. These places can be relative paths when using local development environments, but need to be explicitly defined when running an Apache server. These lines will be different between dev and public branches. File locations and lines:**

	- DESIRE/settings.py :31
	- DESIRE/wsgi.py :13
	- alignments/views.py :80; :613
	- alignments/mapStrucSeqToAln.py :63
	- alignments/handleStructureRequests.py :146
	- alignments/handleCustomAln.py :75

	Keep in mind these line numbers might change as the code gets updated. 
	
	There should be no problem when merging dev branches onto public (see next step) if there were no changes near these lines. 
	
	Regardless, always be vigilant for hardcoded paths to folders when merging onto public branches since this can break the execution of critical scripts.

9. Bringing the public branch up to speed after modifying the dev branch.

	>git fetch

	Merge the origin/local branch onto public (you should be on public)

	>git merge origin/local

	Rebuild Node.js scripts
	
	> npm run build

	Activate virtual environment
	
	> source ./env/bin/activate

	Collect any new or changed static files

	> python3 manage.py collectstatic

	Touch this so that Apache knows things have changed
	
	> touch /home/RiboVision3/Ribovision_2.0_GT/DESIRE/wsgi.py

	After this command the public online web-server will be updated.

	If everything works fine push your changes to the origin/master:

	> git push origin master
