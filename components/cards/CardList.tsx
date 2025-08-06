import React from 'react'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import { Badge } from '../ui/badge';


const popularContent = [
  {
    id: 1,
    title: "JavaScript Tutorial",
    badge: "Coding",
    image:
      "/book-icons/book-cover.png",
    count: 4300,
  },
  {
    id: 2,
    title: "Tech Trends 2025",
    badge: "Tech",
    image:
     "/book-icons/book-icon-logo.jpg",
    count: 3200,
  },
  {
    id: 3,
    title: "The Future of AI",
    badge: "AI",
    image:
      "/book-icons/book-simple.png",
    count: 2400,
  },
  {
    id: 4,
    title: "React Hooks Explained",
    badge: "Coding",
    image:
      "/book-icons/book-stack.png",
    count: 1500,
  },
  {
    id: 5,
    title: "Image Generation with AI",
    badge: "AI",
    image:
      "/book-icons/newspaper-reading.png",
    count: 1200,
  },
];

const latestTransactions = [
  {
    id: 1,
    title: "Subscription Renewal",
    badge: "John Doe",
    image:
      "/book-icons/book-cover.png",
    count: 1400,
  },
  {
    id: 2,
    title: "Payment for Services",
    badge: "Jane Smith",
    image:
      "/book-icons/book-icon-logo.jpg",
    count: 2100,
  },
  {
    id: 3,
    title: "Subscription Renewal",
    badge: "Michael Johnson",
    image:
      "/book-icons/book-simple.png",
    count: 1300,
  },
  {
    id: 4,
    title: "Payment for Services",
    badge: "Lily Adams",
    image:
      "/book-icons/book-stack.png",
    count: 2500,
  },
  {
    id: 5,
    title: "Subscription Renewal",
    badge: "Sam Brown",
    image:
      "/book-icons/newspaper-reading.png",
    count: 1400,
  },
];

const CardList = ({title}: {title: string}) => {
    const list = title === "Popular Content" ? popularContent : latestTransactions;
    return (
        <div className="">
            <h2 className="text-lg font-medium mb-6">{title}</h2>
            <div className="flex flex-col gap-2">
                {list.map((item) => (
                    <Card key={item.id} className="flex-row items-center justify-between gap-4 p-4">
                        <div className='w-12 h-12 rounded-sm relative overflow-hidden'>
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={40}
                                height={40}
                                className="object-cover"
                            />
                        </div>
                        {/* <CardHeader>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.badge}</CardDescription>
                            <CardAction>{item.count}</CardAction>
                        </CardHeader> */}
                        <CardContent className="p-0 flex-1">
                            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                            <Badge variant="secondary" className="text-xs">{item.badge}</Badge>
                        </CardContent>

                        <CardFooter className="p-0">
                            {item.count / 1000}K
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default CardList
