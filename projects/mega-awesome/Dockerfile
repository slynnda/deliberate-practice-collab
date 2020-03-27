FROM centos:8

# URL of the project - https://github.com/nvm-sh/nvm
RUN echo "Installing NVM"
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
RUN test -f $(command -v nvm) || exit 1
RUN nvm install \
            --lts \
            --latest-npm \
            -s \
            v12.16.1