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
import TagCard from './TagCard';

const popularTags = [
  { _id: "1", name: "react", questions: 100 },
  { _id: "2", name: "javascript", questions: 200 },
  { _id: "3", name: "typescript", questions: 150 },
  { _id: "4", name: "nextjs", questions: 50 },
  { _id: "5", name: "react-query", questions: 75 },
];

export default function PopularTagsCard() {

  return (
    <div>
      <h2 className="text-lg font-medium mb-6">Popular Tags</h2>
      <div className="flex flex-col gap-2">
          {popularTags.map(({_id, name, questions}) => (
            <Link 
              key={_id} 
              href={ROUTES.TAG(_id)}>
              <Card key={_id} className="flex-row items-center justify-between gap-4 p-2 ">
                  
                  <CardContent className="p-0 flex-1">
                      <TagCard
                        _id={_id}
                        name={name}
                        questions={questions}
                        showCount
                        compact
                        isCard
                      />
                  </CardContent>

              </Card>
            </Link>
          ))}
      </div>
    </div>
  )
}
