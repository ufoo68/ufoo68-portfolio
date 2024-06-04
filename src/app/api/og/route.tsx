import { ImageResponse } from "next/og";

export async function GET() {
	return new ImageResponse(
		<div
			style={{
				fontSize: 128,
				width: "100%",
				height: "100%",
				textAlign: "center",
				alignItems: "center",
				justifyContent: "center",
				borderWidth: "30px",
			}}
			tw="flex bg-gray-900"
		>
			<div
				tw="bg-gray-100 flex justify-center"
				style={{ width: "95%", height: "95%" }}
			>
				<p tw="text-justify flex">ufoo68 Portfolio</p>
			</div>
		</div>,
		{
			width: 1200,
			height: 630,
		},
	);
}
