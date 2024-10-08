import { UseChatHelpers } from 'ai/react'

import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border border-blue-500 bg-yellow-100 p-8 shadow-lg" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
        <h1 className="text-lg font-bold text-blue-600">
          Welcome to Next.js Chatbot!
        </h1>
        <p className="leading-normal text-black">
          This is an open-source chatbot app template built with{' '}
          <ExternalLink href="https://nextjs.org" className="text-blue-600 underline">Next.js</ExternalLink>, the{' '}
          <ExternalLink href="https://vercel.com/storage/kv" className="text-blue-600 underline">
            Vercel KV
          </ExternalLink>
          .
        </p>
        <p className="leading-normal text-black">
          It uses{' '}
          <ExternalLink href="https://vercel.com/blog/ai-sdk-3-generative-ui" className="text-blue-600 underline">
            React Server Components
          </ExternalLink>{' '}
          to combine text with generative UI as output of the Chatbot. The UI state
          is synced through the SDK so the model is aware of your interactions
          as they happen.
        </p>
      </div>
    </div>
  )
}
