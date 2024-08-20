import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 10,
          background: 'hsl(24 9.8% 10%)',
          color: 'hsl(143 63% 57%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        &lt;JS /&gt;
      </div>
    ),
    {
      ...size,
    },
  )
}
