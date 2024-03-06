"use client";
// vendors
import { useEffect, useState } from "react";

// components
import Content from "@/components/organisms/Content";
import { EmptyState } from "@/components/molecules";
import Navbar from "@/components/organisms/Navbar";
import Sidebar from "@/components/organisms/Sidebar";
import UserActions from "@/components/organisms/UserActions";

// styles
import { Main } from "../pageStyles";

// data
import { initiativesData } from "@/components/organisms/Content/data";

// types
import { Initiatives } from "@/components/organisms/Content/types";

export default function Home() {
  const [data, setData] = useState<Initiatives[]>([]);

  useEffect(() => {
    setData(initiativesData);
  }, []);

  return (
    <Main>
      <Navbar />
      <Sidebar />
      <UserActions />
      {(data.length && <Content initiatives={data} />) || <EmptyState />}
    </Main>
  );
}
