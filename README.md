# Cadmus FeBo App

Frontend app for Cadmus FeBo (_Federalism and Border Management in Greek Antiquity_).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

- [models](https://github.com/vedph/cadmus-febo)
- [API](https://github.com/vedph/cadmus-febo-api)

## Docker

🐋 Quick Docker image build:

1. `npm run build-lib`
2. update version in `env.js` and `ng build`
3. `docker build . -t vedph2020/cadmus-febo-app:0.0.1 -t vedph2020/cadmus-febo-app:latest` (replace with the current version).

## Notes

- ⚠️ until this is not fixed, if updating MapboxGL ensure to apply patch for this [MapboxGL issue](https://github.com/Wykks/ngx-mapbox-gl/issues/410).

Packages specific to this project with reference to the Cadmus templates:

```bash
npm i @myrmidon/cadmus-refs-decorated-counts @myrmidon/cadmus-part-geo-asserted-locations @myrmidon/cadmus-part-geo-asserted-toponyms @myrmidon/cadmus-part-epigraphy-support @myrmidon/cadmus-part-epigraphy-writing @myrmidon/cadmus-part-epigraphy-formula-patterns @myrmidon/cadmus-fr-epigraphy-ligatures @myrmidon/cadmus-part-geo-pg @myrmidon/cadmus-part-epigraphy-pg
```

- [ngx-mapbox-gl](https://github.com/Wykks/ngx-mapbox-gl)
