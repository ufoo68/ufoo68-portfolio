"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/components/utils";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

export function ContactForm() {
	const [loading, setLoading] = useState(false);
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (confirm("送信してもよろしいですか？")) {
			const form = e.currentTarget;
			const formData = new FormData(form);
			const params = {
				from_name: formData.get("name") as string,
				reply_to: formData.get("email") as string,
				subject: "ポートフォリオからのお問い合わせ",
				message: formData.get("message") as string,
			};
			setLoading(true);
			try {
				await sendEmail(params);
				alert("問い合わせが完了しました。");
			} catch (error) {
				console.error(error);
				alert("エラーが発生しました。");
			}
			setLoading(false);
			form.reset();
		}
	};
	return (
		<form className="max-w-md mx-auto space-y-4" onSubmit={onSubmit}>
			<div>
				<Label htmlFor="name">名前</Label>
				<Input
					id="name"
					name="name"
					placeholder="Enter your name"
					type="text"
				/>
			</div>
			<div>
				<Label htmlFor="email">メールアドレス</Label>
				<Input
					id="email"
					name="email"
					placeholder="Enter your email"
					type="email"
				/>
			</div>
			<div>
				<Label htmlFor="message">内容</Label>
				<Textarea
					className="min-h-[120px]"
					id="message"
					name="message"
					placeholder="Enter your message"
				/>
			</div>
			<Button className="w-full" type="submit" disabled={loading}>
				{loading ? "送信中..." : "送信する"}
			</Button>
		</form>
	);
}
