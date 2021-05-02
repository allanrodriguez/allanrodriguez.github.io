import { render } from "@testing-library/react"
import React from "react"
import Footer from "../footer"

test("footer has copyright with correct year", async () => {
  const year = new Date().getUTCFullYear()
  const text = `© ${year} Allan Rodriguez`

  const { findByText } = render(<Footer />)

  const result = await findByText(text)
  expect(result).toBeInTheDocument()
})
