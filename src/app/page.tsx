import { Main } from "@/components/main";
import { Metadata } from "next";

const publishUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
const imageUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og`;
const title = "ufoo68 Portfolio";

export const metadata: Metadata = {
	title: title,
	description: title,
	icons: "/favicon.ico",
	keywords: ["ufoo68", "Portfolio", "ポートフォリオ"],
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
	},
	twitter: {
		card: "summary_large_image",
		images: [imageUrl],
	},
	openGraph: {
		title: title,
		description: title,
		url: publishUrl,
		siteName: title,
		images: {
			url: imageUrl,
			width: 1200,
			height: 600,
		},
	},
};

export default function Page() {
	return <Main />;
}
