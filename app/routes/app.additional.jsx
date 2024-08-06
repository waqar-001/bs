// routes/app/additional.jsx
import React from 'react';
import { TitleBar } from '@shopify/app-bridge-react';
import { getRecords } from '../my.js'; // Adjust the import path if necessary

export const loader = async () => {
  const records = await getRecords();
  console.log(records);
  return records;
};
