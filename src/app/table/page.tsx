import { promises as fs } from "fs";
import { Metadata } from "next";
import path from "path";
import { z } from "zod";

import { columns } from "@/components/dataTable/columns";
import { DataTable } from "@/components/dataTable/data-table";
import { taskSchema } from "@/components/dataTable/data/schema";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "/src/components/dataTable/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <Header />
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
