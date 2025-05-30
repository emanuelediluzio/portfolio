import { Eye } from "lucide-react";

interface Props {
	views: number;
}

export function Article({ views }: Props) {
	return (
		<div className="flex items-center gap-1 text-xs text-zinc-500">
			<Eye className="w-4 h-4" />{" "}
			{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
		</div>
	);
}
