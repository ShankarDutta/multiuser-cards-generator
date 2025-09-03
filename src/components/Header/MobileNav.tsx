import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/shadcnui/sheet";
import { Menu } from "lucide-react";
import GetInput from "../FetchElements/GetInput";

const MobileNav = () => {
	return (
		<Sheet aria-label="Mobile-header-component">
			<SheetTrigger className="rounded-md bg-blue-500 p-2 text-white">
				<Menu />
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle aria-label="App Name">
						MultiUserCrad.
					</SheetTitle>
					<SheetDescription>
						A customized tool to generate profile cards for multiple
						users with flexible design .
					</SheetDescription>
				</SheetHeader>

				<div className="space-y-4 px-4">
					<GetInput />
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
