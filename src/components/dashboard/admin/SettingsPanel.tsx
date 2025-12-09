"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const settingsSchema = z.object({
  classThreshold: z.number().min(0).max(100),
  studentThreshold: z.number().min(0).max(100),
  emotionCategories: z.string().min(1, "Cannot be empty."),
});

export function SettingsPanel() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof settingsSchema>>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      classThreshold: 40,
      studentThreshold: 3,
      emotionCategories: "stressed, happy, confused, sad, neutral",
    },
  });

  function onSubmit(values: z.infer<typeof settingsSchema>) {
    setLoading(true);
    setTimeout(() => {
      toast({
        title: "Settings Saved!",
        description: "Your new configuration has been applied.",
      });
      setLoading(false);
    }, 1000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="classThreshold"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel>Class Stress Threshold (%)</FormLabel>
              <FormControl>
                <div className="flex items-center gap-4">
                  <Slider
                    min={0}
                    max={100}
                    step={5}
                    defaultValue={[value]}
                    onValueChange={(vals) => onChange(vals[0])}
                  />
                  <span className="font-bold w-12 text-center">{value}%</span>
                </div>
              </FormControl>
              <FormDescription>
                Alert when this percentage of students in a class are stressed.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="studentThreshold"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel>Repeated Student Stress Threshold</FormLabel>
               <FormControl>
                <div className="flex items-center gap-4">
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    defaultValue={[value]}
                    onValueChange={(vals) => onChange(vals[0])}
                  />
                   <span className="font-bold w-12 text-center">{value}</span>
                </div>
              </FormControl>
              <FormDescription>
                Alert when a student is stressed for this many consecutive checks.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emotionCategories"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Emotion Categories</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Comma-separated list of emotion labels your model outputs.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Configuration
        </Button>
      </form>
    </Form>
  );
}
