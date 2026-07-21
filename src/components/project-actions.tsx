"use client";

import { Check, Copy, ExternalLink, Share2, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export function ProjectActions({ title, url }: { title: string; url: string }) {
	const [isOpen, setIsOpen] = useState(false);
	const [copied, setCopied] = useState(false);
	const titleId = useId();

	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setIsOpen(false);
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isOpen]);

	const copyUrl = async () => {
		await navigator.clipboard.writeText(url);
		setCopied(true);
		window.setTimeout(() => setCopied(false), 2000);
	};

	return (
		<>
			<div className="flex flex-wrap gap-2">
				<Link
					className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-ufoo-neon px-4 text-sm font-bold text-ufoo-dark transition hover:shadow-neon"
					href={url}
					target="_blank"
					rel="noopener noreferrer"
				>
					詳細
					<ExternalLink aria-hidden="true" className="size-4" />
				</Link>
				<button
					className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-ufoo-neon px-4 text-sm font-bold text-ufoo-neon transition hover:bg-ufoo-neon hover:text-ufoo-dark"
					type="button"
					onClick={() => setIsOpen(true)}
				>
					<Share2 aria-hidden="true" className="size-4" />
					シェア
				</button>
			</div>

			{isOpen && (
				<div
					className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-5 backdrop-blur-sm"
					role="presentation"
					onMouseDown={(event) => {
						if (event.currentTarget === event.target) setIsOpen(false);
					}}
				>
					<div
						aria-labelledby={titleId}
						aria-modal="true"
						className="relative w-full max-w-sm rounded-xl border border-ufoo-panel-border bg-ufoo-panel p-6 text-center shadow-2xl"
						role="dialog"
					>
						<button
							aria-label="閉じる"
							className="absolute right-3 top-3 grid size-9 place-items-center rounded-full text-ufoo-muted transition hover:bg-white/10 hover:text-ufoo-ink"
							type="button"
							onClick={() => setIsOpen(false)}
						>
							<X aria-hidden="true" className="size-5" />
						</button>
						<p className="text-xs font-black uppercase tracking-[0.2em] text-ufoo-neon">
							Share Project
						</p>
						<h2 id={titleId} className="mt-2 pr-5 text-xl font-black text-ufoo-ink">
							{title}
						</h2>
						<div className="mx-auto mt-5 w-fit rounded-xl bg-white p-4">
							<QRCodeSVG value={url} size={200} level="M" aria-label={`${title}のQRコード`} />
						</div>
						<p className="mt-4 text-sm text-ufoo-muted">
							スマートフォンで読み取ってページを開けます。
						</p>
						<button
							className="mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border border-ufoo-neon font-bold text-ufoo-neon transition hover:bg-ufoo-neon hover:text-ufoo-dark"
							type="button"
							onClick={copyUrl}
						>
							{copied ? <Check aria-hidden="true" className="size-4" /> : <Copy aria-hidden="true" className="size-4" />}
							{copied ? "コピーしました" : "URLをコピー"}
						</button>
					</div>
				</div>
			)}
		</>
	);
}
