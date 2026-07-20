export default function OfflinePage() {
	return (
		<main
			style={{
				display: "grid",
				minHeight: "100vh",
				placeItems: "center",
				padding: "2rem",
				textAlign: "center",
			}}
		>
			<div>
				<h1>オフラインです</h1>
				<p>インターネット接続を確認して、もう一度お試しください。</p>
			</div>
		</main>
	);
}
