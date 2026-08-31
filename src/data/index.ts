export const SITE_TITLE = "ibrahim aji";
export const SITE_DESCRIPTION =
	"ibrahim aji — civil servant by day, self-taught developer by night. building tools to make government data work better, and writing about it.";
export const SITE_URL = "https://blog.ibrahimaji.workers.dev";
export const SITE_IMAGE = "/images/ogimage.png";
export const TWITTER_HANDLE = "@ibrahimcious";
export const AUTHOR_NAME = "Ibrahim Aji";
export const AUTHOR_JOB_TITLE = "developer, civil servant";
export const AUTHOR_IMAGE = "/images/ibrahim.svg";
export const AUTHOR_EMAIL = "ibrahimcious@gmail.com";

/** stable schema.org @id for the person entity */
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export interface MenuItem {
	label: string;
	url: string;
}

export const menuItems: MenuItem[] = [
	{
		label: "ibrahim",
		url: "/",
	},
	{
		label: "writings",
		url: "/writings",
	},
	{
		label: "thoughts",
		url: "/thoughts",
	},
];

export const products = [
	{
		name: "SIVERINA",
		url: "https://siverina.pasuruankab.go.id",
		image: "/products/siverina.svg",
	},
];

export const socialLinks = [
	{
		label: "@x",
		url: "https://x.com/ibrahimcious",
		me: true,
	},
	{
		label: "email",
		url: `mailto:${AUTHOR_EMAIL}`,
		me: false,
	},
	{
		label: "github",
		url: "https://github.com/ibrahimcious",
		me: true,
	},
	{
		label: "instagram",
		url: "https://instagram.com/ibrahimcious",
		me: true,
	},
];

/** public profiles used in schema.org sameAs */
export const sameAs = socialLinks
	.filter((link) => link.me)
	.map((link) => link.url);
