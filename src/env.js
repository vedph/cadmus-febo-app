// https://www.jvandemo.com/how-to-use-environment-variables-to-configure-your-angular-application-without-a-rebuild/
(function (window) {
  window.__env = window.__env || {};

  // environment-dependent settings
  window.__env.apiUrl = "http://localhost:5105/api/";
  window.__env.version = "2.0.1";
  // enable thesaurus import in thesaurus list for admins
  window.__env.thesImportEnabled = true;
})(this);
