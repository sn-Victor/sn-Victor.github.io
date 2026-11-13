// Every fact here comes from Victor's case studies, profile README, or the
// previous site's copy. No new claims.

export const person = {
	name: 'Victor Curran',
	role: 'Full-stack engineer',
	pitch:
		'I like owning a product end to end: working out what people need, designing it, shipping it, and keeping it running in production.',
	status: 'Open to software engineering internships and new roles',
	school: 'Computer Science at Appalachian State, graduating Dec 2027',
	email: 'curranvs@appstate.edu',
	github: 'https://github.com/sn-Victor',
	linkedin: 'https://linkedin.com/in/victor-curran',
};

export type CaseStudy = {
	id: string;
	name: string;
	kind: string;
	line: string;
	platforms: string[];
	stack: string[];
	facts: { value: string; label: string }[];
	decisions: string[];
	video: string;
	poster: string;
	repo: string;
	since: string;
};

export const caseStudies: CaseStudy[] = [
	{
		id: 'messenger',
		name: 'Team Messaging Platform',
		kind: 'Web, iOS and Android',
		line: 'A shared customer texting inbox for a 9-person retail team, built so a text never fails when the database link drops.',
		platforms: ['iOS', 'Android', 'Web'],
		stack: ['Next.js', 'React Native', 'Bun', 'tRPC', 'Twilio', 'SQL Server'],
		facts: [
			{ value: '9', label: 'staff in one shared inbox' },
			{ value: '3', label: 'clients, one set of types' },
		],
		decisions: [
			'A text never waits on the database: if the link drops, the message still sends and the history write is queued and replayed.',
			'“Needs reply” is computed, not stored, so it clears itself the moment someone answers.',
			'Rebuilt a barely working web app into web, iOS and Android without breaking anyone’s sign-in.',
		],
		video: '/media/messenger-demo.mp4',
		poster: '/media/messenger-poster.jpg',
		repo: 'https://github.com/sn-Victor/team-messaging-platform-case-study',
		since: 'In production',
	},
	{
		id: 'pipeline',
		name: 'Accounting Automation Pipeline',
		kind: 'Python engine and Mac app',
		line: 'Vendor bills from inbox to QuickBooks Online, unattended. Every bill is read twice and only posts when both reads agree to the cent.',
		platforms: ['Mac app', 'Python engine'],
		stack: ['Python', 'Claude API', 'QuickBooks API', 'SwiftUI', 'GitHub Actions'],
		facts: [
			{ value: '2', label: 'companies, every 5 minutes' },
			{ value: '50', label: 'versioned builds shipped' },
		],
		decisions: [
			'Two independent readers, Claude and a rule-based parser, must agree to the cent before anything posts.',
			'A strict file-name convention is the backbone every other part of the system reads.',
			'A native menu-bar app turns every terminal command into a plain button for the bookkeeper.',
		],
		video: '/media/pipeline-demo.mp4',
		poster: '/media/pipeline-poster.jpg',
		repo: 'https://github.com/sn-Victor/accounting-automation-case-study',
		since: 'In production',
	},
	{
		id: 'storefront',
		name: 'Headless Retail and Wholesale Storefront',
		kind: 'React on two Shopify stores',
		line: 'Two Shopify stores served from one React codebase, replacing a store theme that had grown past 33,000 lines of CSS.',
		platforms: ['Web'],
		stack: ['React', 'TypeScript', 'Shopify', 'AWS Amplify', 'Puppeteer'],
		facts: [
			{ value: '1.1 s', label: 'Largest Contentful Paint' },
			{ value: '98 ms', label: 'Interaction to Next Paint' },
		],
		decisions: [
			'Commercial buyers sign in and the whole site switches to the wholesale store.',
			'Key pages are prerendered at build time, so every crawler gets real HTML.',
			'Around 200 legacy URLs redirect, so no old link breaks.',
		],
		video: '/media/website-demo.mp4',
		poster: '/media/website-poster.jpg',
		repo: 'https://github.com/sn-Victor/headless-storefront-case-study',
		since: 'Live',
	},
];

export const experience = [
	{
		role: 'Full-Stack Software Engineer',
		org: 'Settlemyre Nursery',
		when: 'Aug 2025 – Present',
		points: [
			'Sole engineer on the storefront, the team messaging platform and the accounting pipeline: design, build, deployment and support.',
			'Integrated Shopify with the CounterPoint point of sale system, keeping inventory and pricing in sync.',
		],
	},
	{
		role: 'Co-Founder',
		org: 'Digital Labs 365',
		when: 'Nov 2024 – Present',
		points: [
			'Design and build websites for local businesses, with payments, booking and analytics.',
		],
	},
];

export const games = [
	{
		id: 'pressure-crew',
		name: 'Pressure Crew',
		kind: 'Roblox · co-op power washing',
		status: 'In closed testing',
		line: 'Crews of 1 to 4 take jobs, clean properties to 100%, and spend what they earn on gear, a crew van, and cosmetics.',
		image: '/media/pressure-crew.jpg',
		imageAlt: 'Pressure Crew screens: spraying a dirty car clean with a pressure washer, and the hub with job gates and a gear shop',
		facts: [
			{ value: '1–4', label: 'players per crew' },
			{ value: '122', label: 'automated tests passing' },
		],
		decisions: [
			'Written in Luau with Rojo, so the whole game lives in git and is linted and tested outside Roblox Studio.',
			'Crews queue together on Solo, Duo, Trio and Squad pads, and everyone on a job shares one clean percentage.',
			'Weekly updates built in: a featured job, a Weekly Mega Job, and a Crew Season pass.',
		],
		stack: ['Luau', 'Rojo', 'Wally', 'Lune', 'Roblox Open Cloud'],
	},
];

export const skills = [
	{ group: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'React Native (Expo)'] },
	{ group: 'Backend', items: ['Node.js', 'Bun', 'Python', 'tRPC', 'Hono', 'REST APIs'] },
	{ group: 'Data', items: ['PostgreSQL', 'SQL Server', 'SQLite', 'MySQL'] },
	{ group: 'Cloud and tools', items: ['AWS', 'Docker', 'GitHub Actions', 'Nginx', 'Linux'] },
];

export const education = [
	{ school: 'Appalachian State University', degree: 'B.S. Computer Science, Data Science Certificate', when: 'Jan 2025 – Dec 2027', place: 'Boone, NC' },
	{ school: 'Southern New Hampshire University', degree: 'B.S. Computer Science', when: 'Jan 2022 – Dec 2024', place: 'Remote' },
];
