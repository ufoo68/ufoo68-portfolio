"use client";

import Link from "next/link";
import { NavigationHeader, NavigationItem } from "@/components/ufoo-ui";

export function Menu() {
	return (
		<NavigationHeader
			tone="glass"
			menuLabel="ナビゲーションメニューを開く"
			brand={
				<Link
					className="flex items-center gap-3 text-lg font-black text-ufoo-ink"
					href="#top"
				>
					<img
						alt="Yuta Matsunaga"
						className="size-10 rounded-full border border-ufoo-neon object-cover"
						height={40}
						src="/avatar.png"
						width={40}
					/>
					<span>ufoo68</span>
				</Link>
			}
			navigation={
				<>
					<NavigationItem href="#top" active>
						トップ
					</NavigationItem>
					<NavigationItem href="#personal">個人開発</NavigationItem>
					<NavigationItem href="#work">仕事での開発</NavigationItem>
					<NavigationItem href="#skills">スキルセット</NavigationItem>
					<NavigationItem href="#contact">問い合わせ</NavigationItem>
				</>
			}
			className="shadow-[0_14px_34px_rgba(0,0,0,0.22)]"
		/>
	);
}
