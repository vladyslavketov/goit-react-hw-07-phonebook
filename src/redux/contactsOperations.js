import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://63cc24e99b72d2a88e08e7ea.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',

  async () => {
    const response = await fetch(`${BASE_URL}/contacts`);
    console.log(response);
    return response;
  },
);