FROM centos:8

RUN yum -y update && yum -y upgrade

RUN yum install -y gcc-c++

RUN yum install -y make \
                   which \
                   python2

# URL of the project - https://github.com/nvm-sh/nvm
RUN echo "Installing NVM"
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
RUN test -f $(command -v nvm) && \
    echo "successfully installed nvm to $(command -v nvm)" || \
    exit 1

#RUN nvm install \
#            --lts \
#            --latest-npm \
#            -s \  <--- building from source takes longer than you want
#            v12.16.1

# validate node.js and npm installation
#RUN test -f $(command -v node) && \
#    test -f $(command -v npm) && \
#    echo "successfully installed nvm to $(command -v nvm)" || \
#    exit 1