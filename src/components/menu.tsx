"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

export function Menu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const onClickMenu = () => {
		setIsMenuOpen(true);
	};
	return (
		<div className="container mx-auto flex justify-between items-center">
			<Link className="flex items-center gap-2 text-xl font-bold" href="#">
				<img
					alt="Yuta Matsunaga"
					className="rounded-full"
					height={40}
					src="/avatar.png"
					style={{
						aspectRatio: "40/40",
						objectFit: "cover",
					}}
					width={40}
				/>
				ufoo68
			</Link>
			<nav className="hidden md:flex space-x-6">
				<Link className="hover:text-gray-400" href="#top">
					トップ
				</Link>
				<Link className="hover:text-gray-400" href="#personal">
					個人開発
				</Link>
				<Link className="hover:text-gray-400" href="#work">
					仕事での開発
				</Link>
				<Link className="hover:text-gray-400" href="#skills">
					スキルセット
				</Link>
				<Link className="hover:text-gray-400" href="#contact">
					問い合わせ
				</Link>
			</nav>
			<Button className="md:hidden" size="sm" variant="default">
				<MenuIcon onClick={onClickMenu} className="w-5 h-5" />
			</Button>
			<SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
		</div>
	);
}

function MenuIcon(props: {
	className: string;
	onClick: () => void;
}) {
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
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}

function SideMenu(props: { isOpen: boolean; onClose: () => void }) {
	const { isOpen, onClose } = props;
	return (
		<nav
			hidden={!isOpen}
			className="fixed right-0 bottom-0 top-0 bg-gray-700 z-50 w-50"
		>
			<div className="container mx-auto flex flex-col items-end p-6 gap-1">
				<Button className="mb-6" size="sm" variant="default" onClick={onClose}>
					<CloseIcon className="w-5 h-5" />
				</Button>
				<Link className="hover:text-gray-400" href="#top">
					トップ
				</Link>
				<Link className="hover:text-gray-400" href="#personal">
					個人開発
				</Link>
				<Link className="hover:text-gray-400" href="#work">
					仕事での開発
				</Link>
				<Link className="hover:text-gray-400" href="#skills">
					スキルセット
				</Link>
				<Link className="hover:text-gray-400" href="#contact">
					問い合わせ
				</Link>
			</div>
		</nav>
	);
}

function CloseIcon(props: { className: string }) {
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
			<line x1="18" x2="6" y1="6" y2="18" />
			<line x1="6" x2="18" y1="6" y2="18" />
		</svg>
	);
}
