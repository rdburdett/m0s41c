import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "M 0 S 4 1 C",
	description: "A Social Music Sample Sharing Platform",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript />
			</head>
			<body className={inter.className}>
				<MantineProvider>{children}</MantineProvider>
			</body>
		</html>
	);
}
