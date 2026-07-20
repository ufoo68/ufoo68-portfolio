import { type ClassValue, clsx } from "clsx";
import { createClient } from "microcms-js-sdk";
import { twMerge } from "tailwind-merge";

export const micrecmsClient = process.env.NEXT_PUBLIC_MICROCMS_API_KEY
	? createClient({
			serviceDomain: "ufoo68-portfolio",
			apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
		})
	: null;

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
