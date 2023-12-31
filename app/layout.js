import "./globals.css";
import { Inter } from "next/font/google";
import SidePanel from "./components/SidePanel";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="pl">
			<body className="ml-20 pl-2">
				{/*margin width same as side panel width*/}
				{children}
				<SidePanel />
			</body>
		</html>
	);
}
