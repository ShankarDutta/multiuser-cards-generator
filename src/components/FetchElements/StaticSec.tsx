import fetchdata from "@/lib/FetchData";
import UserCard from "./UserCard";

const StaticSec = async () => {
	const UserData = await fetchdata(3);
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return (
		<>
			<section className="grid grid-cols-1 place-items-center gap-4 py-6 lg:h-[80dvh] lg:grid-cols-3 lg:py-0">
				{UserData.map((result) => (
					<UserCard
						key={result.email}
						info={result}
					/>
				))}
			</section>
		</>
	);
};

export default StaticSec;
