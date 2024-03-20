import React from "react";
import ProfileCard from "./ProfileCard";

const dummyData = [
  {
    name: "Alice Smith",
    description: "A passionate explorer of the world's hidden treasures.",
    Likes: "5.2K",
    Watching: "1.8K",
    comments: "1.2K",
    duration: "4 min",
  },
  {
    name: "Bob Johnson",
    description: "Enthusiastic learner embracing challenges with a smile.",
    Likes: "7.9K",
    Watching: "3.4K",
    comments: "2.6K",
    duration: "6 min",
  },
  {
    name: "Emma Brown",
    description: "Dreamer with a passion for storytelling and creativity.",
    Likes: "3.6K",
    Watching: "1.1K",
    comments: "900",
    duration: "3 min",
  },

  {
    name: "Sophia Wilson",
    description: "Curious mind with a passion for uncovering mysteries.",
    Likes: "8.5K",
    Watching: "2.9K",
    comments: "2.1K",
    duration: "5 min",
  },
  {
    name: "Michael Davis",
    description:
      "Adventurous soul seeking thrills in every corner of the world.",
    Likes: "12.3K",
    Watching: "4.7K",
    comments: "3.8K",
    duration: "8 min",
  },
];

const DisscussionForum = () => {
  return (
    <section className="w-full text-2xl flex flex-col justify-center items-center mt-2 gap-4">
      <h3 className="text-red-600 font-bold ">DISCUSSION FOURM</h3>
      <div className="flex flex-col justify-center items-center w-full gap-8">
        {dummyData.map((data) => (
          <ProfileCard data={data} />
        ))}
      </div>
    </section>
  );
};

export default DisscussionForum;
