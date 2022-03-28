/* global describe, test, expect, jest */
import React from "react";
import API from "api/characters";
import { render, fireEvent } from "@testing-library/react";
import Characters from "../__fixtures__/characters.json";
import CharacterList from "..";
import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import { act } from "react-dom/test-utils";
import Filters from "views/filters";

jest.mock("api/characters");

describe("Character layout", () => {
  test("Show character list", async () => {
    await act(async () => {
      API.GetCharacters.mockImplementation(() => Promise.resolve(Characters));

      const { getAllByTestId } = render(
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<CharacterList />}></Route>
          </Routes>
        </BrowserRouter>
      );

      expect(getAllByTestId("character-title")).toBeTruthy();
      expect(getAllByTestId("character-counter")).toBeTruthy();
    });
  });

  test("User can filter", async () => {
    await act(async () => {
      const { getAllByTestId, getByText, getByLabelText } = render(
        <Filters
          handleFilters={() => {}}
          onFilter={() => {}}
          cleanFilter={() => {}}
          fields={{
            name: "",
            gender: "",
          }}
        />
      );

      expect(getAllByTestId("name")).toBeTruthy();
      expect(getAllByTestId("gender")).toBeTruthy();
      expect(getAllByTestId("button-filter")).toBeTruthy();
      expect(getAllByTestId("button-clean")).toBeTruthy();

      fireEvent.change(getByLabelText('Name'), {
        target: { value: 'Morty' }
      })     

      fireEvent.click(getByText('Filter'))
      await act(async () => {
        API.GetCharacters.mockImplementation(() => Promise.resolve(Characters));        
      });

      fireEvent.click(getByText('Clean'))
    });
  });
});
