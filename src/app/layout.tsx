import "ufoo-ui/style.css";
import "@/globals.css";
import { ServiceWorkerRegistration } from "@/components/service-worker-registration";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja">
			<body>
				{children}
				<ServiceWorkerRegistration />
			</body>
		</html>
	);
}
