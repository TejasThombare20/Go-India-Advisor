  import React from "react";
  import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
  import { Eye, Heart, MessageSquare, Share2 } from "lucide-react";

  interface dataProps {
    name: String;
    description: String;
    Likes: String;
    Watching: String;
    comments: String;
    duration: String;
  }

  const ProfileCard = ({ data }: { data: dataProps }) => {
    return (
      <div className=" bg-slate-100/90 rounded-lg drop-shadow-lg shadow-slate-400 p-2 antialiased w-[430px] md:w-[600px]  mx-2">
        <div className=" font-serif w-full flex justify-center items-start gap-3 ">
          <div className=" w-[30px] md:w-[50px]">
            <Avatar>
              <AvatarImage
                className=" w-8 h-8 rounded-full md:w-10 md:h-10"
                src="https://media.istockphoto.com/id/587805156/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=gkvLDCgsHH-8HeQe7JsjhlOY6vRBJk_sKW9lyaLgmLo="
              />
              <AvatarFallback>TT</AvatarFallback>
            </Avatar>
          </div>
          <div className=" w-[320px] md:w-[450px] flex flex-col justify-center items-start text-[14px] md:text-[18px] ">
            <div className=" flex justify-center items-center gap-3">
              <h4>{data.name}</h4>
              <div className="rounded-3xl bg-blue-600 px-3  text-white font-[15px] tracking-tighter  ">
                Sector 2
              </div>
            </div>
            <p className="text-wrap">{data.description}</p>
            <ul className="w-full flex justify-between items-start ">
              <li className="flex justify-center items-center gap-1 ">
                <Heart />
                <span>{data.Likes}</span>
              </li>
              <li className="flex justify-center items-center gap-1">
                <Eye />
                <span>{data.Watching}</span>
              </li>
              <li className="flex justify-center items-center gap-1">
                <MessageSquare />
                <span>{data.comments} comments</span>
              </li>
              <li className="flex justify-center items-center gap-1">
                <Share2 />
                <span> share</span>
              </li>
            </ul>
          </div>

          <div className="text-nowrap w-[35px] md:w-[80px] text-blue-500 text-[10px] md:text-sm">
            {data.duration} ago
          </div>
        </div>
      </div>
    );
  };

  export default ProfileCard;
