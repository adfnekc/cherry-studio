import { Metrics } from '@renderer/types'
import { Assistant, Message, Usage } from '@renderer/types'

interface ChunkCallbackData {
  text?: string
  usage?: Usage
  metrics?: Metrics
}

interface CompletionsParams {
  messages: Message[]
  assistant: Assistant
  onChunk: (ChunkCallbackData) => void
  onFilterMessages: (messages: Message[]) => void
}
