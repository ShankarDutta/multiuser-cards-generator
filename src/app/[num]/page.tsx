import CardSkeleton from "@/components/FetchElements/CardSkeleton";
import DynamicSec from "@/components/FetchElements/DynamicSec";
import fetchdata from "@/lib/FetchData";
import { Suspense } from "react";

const page = async ({ params }: { params: Promise<{ num: string }> }) => {
	const { num } = await params;
	const UserData = await fetchdata(parseInt(num));

	return (
		<>
			<Suspense
				fallback={
					<section className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
						{UserData.map((result) => (
							<CardSkeleton key={result.email} />
						))}
					</section>
				}>
				<DynamicSec id={{ num }} />
			</Suspense>
		</>
	);
};

export default page;
