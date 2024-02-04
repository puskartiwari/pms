import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Individual = ({ title, icon }) => {
  return (
    <>
      <div className="flex flex-row  p-1">
        <Card>
          <div className="border-s-4 border-blue-300 rounded-md">
            <div className="flex flex row justify-between p-3 text-xl font-medium">
              <div className="flex flex-row">
                <div className="px-2">
                  <Image
                    src={"/edit.svg"}
                    width={22}
                    height={22}
                    alt="edit image"
                  />
                </div>
                {title}
              </div>

              <div className="flex flex-row border-2 rounded-md">
                <div className="p-2">
                  <Image
                    src={"/search.svg"}
                    width={20}
                    height={20}
                    alt="search image"
                  />
                </div>
                <div className="space-y-1 w-16 h-10 border-0 rounded-none focus-visible:none border-input:none focus:outline-none ">
                  <Input placeholder="search here" />
                </div>
              </div>
            </div>

            {/* {" "}
            <CardHeader>
              <CardTitle className="flex flex-row">
                {icon}
                {title}
              </CardTitle>
              <CardDescription>dfef fsdfre</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter> */}
          </div>
        </Card>
      </div>
    </>
  );
};

export default Individual;
