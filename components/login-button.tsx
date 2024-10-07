'use client'

import * as React from 'react'
import { signIn } from 'next-auth/react'
import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from '@/components/ui/button'
import { IconGitHub, IconSpinner } from '@/components/ui/icons'

interface LoginButtonProps extends ButtonProps {
  showGithubIcon?: boolean
  text?: string
}

export function LoginButton({
  text = 'Login with GitHub',
  showGithubIcon = true,
  className,
  ...props
}: LoginButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false)

  return (
    <Button
      variant="outline"
      onClick={() => {
        setIsLoading(true)
        // next-auth signIn() function doesn't work yet at Edge Runtime due to usage of BroadcastChannel
        signIn('github', { callbackUrl: `/` })
      }}
      disabled={isLoading}
      className={cn(
        "flex items-center justify-center px-4 py-2 border-2 border-blue-500 bg-yellow-400 text-blue-800 font-bold rounded-lg transition-all duration-200 hover:bg-blue-600 hover:text-white",
        className
      )}
      style={{
        fontFamily: 'Comic Sans MS, cursive, sans-serif', // 90s font
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', // Added shadow for depth
      }}
      {...props}
    >
      {isLoading ? (
        <IconSpinner className="mr-2 animate-spin" />
      ) : showGithubIcon ? (
        <IconGitHub className="mr-2" />
      ) : null}
      {text}
    </Button>
  )
}
