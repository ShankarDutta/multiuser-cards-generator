import CardSkeleton from "@/components/FetchElements/CardSkeleton";
import StaticSec from "@/components/FetchElements/StaticSec";
import fetchdata from "@/lib/FetchData";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Home | Nextjs Starter Template",
	description: "Home page of Nextjs Starter Template",
};

const page = async () => {
	const UserData = await fetchdata(3);
	return (
		<>
			<Suspense
				fallback={
					<section className="grid h-[80dvh] grid-cols-1 place-items-center gap-4 lg:grid-cols-3">
						{UserData.map((result) => (
							<CardSkeleton key={result.email} />
						))}
					</section>
				}>
				<StaticSec />
			</Suspense>
		</>
	);
};

export default page;
