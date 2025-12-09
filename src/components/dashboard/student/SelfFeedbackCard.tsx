"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getInterventionSuggestions } from "@/ai/flows/self-feedback-intervention-suggestions";
import { DashboardCard } from "../DashboardCard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Wand2 } from "lucide-react";

const feedbackSchema = z.object({
  selfFeedback: z.string().min(10, "Please describe in a bit more detail.").max(500, "Feedback is too long."),
});

export function SelfFeedbackCard() {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof feedbackSchema>>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: { selfFeedback: "" },
  });

  async function onSubmit(values: z.infer<typeof feedbackSchema>) {
    setLoading(true);
    setError(null);
    setSuggestions([]);

    try {
      const result = await getInterventionSuggestions({
        selfFeedback: values.selfFeedback,
        studentId: "student-01", // Mock studentId
      });
      if (result && result.suggestions) {
        setSuggestions(result.suggestions);
      }
    } catch (e) {
      setError("Failed to get suggestions. Please try again later.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <DashboardCard
      title="How are you feeling?"
      description="Share your thoughts, and we can suggest some helpful actions."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="selfFeedback"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="e.g., I'm feeling overwhelmed with my upcoming exams..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Get Suggestions
          </Button>
        </form>
      </Form>

      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {suggestions.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Here are some suggestions for you:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground bg-secondary/30 p-4 rounded-md">
            {suggestions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      )}
    </DashboardCard>
  );
}
