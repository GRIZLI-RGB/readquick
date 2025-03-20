import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "ReadQuick — Короткие статьи по разным темам за 1 минуту",
	description:
		"Читайте короткие и полезные статьи на ReadQuick. Узнавайте новое за 1 минуту — бизнес, технологии, наука, лайфхаки и многое другое. Быстро, понятно и по делу! 🚀",
	generator: "Next.js",
	applicationName: "ReadQuick",
	referrer: "origin-when-cross-origin",
	keywords: [
		"ReadQuick",
		"короткие статьи",
		"полезные статьи",
		"интересные статьи",
		"статьи по категориям",
		"быстрое чтение",
		"статьи за минуту",
		"лайфхаки",
		"образование",
		"новости",
		"факты",
		"саморазвитие",
		"технологии",
		"наука",
		"бизнес",
		"финансы",
		"здоровье",
		"психология",
		"карьера",
		"советы",
		"интернет",
		"развитие",
		"саморазвитие и мотивация",
		"краткие обзоры",
		"лучшие статьи",
		"умные статьи",
		"статьи на каждый день",
		"статьи без воды",
		"читаем быстро",
		"блог",
		"онлайн-статьи",
		"интересные факты",
		"развивающие статьи",
		"статьи для вдохновения",
		"новые знания",
		"интеллектуальное развитие",
	],
	authors: [
		{
			name: "ReadQuick",
			url: "https://readquick.ru",
		},
	],
	creator: "ReadQuick",
	publisher: "ReadQuick",
	formatDetection: {
		email: true,
		address: true,
		telephone: true,
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			nocache: true,
			noarchive: true,
		},
		noarchive: true,
	},
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/favicons/dark.ico",
				href: "/favicons/dark.ico",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/favicons/light.ico",
				href: "/favicons/light.ico",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body>{children}</body>
		</html>
	);
}
