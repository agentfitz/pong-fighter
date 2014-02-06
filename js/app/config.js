/* global define */

define({
	appName: 'PongFighter',
	appDir: '/js/app',
	libDir: '/js/lib',
	routes: {
		'/contacts' : 'contact/Contact',
		'/contact/:id' : 'contact/ContactDetail',
		'/challenge': 'challenge/Challenge'
	},
	defaultRedirect: '/contacts'
});