import z from "zod";

const envSchema = z.object({
	RANDOM_USER_API: z.url({ error: "env missing" }),
});

const envVars = {
	RANDOM_USER_API: process.env.RANDOM_USER_API,
};

const env = envSchema.parse(envVars);

export default env;
