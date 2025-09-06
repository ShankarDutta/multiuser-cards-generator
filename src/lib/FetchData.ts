import ky from "ky";
import env from "./env";
import { UserDetailResultsType } from "./types";

const fetchData = async (num?: number) => {
	const { results } = await ky
		.get(env.RANDOM_USER_API, {
			searchParams: {
				noinfo: " ",
				results: num || 3,
			},
		})
		.json<UserDetailResultsType>();
	return results;
};

export default fetchData;
