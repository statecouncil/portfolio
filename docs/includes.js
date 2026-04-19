// Loads shared header and footer fragments into #site-header and #site-footer.
// Requires an HTTP server — fetch() will fail silently over file://.
// Quick options: VS Code Live Server extension, or `python -m http.server` in the docs/ folder.

function loadFragment(id, url) {
    fetch(url)
        .then(function(r) { return r.text(); })
        .then(function(html) {
            var el = document.getElementById(id);
            if (el) el.innerHTML = html;
        })
        .catch(function(err) {
            console.warn('Could not load fragment:', url, err);
        });
}

loadFragment('site-header', 'header.html');
loadFragment('site-footer', 'footer.html');
