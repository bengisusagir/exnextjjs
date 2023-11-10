'use client'
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
             <div >
      <input placeholder='f Name' onChange={(e)=>setName(e.target.value)}/>
     <input placeholder='Password'  onChange={(e)=>setPassword(e.target.value)}/>
      </div>
    </main>
  )
}
