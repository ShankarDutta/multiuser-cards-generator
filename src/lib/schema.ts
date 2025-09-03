import { z } from "zod";

export const InputValidation = z.object({
	num: z.coerce
		.number<number>()
		.gte(3, { message: "Number must be at least 3" })
		.lte(30, { message: "Number must be at most 30" })
		.multipleOf(3, { message: "Give input in multiples of 3" }),
});

export type InputValidationType = z.infer<typeof InputValidation>;
