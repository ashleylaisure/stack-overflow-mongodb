'use client'
import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { SignUp } from '@/lib/supabase/actions/auth'
import { cn } from '@/lib/utils'

const SignUpForm = () => {
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true)
        setError(null)

        const formData = new FormData(event.currentTarget)
        const result = await SignUp(formData)

        if(result.status === 'success'){
            router.push('/');
        } else {
            setError(result.status)
        }

        setLoading(false)

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                <div className="w-full flex flex-col gap-2">
                    {/* <Label className="paragraph-medium text-dark400_light700">
                        Username
                    </Label> */}
                    <Input
                        type="text"
                        placeholder="Username"
                        id="username"
                        name="username"
                        className="form-input"
                        required
                    />
                </div>

                <div className="w-full flex flex-col gap-2">
                    {/* <Label className="paragraph-medium text-dark400_light700">
                        Email
                    </Label> */}
                    <Input
                        type="email"
                        placeholder="Email"
                        id="Email"
                        name="email"
                        className="form-input"
                        required
                    />
                </div>

                <div className="w-full flex flex-col gap-2">
                    {/* <Label className="paragraph-medium text-dark400_light700">
                        Password
                    </Label> */}
                    <Input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        className="form-input"
                    />
                </div>
                
                <div className="mt-4">
                    <Button
                        disabled={loading} // Replace with actual loading state
                        type="submit"
                        className={cn('primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 text-light-900 cursor-pointer',
                            loading && 'opacity-50 cursor-not-allowed'
                        )}
                        >
                        {loading ? "Loading..." : "Sign Up"}
                    </Button>
                </div>
                    {/* {error && <p className="text-red-500">{error}</p>} */}
            </form>
        </div>
    )
    }

export default SignUpForm
