import Link from "next/link";
import ThemeToggleButton from "../customui/ThemeToggleButton";
import GetInput from "../FetchElements/GetInput";
import { AuroraText } from "../magicui/aurora-text";
import MobileNav from "./MobileNav";

const NavBar = () => {
	return (
		<header
			className="sticky top-0 z-[20] bg-black/3 shadow backdrop-blur-md dark:bg-white/8"
			aria-label="Webapp-header">
			<nav className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
				<div className="flex items-center gap-4">
					{/* logo  */}
					<Link href={"/"}>
						<AuroraText
							className="text-2xl font-bold lg:text-3xl"
							aria-label="App Name">
							MultiUserCard
						</AuroraText>
					</Link>

					<ThemeToggleButton />
				</div>

				{/* desktop nav bar  */}
				<div className="hidden gap-4 md:flex">
					<GetInput />
				</div>

				{/* Mobile nav bar  */}
				<div className="block md:hidden">
					<MobileNav />
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
