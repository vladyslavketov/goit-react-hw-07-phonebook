import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOperations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      {
        createdAt: '2023-01-21T01:56:06.613Z',
        name: 'Stacy Abernathy',
        phone: '395-792-1498',
        id: '1',
      },
      {
        createdAt: '2023-01-21T21:45:15.973Z',
        name: 'Tonya Gerlach II',
        phone: '683-595-9832',
        id: '2',
      },
      {
        createdAt: '2023-01-21T12:54:25.438Z',
        name: 'Lucy Steuber',
        phone: '783-405-3629',
        id: '3',
      },
    ],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchAll(state, action) {},
    addContact(state, action) {},
    deleteContact(state, action) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => { console.log(state.items) })
  },
});
export const { fetchAll, addContact, deleteContact } = contactsSlice.actions;