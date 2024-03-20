import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { ChevronDown, ChevronsDown, MessageSquareText } from "lucide-react";

const DropDown = () => {
  return (
    <Collapsible className="w-full">
      <div className="w-full flex justify-between items-center ">
        <div className="flex justify-center items-center gap-1 ">
          <MessageSquareText />
          <span>Discussion Fourm</span>
        </div>
        <CollapsibleTrigger>
        <ChevronDown />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          option1
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          option2
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default DropDown;
