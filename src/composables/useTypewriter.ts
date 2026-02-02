import { ref, onUnmounted } from 'vue'

export function useTypewriter(speed = 60) {
  const displayedText = ref('')
  const isTyping = ref(false)
  let timeout: number | null = null

  const type = (text: string, callback?: () => void) => {
    if (timeout) {
      clearTimeout(timeout)
    }

    displayedText.value = ''
    isTyping.value = true
    let index = 0

    const typeChar = () => {
      if (index < text.length) {
        displayedText.value += text.charAt(index)
        index++
        timeout = setTimeout(typeChar, speed) as unknown as number
      } else {
        isTyping.value = false
        if (callback) callback()
      }
    }

    typeChar()
  }

  const clear = () => {
    if (timeout) {
      clearTimeout(timeout)
    }
    displayedText.value = ''
    isTyping.value = false
  }

  onUnmounted(() => {
    if (timeout) {
      clearTimeout(timeout)
    }
  })

  return {
    displayedText,
    isTyping,
    type,
    clear
  }
}
