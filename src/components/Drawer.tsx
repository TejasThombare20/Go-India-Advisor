import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  BadgeDollarSign,
  BellRing,
  ChevronRight,
  ChevronsDown,
  MessageSquareText,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Button } from "./ui/button";
import DropDown from "./DropDown";

const Drawer = ({
  open,
  setopen,
}: {
  open: Boolean;
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Sheet>
      <SheetTrigger
        className="absolute  left-0 top-[50%] z-50 "
        onClick={() => {
          setopen(!open);
        }}
      >
        <div className="w-5 h-20 bg-indigo-600 flex justify-center items-center ">
          <ChevronRight />
        </div>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className=" bg-indigo-400"
        open={open}
        setopen={setopen}
      >
        <SheetHeader className="mt-4">
          <SheetTitle>
            <div className="flex items-center justify-between mx-2 gap-2">
              <div className="flex justify-center items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://media.istockphoto.com/id/587805156/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=gkvLDCgsHH-8HeQe7JsjhlOY6vRBJk_sKW9lyaLgmLo=" />
                  <AvatarFallback>TT</AvatarFallback>
                </Avatar>
                <span className="">Hello,User</span>
              </div>
              <BellRing />
            </div>
          </SheetTitle>
          <SheetDescription>
            <div className=" w-full flex flex-col justify-center items-start gap-8 text-black">
              <DropDown />
              <div className=" w-full flex justify-start items-center ">
                {/* <BadgeDollarSign /> */}
                <span>Market Stories</span>
              </div>
              <span>Sentiment</span>
              <span>Market</span>
              <span>Sector</span>
              <span>WatchList</span>
              <span>Events</span>
              <span>News/interviews</span>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;
