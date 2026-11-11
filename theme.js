// Light/dark toggle. Dark is the default; a choice made with the button is remembered.
(function () {
	var root = document.documentElement;
	function current() { return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark'; }
	function label(btn) {
		var dark = current() === 'dark';
		btn.textContent = dark ? '☀' : '☾';
		btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
		btn.title = btn.getAttribute('aria-label');
	}
	function init() {
		var btn = document.createElement('button');
		btn.type = 'button';
		btn.className = 'theme-toggle';
		label(btn);
		btn.addEventListener('click', function () {
			var next = current() === 'dark' ? 'light' : 'dark';
			root.setAttribute('data-theme', next);
			try { localStorage.setItem('theme', next); } catch (e) {}
			label(btn);
		});
		document.body.appendChild(btn);
	}
	if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
	else init();
})();
