import { useState } from 'react';
import { Button } from './components/button/Mybutton';
import { Toolbar } from './components/Toolbar/Toolbar';

export default function App() {

  return (
    <>
      <Toolbar
        onPlayMovie={() => alert('Playing!')}
        onUploadImage={() => alert('Uploading!')}
    />
    </>
  )
}
