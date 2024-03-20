    import React from "react";
    import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    } from "./ui/card";
    import Image from "next/image";

    interface itemProps {
    name: String;
    description: String;
    src: string;
    }

    const Stories = ({ item }: { item: itemProps }) => {
    return (
        <Card className="w-[400px] p-1">
        <div className=" flex justify-center items-center">
            <Image
            src={item.src}
            alt="stories image"
            width="390"
            height="390"
            className="object-contain rounded-lg"
            priority
            />
        </div>
        <CardHeader>
            <CardTitle>{item.name}</CardTitle>
            <CardDescription className="text-justify">
            {item.description}
            </CardDescription>
        </CardHeader>
        </Card>
    );
    };

    export default Stories;
