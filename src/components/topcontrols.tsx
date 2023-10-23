import { ChevronLeft, ChevronRight } from "lucide-react";

export function TopControls () {
    return(
        <div className="flex items-center gap-4">
        <button className="p-1 rounded-full bg-black/60"><ChevronLeft strokeWidth={1.25}/></button>
        <button className="p-1 rounded-full bg-black/60"><ChevronRight strokeWidth={1.25}/></button>
      </div>
    )
}