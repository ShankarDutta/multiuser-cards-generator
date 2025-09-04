import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Header/NavBar";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { RootLayoutProps } from "@/lib/types";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Multiuser Profile Cards | Responsive UI Components",
	description:
		"Create SEO-optimized, responsive multiuser profile cards with Next.js, Tailwind CSS, and ShadCN UI. Perfect for Generateing teams and user profiles.",
	keywords: [
		"multiuser profile cards",
		"profile card generator",
		"responsive user cards",
		"team member profile cards",
		"profile card UI components",
		"SEO-friendly profile cards",
	],
	authors: [{ name: "Shankar Dutta", url: "https://yourdomain.com" }],
	openGraph: {
		title: "Multiuser Profile Cards | Responsive UI Components",
		description:
			"SEO-friendly profile card components to showcase team members, users. Built with modern web technologies.",
		url: "https://yourdomain.com",
		siteName: "Multiuser Profile Cards",
	},

	icons: {
		icon: "/favicon.png",
		shortcut: "/favicon-16x16.png",
	},
};

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body className="">
				<ThemeProvider
					attribute={"class"}
					defaultTheme="dark"
					enableSystem={false}>
					<NavBar />
					<main className="container mx-auto max-w-7xl px-6 py-3">
						{children}
					</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
