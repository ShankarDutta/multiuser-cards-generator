import Image from "next/image";
import { ImProfile } from "react-icons/im";
import { IoCalendarNumberSharp } from "react-icons/io5";

import { BiWorld } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { Card, CardContent } from "../shadcnui/card";
import { Separator } from "../shadcnui/separator";

const UserCard = () => {
	return (
		<>
			<Card className="w-[350px] space-y-3 px-4">
				<div className="flex flex-col items-center gap-3">
					<Image
						src={"/image.png"}
						alt="profile"
						height={100}
						width={100}
						priority
						className="h-[100px] w-[100px] rounded-full p-1 outline-2 outline-blue-400"
					/>
					<div className="text-2xl font-semibold">Shankar Dutta </div>
				</div>

				<Separator />

				<CardContent className="flex items-center justify-start gap-2 px-6 text-2xl font-semibold">
					<div className="space-y-4">
						<ImProfile />
						<IoCalendarNumberSharp />
						<MdMail />
						<FaLocationDot />
						<BiWorld />
					</div>

					<div className="space-y-2">
						<div className="">Hello </div>
						<div className="">Hello </div>
						<div className="">Hello </div>
						<div className="">Hello </div>
						<div className="">Hello </div>
					</div>
				</CardContent>
			</Card>
		</>
	);
};

export default UserCard;
