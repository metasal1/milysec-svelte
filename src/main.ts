import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'stranger',
		email: 'we@milysec.com'
	}
});

export default app;