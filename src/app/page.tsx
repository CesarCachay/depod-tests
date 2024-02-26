"use client";
// components
import EmptyState from "@/components/molecules/EmptyState";
import Navbar from "@/components/organisms/Navbar";
import Sidebar from "@/components/organisms/Sidebar";
import UserActions from "@/components/organisms/UserActions";

// styles
import { Main, Content } from "./pageStyles";

export default function Home() {
  return (
    <Main>
      <Navbar />
      <Sidebar />
      <UserActions />
      <EmptyState />
    </Main>
  );
}
