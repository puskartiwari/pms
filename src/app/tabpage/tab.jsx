"use client";

import React from "react";
import { Button } from "@/components/ui/button";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTableDemo } from "./individual";
import EntityType from "./entity";
// import Individual from "./individualentity";

export default function TabsDemo({ title, individual, organization, entity }) {
  return (
    <>
      <div className="bg-slate-100 w-full p-5">
        <h1 className="flex justify-start font-medium text-4xl font-rubik text-blue-900">
          {title}
        </h1>
        <div className="justify-start w-full">
          <Tabs
            defaultValue="account"
            className="w-full justify-between ring-offset-0">
            <TabsList className="flex flex-row  justify-between">
              <div className="flex flex-row w-full justify-around bg-white  ">
                <div>
                  <TabsTrigger
                    value="account"
                    className="data-[state=active]:border-b-blue-500 data-[state=active]:border-b-2 rounded-none data-[state=active]:bg-white bg-white
                  font-medium text-xl font-rubik whitespace-normal data-[state=active]:text-blue-900">
                    {individual}
                  </TabsTrigger>
                </div>
                <div>
                  <TabsTrigger
                    value="password"
                    className="data-[state=active]:border-b-blue-500 data-[state=active]:border-b-2 rounded-none  data-[state=active]:bg-white bg-white
                  font-medium text-xl font-rubik data-[state=active]:text-blue-900">
                    {organization}
                  </TabsTrigger>
                </div>
                <div>
                  <TabsTrigger
                    value="entity"
                    className="data-[state=active]:border-b-blue-500 data-[state=active]:border-b-2 rounded-none data-[state=active]:bg-white bg-white
                  font-medium text-xl font-rubik data-[state=active]:text-blue-900">
                    {entity}
                  </TabsTrigger>
                </div>
              </div>
            </TabsList>
            <TabsContent value="account">
              <Card>
                <div className="p-5">
                  <DataTableDemo />
                </div>
                {/* <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Make changes to your account here. Click save when you're
                    done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@peduarte" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter> */}
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <div className="p-5">
                  <DataTableDemo />
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="entity">
              <EntityType />
              {/* <Card>
                <CardHeader>
                  <CardTitle>Entity</CardTitle>

                  <CardDescription>
                    Change your password here. After saving, you'll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card> */}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
