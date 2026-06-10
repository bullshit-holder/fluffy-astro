export const site = {
	name: 'Fluffy Goat Coffee',
	mainbackground:
		'https://images.unsplash.com/photo-1447933601403-0c6688de566e',
	logo: {
		src: '/img/logo.png',
		alt: 'Fluffy Goat Coffee',
	},

	navigation: [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/#about' },
		{ label: 'Products', href: '/products' },
		{ label: 'Contact', href: '/#contact' },
	],

	hero: {
		title: '',
		subtitle: '',
		image: '/img/hero.png',
	},

	about: {
		title: 'Welcome to Fluffy Goat Coffee',

		paragraphs: [
			'Born from a passion for fresh-roasted coffee and Southern hospitality, Fluffy Goat Coffee is a small-batch home roasting company proudly based in St. Tammany Parish, Louisiana. Inspired by the rich culture, community, and slower pace of the Northshore, we carefully roast each batch to highlight the unique flavors and character of every bean.',

			'From smooth and balanced morning blends to bold, adventurous roasts, our goal is simple — deliver fresh, handcrafted coffee that feels right at home in Louisiana.',

			'At Fluffy Goat Coffee, we believe great coffee starts with quality beans, attention to detail, and a love for the craft. Every roast is prepared in small batches for peak freshness and full flavor, bringing a personal touch to every cup.',

			'Proudly roasted in St. Tammany Parish, Fluffy Goat Coffee blends specialty coffee with local spirit — one fresh cup at a time.',
		],
	},

	contact: {
		email: 'info@fluffygoatcoffee.com',
	},

	footer: {
		text: '© 2026 Fluffy Goat Coffee',
	},
} as const;
