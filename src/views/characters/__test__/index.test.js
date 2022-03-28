/* global describe, test, expect, jest */
import React from "react";
import API from 'api/characters'
import { render } from "@testing-library/react";
import Character from "..";
import Characters from '../__fixtures__/characters.json'

jest.mock('api/characters')

describe("Character list", () => {
  test("Show character list", () => {
		API.GetCharacters.mockImplementation(() => Promise.resolve(Characters))

    const { getAllByTestId } = render(<Character characters={Characters} />);

    expect(getAllByTestId('character-name')).toBeTruthy()
    expect(getAllByTestId('character-image')).toBeTruthy()
    expect(getAllByTestId('character-link')).toBeTruthy()
  })
});
