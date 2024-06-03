"use client";

import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sendEmail } from "@/components/utils";

export function ContactForm() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const params = {
      from_name: formData.get("name") as string,
      reply_to: formData.get("email") as string,
      subject: "ポートフォリオからのお問い合わせ",
      message: formData.get("message") as string,
    };
    sendEmail(params)
    try {
      // await sendEmail(params);
      alert("問い合わせが完了しました。");
    } catch (error) {
      console.error(error);
      alert("エラーが発生しました。");
    }
    form.reset();
  };
	return (
		<form className="max-w-md mx-auto space-y-4" onSubmit={onSubmit}>
			<div>
				<Label htmlFor="name">名前</Label>
				<Input id="name" name="name" placeholder="Enter your name" type="text" />
			</div>
			<div>
				<Label htmlFor="email">メールアドレス</Label>
				<Input id="email" name="email" placeholder="Enter your email" type="email" />
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
			<Button className="w-full" type="submit">
				送信
			</Button>
		</form>
	);
}
