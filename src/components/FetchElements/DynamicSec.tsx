import fetchData from "@/lib/FetchData";
import UserCard from "./UserCard";

interface cardprops {
	id: { num: string };
}

const DynamicSec = async ({ id }: cardprops) => {
	const userData = await fetchData(parseInt(id.num));

	return (
		<section className="grid grid-cols-1 place-items-center gap-4 py-6 lg:grid-cols-3">
			{userData.map((result) => {
				return (
					<UserCard
						key={result.email}
						info={result}
					/>
				);
			})}
		</section>
	);
};

export default DynamicSec;
