'use server';

/**
 * @fileOverview A flow for generating intervention suggestions based on student self-feedback.
 *
 * - getInterventionSuggestions - A function that takes student self-feedback as input and returns suggested intervention measures.
 * - SelfFeedbackInput - The input type for the getInterventionSuggestions function.
 * - InterventionSuggestionsOutput - The return type for the getInterventionSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SelfFeedbackInputSchema = z.object({
  selfFeedback: z
    .string()
    .describe('Free-form text describing how the student is feeling.'),
  studentId: z.string().describe('The unique identifier of the student.'),
});
export type SelfFeedbackInput = z.infer<typeof SelfFeedbackInputSchema>;

const InterventionSuggestionsOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('An array of suggested intervention measures.'),
});
export type InterventionSuggestionsOutput = z.infer<
  typeof InterventionSuggestionsOutputSchema
>;

export async function getInterventionSuggestions(
  input: SelfFeedbackInput
): Promise<InterventionSuggestionsOutput> {
  return selfFeedbackInterventionSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'selfFeedbackInterventionSuggestionsPrompt',
  input: {schema: SelfFeedbackInputSchema},
  output: {schema: InterventionSuggestionsOutputSchema},
  prompt: `You are an AI assistant designed to provide helpful intervention suggestions for students based on their self-reported feelings.

  Given the following self-feedback from a student, generate a list of potential intervention measures. These suggestions should be specific and actionable, such as "Try a breathing exercise," or "Reach out to the school counselor."

  Self-Feedback: {{{selfFeedback}}}

  Suggestions should be tailored to the student's expressed feelings and aim to provide immediate and practical support.
  Keep in mind to generate suggestions that students can act upon themselves.
  Do not offer generic or unhelpful suggestions.
  Also consider that the student's id is {{{studentId}}}. Some intervention measure may consider who the student is.
  Format your response as a JSON array of strings.
  `,
});

const selfFeedbackInterventionSuggestionsFlow = ai.defineFlow(
  {
    name: 'selfFeedbackInterventionSuggestionsFlow',
    inputSchema: SelfFeedbackInputSchema,
    outputSchema: InterventionSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
