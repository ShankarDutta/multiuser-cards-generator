import fetchData from "@/lib/FetchData";
import UserCard from "./UserCard";

const StaticSec = async () => {
	const userData = await fetchData(3);

	return (
		<section className="grid grid-cols-1 place-items-center gap-4 py-6 lg:h-[80dvh] lg:grid-cols-3 lg:py-0">
			{userData.map((result) => (
				<UserCard
					key={result.email}
					info={result}
				/>
			))}
		</section>
	);
};

export default StaticSec;
