"use client";

import { InputValidation, InputValidationType } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfoIcon, Loader } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../shadcnui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "../shadcnui/form";
import { Input } from "../shadcnui/input";
const GetInput = () => {
	const { push, replace } = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		if (pathname === "/3") {
			replace("/"); // special case: replace
		} else if (pathname !== "/3") {
			push(pathname);
		} else {
			push("/"); // all other cases
		}
	}, [pathname, replace, push]);

	const rhForm = useForm<InputValidationType>({
		resolver: zodResolver(InputValidation),
		defaultValues: {
			num: 0,
		},
	});

	const onSubmit = async ({ num }: InputValidationType) => {
		push(`/${num}`);
	};

	return (
		<>
			<Form {...rhForm}>
				<form
					onSubmit={rhForm.handleSubmit(onSubmit)}
					className="gap-2 space-y-2 md:flex md:space-y-0">
					<FormField
						control={rhForm.control}
						name="num"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Enter the number"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						type="submit"
						className="bg-blue-500 text-white hover:cursor-pointer hover:bg-blue-600"
						disabled={
							rhForm.formState.isSubmitting ||
							!rhForm.formState.isValid
						}>
						{rhForm.formState.isSubmitting ? (
							<>
								<Loader className="mr-2 animate-spin" />
								Submitting
							</>
						) : (
							<>
								<InfoIcon />
								Submit
							</>
						)}
					</Button>
				</form>
			</Form>
		</>
	);
};

export default GetInput;
