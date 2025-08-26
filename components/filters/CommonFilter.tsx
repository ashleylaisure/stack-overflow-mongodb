'use client'

import { cn } from "@/lib/utils";
import { useSearchParams, useRouter } from "next/navigation";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { formUrlQuery } from "@/lib/url";



interface Props {
    filters: Filter[];
    otherClasses?: string;
    containerClasses?: string;
}

const CommonFilter = ({filters, otherClasses='', containerClasses=''}: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams()

    const parmasFilter = searchParams.get("filter");

    const handleUpdateParams = (value: string) => {
        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: "filter",
            value,
        })

        router.push(newUrl, {scroll: false})
    }

    return (
        <div className={cn("relative", containerClasses)}>
            <Select 
                onValueChange={(value) => handleUpdateParams(value)}
                defaultValue={parmasFilter || undefined}
            >
                <SelectTrigger 
                    className={cn("body-regular no-focus light-border backgroud-light800_dark300 text-dark500_light700 border px-5 py-2.5"
                        , otherClasses)}
                    aria-label="Filter options"
                >
                    <div className="line-clamp-1 flex-1 text-left">
                        <SelectValue
                            placeholder="Select a filter"
                        />
                    </div>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {filters.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                                {item.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        
        </div>
    )
}

export default CommonFilter
