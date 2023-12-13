import { render, screen } from '@testing-library/react';
import { describe, expect, it, } from 'vitest';
import { SearchForm } from '.';
describe("Component: SearchForm", () => {
  it("Should be render true", () => {
    render( <SearchForm />)
    screen.debug()
    expect(true).toBe(true)
  })
})