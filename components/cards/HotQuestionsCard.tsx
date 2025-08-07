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
import Link from 'next/link';
import ROUTES from '@/constants/routes';

const hotQuestions = [
  { _id: "1", title: "How to create a custom hook in React?" },
  { _id: "2", title: "How to use React Query?" },
  { _id: "3", title: "How to use Redux?" },
  { _id: "4", title: "How to use React Router?" },
  { _id: "5", title: "How to use React Context?" },
];

export default function HotQuestionsCard() {

  return (
    <div>
      <h2 className="text-lg font-medium mb-6">Top Questions</h2>
      <div className="flex flex-col gap-2">
          {hotQuestions.map(({_id, title}) => (
            <Link 
              key={_id} 
              href={ROUTES.QUESTION_DETAIL(_id)}
              className="cursor-pointer">
              <Card key={_id} className="flex-row items-center justify-between gap-4 p-4">
                  {/* <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.badge}</CardDescription>
                      <CardAction>{item.count}</CardAction>
                  </CardHeader> */}
                  <CardContent className="p-0 flex-1">
                      <CardTitle className="text-sm font-medium">{title}</CardTitle>
                      {/* <Badge variant="secondary" className="text-xs">{item.badge}</Badge> */}
                  </CardContent>

                  <CardFooter className="p-0">
                      <Image
                          src="/icons/chevron-right.svg"
                          alt="Chevron Right"
                          width={20}
                          height={20}
                          className="invert-colors"
                      />
                  </CardFooter>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  )
}

