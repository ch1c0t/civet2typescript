import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

export default function CodeHighlighter({ code }) {
  const [html, setHtml] = useState('')

  useEffect(() => {
    const highlight = async () => {
      const highlighted = await codeToHtml(code, {
        lang: 'typescript',
        theme: 'github-dark'
      })
      setHtml(highlighted)
    }
    highlight()
  }, [code])

  return <div id="output" className="h-full w-full overflow-auto" dangerouslySetInnerHTML={{ __html: html }} />
}
