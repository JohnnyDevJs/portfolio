type ChangeTextStyleProp = {
  text: string
  keywords: string[]
}

export const ChangeTextStyle = ({ text, keywords }: ChangeTextStyleProp) => {
  const highlightText = (text: string, keywords: string[]) => {
    let modifiedText = text

    keywords.forEach((keyword) => {
      const regex = new RegExp(`(${keyword})`, 'gi')
      modifiedText = modifiedText.replace(
        regex,
        `<span class="font-semibold text-primary ">$1</span>`,
      )
    })

    return modifiedText
  }

  const modifiedText = highlightText(text, keywords)

  return (
    <div
      className="mt-4 max-w-2xl"
      dangerouslySetInnerHTML={{ __html: modifiedText }}
    />
  )
}
