#Overview:

RiboVision 2.0 is a website for the display of ribosomal RNA structures in 3 dimensions. The website was originally forked from another website to display ribosomal protein structures, so there is a lot of residual code that no longer makes sense. Additionally, the requirements for the site are outdated/inaccurate and it is difficult to get working from scratch.

###Solution:

I will remove code that is currently unused and clean up our repository. I will change references to proteins to reflect the fact that we’re now dealing with nucleic acids. I’ll revise our requirements.txt and package.json files so that all dependencies are installed properly. I’ll also attempt to reformat and comment some parts of the codebase to make it clearer (RNA viewer repository, maybe some other files). I will create either internal unit tests or UI tests for the codebase. I will get a MySQL dump of our database so it is publicly accessible <- didn’t get to this. 

###Background:

Hopefully this project will make our code more usable and easier to install, since our current repository is a confusing mess. I would like to eventually publish this code, so it needs to be in a better state when that happens. I also hope to find bugs more easily by better understanding the codebase.

###Goals, non-goals, future goals:

The goals are to complete the tasks outlined in solution. I don’t want to spend too much time reorganizing existing, necessary code since there’s so much of it. I also don’t expect to fully redesign our repo, just to make it cleaner. I don’t plan to dockerize the installation for now. This project focuses on DESIRE mode of the website, not user-upload mode which is incomplete.

###Design:

Website should maintain current functionality and installation steps should be accurate for windows or linux-based computers. The APIs we use are all free and I shouldn’t be changing their functionality significantly for this project. I will try to rectify any existing security vulnerabilities such as os.system or SQL injections. Tests should cover the core functions of DESIRE mode - the appearance of all 3 RNA viewer applets when Django is running.

###Third-party dependencies:

There are many python and JavaScript libraries required for this project which will be included in the installation guide.

###Work estimates: 

15-25 hours. ~5 for finding and removing unused code, 5 for reformatting/commenting/replacing old references, 5 for testing + fixing documentation, extra time for problems that come up along the way and pushing code changes to the public server.

###Alternative approaches:

Other solutions I could implement include dockerizing the entire install and/or making the website runnable on AWS or another cloud platform.

###Related work:

This project is very similar to the ProteoVision webserver it is based on, and it largely builds on elements from RNA visualization tools provided by PDBe. 




