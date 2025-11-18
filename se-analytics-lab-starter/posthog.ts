import { PostHog } from "posthog-node"

/**
 * Initialize and return the PostHog Node.js client.
 * This can be used for sending events from the server side to PostHog.
 */
export default function PostHogClient() {
  const posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    flushAt: 1,
    flushInterval: 0,
  })

  return posthogClient
}