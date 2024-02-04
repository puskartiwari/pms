import React from "react";
import TabsDemo from "./tab";

const TabPage = () => {
  return (
    <div className="flex justify-center w-full">
      <TabsDemo
        title="Client Setting"
        individual="Individual Clients"
        organization="Organisation Clients"
        entity="Entity Types"
      />
      ;
    </div>
  );
};

export default TabPage;
