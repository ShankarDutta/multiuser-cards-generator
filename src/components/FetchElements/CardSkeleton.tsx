import { Card, CardContent } from "../shadcnui/card";
import { Separator } from "../shadcnui/separator";
import { Skeleton } from "../shadcnui/skeleton";

const CardSkeleton = () => {
	return (
		<Card className="w-full max-w-sm space-y-4 rounded-2xl p-4 shadow-md">
			{/* Avatar + Name */}
			<div className="flex flex-col items-center gap-3">
				<Skeleton className="h-[100px] w-[100px] rounded-full" />
				<Skeleton className="h-6 w-2/3" />
			</div>

			<Separator />

			{/* Details */}
			<CardContent className="grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-3 text-sm">
				<Skeleton className="h-5 w-5 rounded" />
				<Skeleton className="h-4 w-2/3" />

				<Skeleton className="h-5 w-5 rounded" />
				<Skeleton className="h-4 w-2/3" />

				<Skeleton className="h-5 w-5 rounded" />
				<Skeleton className="h-4 w-2/3" />

				<Skeleton className="h-5 w-5 rounded" />
				<Skeleton className="h-4 w-2/3" />

				<Skeleton className="h-5 w-5 rounded" />
				<Skeleton className="h-4 w-2/3" />
			</CardContent>
		</Card>
	);
};

export default CardSkeleton;
