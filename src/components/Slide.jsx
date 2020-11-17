import { css } from '@emotion/react'

const Slide = ({ content, width }) => (
    <div
        css={css`
      height: 100%;
      width: ${width}px;
      background-image: url('${content}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
    />
)

export default Slide