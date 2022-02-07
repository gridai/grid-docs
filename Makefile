#+++++++++++++++++++++++++++++++++++++++++++++++#
#                                               #
#   MAKEFILE                                    #
#   --------                                    #
#                                               #
#   Contains commands for setting up a          #
#   development environment, linting,           #
#   running test, and packaging.                #
#                                               #
#   - develop:    creates a development         #
#                 environment using `venv`.     #
#                                               #
#   - test:       runs all tests with py.test   #
#                 and reports coverage.         #
#                                               #
#   - build:      builds docker images, CLI,    #
#                 and the web UI.               #
#                                               #
#   - clean:      cleans build directory.       #
#                                               #
#+++++++++++++++++++++++++++++++++++++++++++++++#
magenta="\\033[34m"
reset="\\033[0m"
green="\\033[32m"
yellow="\\033[33m"
cyan="\\033[36m"
white="\\033[37m"
# bucket_url="s3://test-apidocs-delete-when-finished.grid.ai/"
bucket_url=s3://apidocs.grid.ai/
all: develop

setup:
	if [ ! -d "grid" ]; then pip install lightning-grid --target ./sdk --no-deps && mv ./sdk/grid . && rm -r sdk; fi

develop: setup
	@printf "${white}\n[1/1] > ${magenta}Creating local development environment ...${reset} \n";
	if [ ! -d "node_modules" ]; then \
		yarn install; \
	fi;
	if [ ! -d "venv" ]; then \
			python3.8 -m venv venv && \
	    source venv/bin/activate; \
	    pip install pip --upgrade; \
	    pip install -r requirements.txt; \
	fi

	@printf "${white}\n> ${green}Python virtual env setup successfully.${reset}";
	@printf "${white}> Activate it with: ${reset}\n";
	@printf "${white}     source venv/bin/activate ${reset} \n";


build-docs: develop
	@printf "${white}\n> ${magenta}Starting documentation building ... ${reset} \n";
	python main.py;
	yarn build;
	@printf "${white}\n> ${green}Successfully built documentation.${reset} \n";

serve-docs: setup
	@printf "${white}\n> ${magenta}Starting live documentation serving ... ${reset} \n";
	python main.py;
	yarn start;

clean:
	@printf "${white} \n> ${magenta}Cleaning build directories ...${reset} \n";
	rm -rf build;
	rm -rf sdk/;
	rm -rf grid/;

upload-docs: build-docs
	aws s3 sync build/ ${bucket_url} --profile grid-ai --acl public-read

# http://test-apidocs-delete-when-finished.grid.ai.s3-website-us-east-1.amazonaws.com/cli/api/
