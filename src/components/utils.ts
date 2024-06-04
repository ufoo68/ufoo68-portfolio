import { EmailJSResponseStatus, send } from "@emailjs/browser";
import { type ClassValue, clsx } from "clsx";
import { createClient } from "microcms-js-sdk";
import { twMerge } from "tailwind-merge";

export const sendEmail = (
	params: EmailMessage,
): Promise<EmailJSResponseStatus> =>
	send(
		process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
		process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
		params,
		process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
	);

export const micrecmsClient = createClient({
	serviceDomain: "ufoo68-portfolio",
	apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export type Product = {
	id: string;
	title: string;
	detail: string;
	technologies: string[];
	url: string;
	image: {
		url: string;
		width: number;
		height: number;
	};
	type: ["personal" | "work"];
};

export type Skill = {
	id: string;
	title: string;
	years: number;
	type: ["language" | "framework" | "cloud" | "database"];
};

export type EmailMessage = {
	from_name: string;
	reply_to: string;
	subject: string;
	message: string;
};
