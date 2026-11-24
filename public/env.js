// https://www.jvandemo.com/how-to-use-environment-variables-to-configure-your-angular-application-without-a-rebuild/
(function (window) {
  window.__env = window.__env || {};

  // environment-dependent settings
  window.__env.apiUrl = "http://localhost:5105/api/";
  window.__env.version = "6.1.1";

  // enable thesaurus import in thesaurus list for admins
  window.__env.thesImportEnabled = true;
  // history
  window.__env.historyEnabled = true;

  // help
  window.__env.helpUrlTemplate = [
    "https://vedph.github.io/cadmus-help[-{language}]/parts/{typeId}{separator}{roleId}{separator}{frRoleId}.html",
  ];
  // set to false to skip checking page availability (e.g. when CORS is not allowed)
  window.__env.helpUrlCheck = true;

  // UI branding: staging, dev, production (default)
  window.__env.branding = "production";
})(this);
