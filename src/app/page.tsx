import UserCard from "@/components/FetchElements/UserCard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Nextjs Starter Template",
	description: "Home page of Nextjs Starter Template",
};

const page = () => {
	return (
		<>
			<section className="grid h-dvh place-items-center">
				<UserCard />
			</section>
		</>
	);
};

export default page;
