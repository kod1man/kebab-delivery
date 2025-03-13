import React from 'react';

import { tailspin } from 'ldrs';

tailspin.register();

export default function Loader({ children, isLoading }) {
  console.log(isLoading);
  return isLoading ? (
    <div
      style={{
        textAlign: 'center',
        paddingTop: '25%',
      }}
    >
      <l-tailspin size="70" stroke="5" speed="0.9" color="white"></l-tailspin>
    </div>
  ) : (
    children
  );
}
