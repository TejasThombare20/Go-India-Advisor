"use client";
import { useState } from "react";
import DisscussionForum from "@/components/DiscussionForum";
import Drawer from "@/components/Drawer";
import MarketStories from "@/components/MarketStories";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const [open, setopen] = useState<boolean>(false);
  // console.log("open", open);

  return (
    <main>
      <div
        className={`w-full  md:flex mx-auto hidden  justify-between items-start ${
          open ? "w-full" : "max-w-7xl"
        }`}
      >
        <div className={open ? "w-full " : ""}>
          <Drawer open={open} setopen={setopen} />
        </div>
        <div className="w-full flex items-center justify-center ">
          <DisscussionForum />
        </div>
        <div className="w-full flex justify-center items-center">
          <MarketStories />
        </div>
      </div>
      <div className="w-full md:hidden flex justify-center items-center ">
        <div className={open ? "w-full" : ""}>
          <Drawer open={open} setopen={setopen} />
        </div>
        <Tabs defaultValue="account" className="w-[430px] ">
          <TabsList className="grid w-full grid-cols-2 bg-indigo-400">
            <TabsTrigger value="Discussion">Discussion Fourm</TabsTrigger>
            <TabsTrigger value="Market">Market Stories</TabsTrigger>
          </TabsList>
          <TabsContent value="Discussion">
            <div className="w-full flex justify-center items-center">
              <DisscussionForum />
            </div>
          </TabsContent>
          <TabsContent value="Market">
            <div className=" w-full flex justify-center items-center">
              <MarketStories />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
