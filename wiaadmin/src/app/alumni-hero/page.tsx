"use client";

import { useState, useEffect } from "react";
import { useMutation } from "convex/react";
import { useQuery } from "convex-helpers/react/cache/hooks";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Image as ImageIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const heroSchema = z.object({
  name: z.string().min(2, "Name is required"),
  role: z.string().min(2, "Role is required"),
});

type FormValues = z.infer<typeof heroSchema>;

export default function AlumniHeroPage() {
  const hero = useQuery(api.alumniHero.getAlumniHero);
  const updateHero = useMutation(api.alumniHero.updateAlumniHero);
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(heroSchema),
    defaultValues: {
      name: "",
      role: "",
    },
  });

  // Populate form when data loads
  useEffect(() => {
    if (hero) {
      form.reset({
        name: hero.name,
        role: hero.role,
      });
    }
  }, [hero, form]);

  const handleUpload = async (file: File) => {
    const postUrl = await generateUploadUrl();
    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": file.type },
      body: file,
    });
    const { storageId } = await result.json();
    return storageId as Id<"_storage">;
  };

  const onSubmit = async (values: FormValues) => {
    setIsUploading(true);
    try {
      let imageId: Id<"_storage"> | undefined = undefined;

      if (selectedImage) {
        imageId = await handleUpload(selectedImage);
      } else if (hero?.imageId) {
        imageId = hero.imageId;
      }

      if (!imageId) {
        alert("Please select an image");
        return;
      }

      await updateHero({
        ...values,
        imageId,
      });
      
      setSelectedImage(null);
      alert("Successfully updated Alumni Hero!");
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      setIsUploading(false);
    }
  };

  if (hero === undefined) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-400" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Alumni Hero</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Manage the highlighted Alumni hero displayed on the main website.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Edit Hero Details</CardTitle>
            <CardDescription>Update the name, role, and image of the highlighted alumni.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Ama" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role / Achievement</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Founder of ..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-2">
                  <FormLabel>Hero Image (High Quality)</FormLabel>
                  <Input 
                    type="file" 
                    accept="image/*"
                    onChange={(e) => setSelectedImage(e.target.files?.[0] || null)}
                  />
                  <p className="text-xs text-zinc-500">
                    Leave empty to keep the current image.
                  </p>
                </div>

                <div className="pt-2">
                  <Button type="submit" disabled={isUploading} className="w-full">
                    {isUploading ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...</>
                    ) : "Save Changes"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Hero</CardTitle>
          </CardHeader>
          <CardContent>
            {hero ? (
              <div className="flex flex-col items-center text-center space-y-4">
                {hero.imageUrl ? (
                  <div className="aspect-[3/4] w-full max-w-[240px] overflow-hidden rounded-lg border border-zinc-200">
                    <img src={hero.imageUrl} alt={hero.name} className="h-full w-full object-cover" />
                  </div>
                ) : (
                  <div className="flex aspect-[3/4] w-full max-w-[240px] items-center justify-center rounded-lg bg-zinc-100 border border-zinc-200">
                    <ImageIcon className="h-10 w-10 text-zinc-400" />
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900">{hero.name}</h3>
                  <p className="text-sm text-zinc-500">{hero.role}</p>
                </div>
              </div>
            ) : (
              <div className="flex h-48 flex-col items-center justify-center text-zinc-500 text-center">
                <ImageIcon className="h-8 w-8 mb-2 opacity-50" />
                <p>No alumni hero set yet.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
