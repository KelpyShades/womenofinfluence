"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { useQuery } from "convex-helpers/react/cache/hooks";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Plus, Edit2, Trash2, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

const programSchema = z.object({
  title: z.string().min(2, "Title is required"),
  description: z.string().min(5, "Description must be at least 5 characters"),
  price: z.string().min(1, "Price is required"),
  isActive: z.boolean(),
});

type ProgramFormValues = z.infer<typeof programSchema>;

export default function ProgramsPage() {
  const programs = useQuery(api.programs.getPrograms);
  const addProgram = useMutation(api.programs.addProgram);
  const updateProgram = useMutation(api.programs.updateProgram);
  const deleteProgram = useMutation(api.programs.deleteProgram);

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [editingId, setEditingId] = useState<Id<"programs"> | null>(null);

  const [confirmState, setConfirmState] = useState<{
    isOpen: boolean;
    programId: Id<"programs"> | null;
  }>({
    isOpen: false,
    programId: null,
  });

  const form = useForm<ProgramFormValues>({
    resolver: zodResolver(programSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      isActive: true,
    },
  });

  const { isSubmitting } = form.formState;

  const openAddSheet = () => {
    setEditingId(null);
    form.reset({ title: "", description: "", price: "", isActive: true });
    setIsSheetOpen(true);
  };

  const openEditSheet = (program: any) => {
    setEditingId(program._id);
    form.reset({
      title: program.title,
      description: program.description,
      price: program.price,
      isActive: program.isActive,
    });
    setIsSheetOpen(true);
  };

  const handleDelete = (id: Id<"programs">) => {
    setConfirmState({
      isOpen: true,
      programId: id,
    });
  };

  const confirmDelete = async () => {
    if (confirmState.programId) {
      await deleteProgram({ id: confirmState.programId });
    }
  };

  const onSubmit = async (values: ProgramFormValues) => {
    if (editingId) {
      await updateProgram({ id: editingId, ...values });
    } else {
      await addProgram(values);
    }
    setIsSheetOpen(false);
  };

  if (programs === undefined) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-400" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
            Programs
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            Manage your academy's courses and programs.
          </p>
        </div>
        <Button onClick={openAddSheet}>
          <Plus className="mr-2 h-4 w-4" /> Add Program
        </Button>
      </div>

      <div className="rounded-md border border-zinc-200 bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[70px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {programs.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center h-24 text-zinc-500"
                >
                  No programs found.
                </TableCell>
              </TableRow>
            ) : (
              programs.map((program) => (
                <TableRow key={program._id}>
                  <TableCell className="font-medium">{program.title}</TableCell>
                  <TableCell>{program.price}</TableCell>
                  <TableCell>
                    {program.isActive ? (
                      <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-zinc-50 px-2 py-1 text-xs font-medium text-zinc-600 ring-1 ring-inset ring-zinc-500/10">
                        Inactive
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={
                          <Button variant="ghost" className="h-8 w-8 p-0" />
                        }
                      >
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => openEditSheet(program)}
                        >
                          <Edit2 className="mr-2 h-4 w-4" />
                          Edit details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-600 focus:text-red-600"
                          onClick={() => handleDelete(program._id)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <DialogContent className="sm:max-w-md overflow-y-auto max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>
              {editingId ? "Edit Program" : "Add New Program"}
            </DialogTitle>
            <DialogDescription>
              Fill in the details for the program.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 pt-4"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="E.g., Women in Tech 2024"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Detailed description of the program..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price (GH₵)</FormLabel>
                    <FormControl>
                      <Input placeholder="E.g., 500" {...field} />
                    </FormControl>
                    <FormDescription>Leave empty if free</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isActive"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Active Status</FormLabel>
                      <FormDescription>
                        Is this program currently open for enrollment?
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {editingId ? "Save Changes" : "Create Program"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <ConfirmDialog
        open={confirmState.isOpen}
        onOpenChange={(open) =>
          setConfirmState((prev) => ({ ...prev, isOpen: open }))
        }
        title="Delete Program"
        description="Are you sure you want to delete this program? This action cannot be undone."
        onConfirm={confirmDelete}
      />
    </div>
  );
}
