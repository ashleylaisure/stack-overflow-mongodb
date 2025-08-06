import CardList from '@/components/cards/CardList'
import React from 'react'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { BadgeCheck, Candy, Citrus, Edit2Icon, Shield } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { Badge } from '@/components/ui/badge'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import EditUser from '@/components/forms/EditUser'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import LineChartComponent from '@/components/charts/LineChart'

const ProfilePageDetails = () => {
    return (
        // container
        <div className="mt-4 flex flex-col lg:flex-row gap-8">
            {/* left */}
            <div className="w-full lg:w-1/3 space-y-6">
                {/* user badges container */}
                <div className="bg-primary-foreground p-4 rounded-lg">
                    <h1 className="text-xl font-semibold">User Badges</h1>
                    <div className="flex gap-4 mt-4">
                        <HoverCard>
                            <HoverCardTrigger>
                                <BadgeCheck
                                    size={36}
                                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
                                />
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <h1 className="font-bold mb-2">Verified User</h1>
                                <p className="text-sm text-muted-foreground">
                                    This user has been verified by the admin.
                                </p>
                            </HoverCardContent>
                        </HoverCard>
                        
                        <HoverCard>
                            <HoverCardTrigger>
                                <Shield
                                    size={36}
                                    className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"
                                />
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <h1 className="font-bold mb-2">Admin</h1>
                                <p className="text-sm text-muted-foreground">
                                    Admin users have access to all features and can manage
                                    users.
                                </p>
                            </HoverCardContent>
                        </HoverCard>
                        
                        <HoverCard>
                            <HoverCardTrigger>
                                <Candy
                                    size={36}
                                    className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                                />
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <h1 className="font-bold mb-2">Awarded</h1>
                                <p className="text-sm text-muted-foreground">
                                    This user has been awarded for their contributions.
                                </p>
                            </HoverCardContent>
                        </HoverCard>
                        <HoverCard>
                            <HoverCardTrigger>
                                <Citrus
                                    size={36}
                                    className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                                />
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <h1 className="font-bold mb-2">Popular</h1>
                                <p className="text-sm text-muted-foreground">
                                    This user has been popular in the community.
                                </p>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                </div>
                {/* Information container */}
                <div className="bg-primary-foreground p-4 rounded-lg">
                    <div className="flex items-center justify-between w-full">
                        <h1 className="text-xl font-semibold">User Information</h1>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline">
                                    <Edit2Icon size={36} />
                                </Button>
                            </SheetTrigger>
                            <EditUser />
                        </Sheet>
                    </div>
                    <div className="space-y-4 mt-4">
                        <div className="flex flex-col gap-2 mb-8">
                            <p className="text-sm text-muted-foreground"> Profile Completion</p>
                            <Progress value={33} />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">Username:</span>
                            <span> user123</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">Email:</span>
                            <span> user123@example.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">Phone:</span>
                            <span> (123) 456-7890</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">Location:</span>
                            <span> New York, USA</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">Role:</span>
                            <Badge className="bg-blue-500 text-white">Admin</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Joined on 2025.01.01</p>
                    </div>
                </div>
                {/* Card List container */}
                <div className="bg-primary-foreground p-4 rounded-lg">
                    <CardList title="Recent Transactions" />
                </div>
            </div>
            {/* right */}
            <div className="w-full lg:w-2/3 space-y-6">
                {/* user card container */}
                <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                        <Avatar className="size-12">
                            <AvatarImage src="/images/site-logo.svg" alt="User Avatar" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <h1 className="text-2xl font-semibold mt-4">John Doe</h1>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        John is a software engineer with over 5 years of experience in web development.
                        He is passionate about building scalable applications and loves to
                        contribute to open-source projects.
                    </p>
                </div>
                {/* chart container */}
                <div className="">
                    <LineChartComponent />
                </div>
            </div>
        </div>
    )
}

export default ProfilePageDetails
