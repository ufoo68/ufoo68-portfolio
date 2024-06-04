/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/2pJrvALZwGJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { ContactForm } from "@/components/contact-form";
import { Menu } from "@/components/menu";
import { Card, CardContent } from "@/components/ui/card";
import { Product, micrecmsClient } from "@/components/utils";
import Link from "next/link";

export async function Main() {
	const {
		contents: products,
	}: {
		contents: Product[];
	} = (await micrecmsClient.get({ endpoint: "products" })) ?? { contents: [] };
	const workProducts = products.filter((product) => product.type[0] === "work");
	const personalProducts = products.filter(
		(product) => product.type[0] === "personal",
	);

	const { contents: skills } = (await micrecmsClient.get({
		endpoint: "skills",
	})) ?? { contents: [] };
	const languages = skills.filter((skill) => skill.type[0] === "language");
	const frameworks = skills.filter((skill) => skill.type[0] === "framework");
	const clouds = skills.filter((skill) => skill.type[0] === "cloud");
	const databases = skills.filter((skill) => skill.type[0] === "database");
	return (
		<div className="flex flex-col min-h-screen">
			<header className="bg-gray-900 text-white py-4 px-6 md:px-12 sticky top-0">
				<Menu />
			</header>
			<main className="flex-1">
				<section id="top" className="bg-gray-100 py-12 md:py-20">
					<div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center">
						<div>
							<h1 className="text-3xl md:text-4xl font-bold mb-4">
								ufoo68 Portfolio
							</h1>
							<p className="text-gray-600 mb-6">
								滋賀からリモートワークでWEB開発をやっております。
							</p>
							<div className="flex space-x-4">
								<Link
									className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
									href="#personal"
								>
									個人開発
								</Link>
								<Link
									className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
									href="#work"
								>
									仕事での開発
								</Link>
							</div>
						</div>
						<div className="hidden md:block">
							<img
								alt="John Doe"
								className="rounded-full"
								height={400}
								src="/avatar.png"
								style={{
									aspectRatio: "400/400",
									objectFit: "cover",
								}}
								width={400}
							/>
						</div>
					</div>
				</section>
				<section id="personal" className="py-12 md:py-20">
					<div className="container mx-auto px-6 md:px-12">
						<h2 className="text-2xl md:text-3xl font-bold mb-8">個人開発</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{personalProducts.map((product) => (
								<Card key={product.id}>
									<img
										alt={product.title}
										className="rounded-t-md"
										height={225}
										src={product.image.url}
										style={{
											aspectRatio: "400/225",
											objectFit: "cover",
										}}
										width={400}
									/>
									<CardContent className="p-4">
										<h3 className="text-xl font-bold mb-2">{product.title}</h3>
										<p className="text-gray-600 mb-4">{product.detail}</p>
										<div className="flex items-center gap-2 mb-4 flex-wrap">
											{product.technologies.map((technology) => (
												<div
													key={technology}
													className="bg-gray-200 px-2 py-1 rounded-md text-sm font-medium text-gray-700"
												>
													{technology}
												</div>
											))}
										</div>
										<Link
											className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
											href={product.url}
										>
											詳細
										</Link>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>
				<section id="work" className="py-12 md:py-20">
					<div className="container mx-auto px-6 md:px-12">
						<h2 className="text-2xl md:text-3xl font-bold mb-8">
							仕事での開発
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{workProducts.map((product) => (
								<Card key={product.id}>
									<img
										alt={product.title}
										className="rounded-t-md"
										height={225}
										src={product.image.url}
										style={{
											aspectRatio: "400/225",
											objectFit: "cover",
										}}
										width={400}
									/>
									<CardContent className="p-4">
										<h3 className="text-xl font-bold mb-2">{product.title}</h3>
										<p className="text-gray-600 mb-4">{product.detail}</p>
										<div className="flex items-center gap-2 mb-4 flex-wrap">
											{product.technologies.map((technology) => (
												<div
													key={technology}
													className="bg-gray-200 px-2 py-1 rounded-md text-sm font-medium text-gray-700"
												>
													{technology}
												</div>
											))}
										</div>
										<Link
											className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
											href={product.url}
										>
											詳細
										</Link>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>
				<section id="skills" className="py-12 md:py-20">
					<div className="container mx-auto px-6 md:px-12">
						<h2 className="text-2xl md:text-3xl font-bold mb-8">
							スキルセット
						</h2>
						<div className="grid md:grid-cols-2 gap-8">
							<h3 className="text-xl font-bold mb-4">言語</h3>
							<div className="flex flex-wrap gap-4">
								{languages.map((skill) => (
									<div
										key={skill.id}
										className="bg-gray-200 px-2 py-1 rounded-md text-sm font-medium text-gray-700 h-7"
									>
										{skill.title}: {skill.years}年
									</div>
								))}
							</div>
							<h3 className="text-xl font-bold mb-4">フレームワーク</h3>
							<div className="flex flex-wrap gap-4">
								{frameworks.map((skill) => (
									<div
										key={skill.id}
										className="bg-gray-200 px-2 py-1 rounded-md text-sm font-medium text-gray-700 h-7"
									>
										{skill.title}: {skill.years}年
									</div>
								))}
							</div>
							<h3 className="text-xl font-bold mb-4">クラウド</h3>
							<div className="flex flex-wrap gap-4">
								{clouds.map((skill) => (
									<div
										key={skill.id}
										className="bg-gray-200 px-2 py-1 rounded-md text-sm font-medium text-gray-700 h-7"
									>
										{skill.title}: {skill.years}年
									</div>
								))}
							</div>
							<h3 className="text-xl font-bold mb-4">データベース</h3>
							<div className="flex flex-wrap gap-4">
								{databases.map((skill) => (
									<div
										key={skill.id}
										className="bg-gray-200 px-2 py-1 rounded-md text-sm font-medium text-gray-700 h-7"
									>
										{skill.title}: {skill.years}年
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
				<section id="contact" className="py-12 md:py-20">
					<div className="container mx-auto px-6 md:px-12">
						<h2 className="text-2xl md:text-3xl font-bold mb-8">問い合わせ</h2>
						<h3 className="text-xl font-bold mb-4">SNSから</h3>
						<div className="flex justify-center space-x-6 mb-4">
							<Link
								className="text-gray-900 hover:text-gray-600"
								href="https://github.com/ufoo68"
							>
								<div className="flex items-center gap-2">
									<GithubIcon className="w-6 h-6" />
									<span>Github</span>
								</div>
							</Link>
							<Link
								className="text-gray-900 hover:text-gray-600"
								href="https://x.com/ufoo_yuta"
							>
								<div className="flex items-center gap-2">
									<TwitterIcon className="w-6 h-6" />
									<span>Twitter</span>
								</div>
							</Link>
						</div>
						<h3 className="text-xl font-bold mb-4">フォームから</h3>
						<ContactForm />
					</div>
				</section>
			</main>
			<footer className="bg-gray-900 text-white py-6 px-6 md:px-12">
				<div className="container mx-auto flex justify-between items-center">
					<p className="text-sm">© 2024 ufoo68. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}

function GithubIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
			<path d="M9 18c-4.51 2-5-2-7-2" />
		</svg>
	);
}

function TwitterIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
		</svg>
	);
}
