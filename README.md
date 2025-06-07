# Cadmus FeBo App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

- [models](https://github.com/vedph/cadmus-febo)
- [API](https://github.com/vedph/cadmus-febo-api)

## Docker

🐋 Quick Docker image build:

1. update version in `env.js` and `ng build --configuration production`.
2. `docker build . -t vedph2020/cadmus-febo-app:5.0.0 -t vedph2020/cadmus-febo-app:latest` (replace with the current version).

## Notes

When using MapboxGL ensure to apply patch for this [MapboxGL issue](https://github.com/Wykks/ngx-mapbox-gl/issues/410). This is no more the case as we are using leaflet.

Packages specific to this project with reference to the Cadmus templates:

```bash
npm i @myrmidon/cadmus-refs-decorated-counts @myrmidon/cadmus-part-geo-asserted-locations @myrmidon/cadmus-part-geo-asserted-toponyms @myrmidon/cadmus-part-epigraphy-support @myrmidon/cadmus-part-epigraphy-writing @myrmidon/cadmus-part-epigraphy-formula-patterns @myrmidon/cadmus-fr-epigraphy-ligatures @myrmidon/cadmus-part-geo-pg @myrmidon/cadmus-part-epigraphy-pg
```

- [ngx-mapbox-gl](https://github.com/Wykks/ngx-mapbox-gl)

## History

- 2025-06-07: updated Angular and packages.
- 2025-06-03: ⚠️ upgraded to Angular 20.

### 5.0.0

- 2025-05-09:
  - ⚠️ updated epigraphy packages replacing legacy epigraphy writing part with epigraphy scripts part.
  - updated Angular and packages.
  - fancier loading message at startup.

### 4.0.2

- 2025-02-18: updated Angular and packages.

### 4.0.1

- 2025-01-28: ⚠️ updated dependencies now using signals.
- 2025-01-23: updated Angular and packages.

### 4.0.0

- 2025-01-19: updated Angular and packages.
- 2025-01-04: ⚠️ updated [Cadmus dependencies](https://github.com/vedph/cadmus-shell-v3) to version 11 (standalone components).

### 3.0.0

- 2025-01-01:
  - ⚠️ upgraded to standalone packages for epigraphy and geography.
  - refactored app for modern Angular.
- 2024-12-23: ⚠️ upgraded to bricks V3.

### 2.0.2

- 2024-12-21: updated packages removing `EnvServiceProvider`.

### 2.0.1

- 2024-12-21: updated Angular.
- 2024-12-16: updated Angular.
- 2024-12-12: updated Angular.
- 2024-12-05: updated Angular and packages.

### 2.0.0

- 2024-12-03: ⚠️ upgraded to new core dependencies.
- 2024-11-30: updated packages.

### 1.0.1

- 2024-11-29: M3 theme.

### 1.0.0

- 2024-11-23: ⚠️ upgraded to Angular 19.
- 2024-10-03: updated Angular and packages.
- 2024-09-30: updated Angular and packages.

### 0.0.3

- 2024-07-19:
  - updated packages.
  - [refactored Gravatar](https://myrmex.github.io/overview/cadmus/dev/history/f-gravatar/).
- 2024-07-15: updated packages.
- 2024-07-08: updated Angular and packages.
- 2024-06-30:
  - updated Angular and packages.
  - added WHG lookup.
- 2024-06-24: updated packages and added new parts.
- 2024-06-19: updated Angular and packages.
- 2024-06-09:
  - updated Angular and packages.
  - applied [M3 theme](https://material.angular.io/guide/theming).
- 2024-05-24:
  - ⚠️ updated to Angular 18.
  - updated packages.
- 2024-05-02: added text editors plugins support.

### 0.0.2

- 2024-04-18: fixed missing events config in part editor keys.
- 2024-04-14: ⚠️ upgraded to [bricks V2](https://github.com/vedph/cadmus-bricks-shell-v2).
- 2024-04-11: updated Angular.

### 0.0.1

- initial release.
