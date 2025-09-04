import ky from "ky";
import { UserDetailResultsType } from "./types";
const API_URL =
	process.env.NEXT_PUBLIC_RANDOMUSER_API || "https://randomuser.me/api/";

const fetchdata = async (num?: number) => {
	const { results } = await ky
		.get(API_URL, {
			searchParams: {
				noinfo: " ",
				results: num || 3,
			},
		})
		.json<UserDetailResultsType>();
	return results;
};

export default fetchdata;
