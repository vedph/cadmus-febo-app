# Cadmus FeBo App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

- [core](https://github.com/vedph/cadmus-febo)
- [API](https://github.com/vedph/cadmus-febo-api)

## Docker

🐋 Quick Docker image build:

1. update version in `env.js` and `ng build --configuration production`.
2. `docker buildx build --platform linux/amd64,linux/arm64 -t vedph2020/cadmus-febo-app:6.0.8 -t vedph2020/cadmus-febo-app:latest --push .`
