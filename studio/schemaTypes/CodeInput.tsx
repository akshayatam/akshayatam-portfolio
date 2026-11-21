import {useState} from 'react'
import {type TextInputProps} from 'sanity'

export function CodeInput(props: TextInputProps) {
  const [feedback, setFeedback] = useState('')

  async function copy() {
    try {
      await navigator.clipboard.writeText(props.value ?? '')
      setFeedback('Copied!')
    } catch {
      setFeedback('Could not copy. Select and copy the snippet manually.')
    }
  }

  return (
    <div style={{fontFamily: 'monospace', tabSize: 2}}>
      {props.renderDefault({
        ...props,
        elementProps: {
          ...props.elementProps,
          onChange: (event) => {
            setFeedback('')
            props.elementProps.onChange(event)
          },
        },
      })}
      <button type="button" disabled={!props.value} onClick={copy}>
        Copy code
      </button>
      <span role="status"> {feedback}</span>
    </div>
  )
}
