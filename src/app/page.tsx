"use client";
import Image from "next/image";
import Content from "components/content";

export default function Home() {
  return (
    <main className="flex-1 position-relative pt-42 pb-42 page-content-inner">
      <Content />
    </main>
  );
}
