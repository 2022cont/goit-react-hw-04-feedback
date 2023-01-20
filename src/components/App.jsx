import React from 'react';
import Section from './feedback';

export default function App() {
   return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101'
        }}
      >
        <Section title="Please live feedback"/>

      </div>
    );
} 