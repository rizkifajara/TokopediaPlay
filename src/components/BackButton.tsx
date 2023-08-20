"use client"

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <button className="text-5xl font-bold mx-10" onClick={() => router.back()}>{"<"}</button>
  );
}