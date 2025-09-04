import fetchdata from "@/lib/FetchData";
import UserCard from "./UserCard";

interface cardprops {
	id: { num: string };
}

const DynamicSec = async ({ id }: cardprops) => {
	const UserData = await fetchdata(parseInt(id.num));
	return (
		<>
			<section className="grid grid-cols-1 place-items-center gap-4 py-6 lg:grid-cols-3">
				{UserData.map((result) => {
					return (
						<UserCard
							key={result.email}
							info={result}
						/>
					);
				})}
			</section>
		</>
	);
};

export default DynamicSec;
