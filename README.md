# Cadmus FeBo App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

- [core](https://github.com/vedph/cadmus-febo)
- [API](https://github.com/vedph/cadmus-febo-api)

## Docker

🐋 Quick Docker image build:

1. update version in `env.js` and `ng build --configuration production`.
2. `docker build . -t vedph2020/cadmus-febo-app:6.0.1 -t vedph2020/cadmus-febo-app:latest` (replace with the current version).

## History

### 6.0.1

- 2026-03-27:
  - updated Angular and packages.
  - added [branding](https://vedph.github.io/cadmus-doc/frontend/dev/app-setup.html#13-add-branding).

### 6.0.0

- 2026-03-27:
  - ⚠️ gone zoneless.
  - ⚠️ refactored profile, also removing geography and maplibre.
- 2026-03-22:
  - 🆕 added facet editor, updating app routes and admin menus accordingly.
  - updated Angular and packages.
- 2026-03-19:
  - removed `@myrmidon/cadmus-ui-pg`.
  - updated Angular and packages.
- 2026-03-18:
  - 🆕 migrated shell app to M3 themes and added dark theme support to components.
  - updated Angular and packages.
- 2026-03-04:
  - updated packages.
  - ⚠️ migrated to `OnPush`.

### 5.0.4

- 2026-02-23: updated packages.

### 5.0.3

- 2026-02-20: updated Angular and packages.
- 2026-02-17:
  - updated Angular and packages.
  - ⚠️ replaced Leaflet with MapLibre.
  - 🆕 added import facet and settings.
- 2026-01-25: updated Angular and packages.
- 2026-01-20: updated Angular and packages.
- 2025-11-24:
  - ⚠️ upgraded to Angular 21.
  - migrated to `pnpm`.

### 5.0.2

- 2025-11-02: updated Angular and packages.

### 5.0.1

- 2025-10-08:
  - updated packages.
  - added lookup definitions.
- 2025-10-06: updated Angular and packages.
- 2025-09-25:
  - updated packages.
  - removed `diff-match-patch`.
- 2025-09-24: updated packages.
- 2025-09-23:
  - updated Angular and packages.
  - ⚠️ updated libraries after their full-reactivity refactoring.
  - updated guards and routes.
  - removed JSONP and legacy animations provider in configuration.
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
