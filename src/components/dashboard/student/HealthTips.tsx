import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DashboardCard } from "@/components/dashboard/DashboardCard";

const tips = [
  {
    title: "Practice Mindful Breathing",
    content: "Take a few deep breaths. Inhale for 4 seconds, hold for 4, and exhale for 6. This can calm your nervous system instantly.",
  },
  {
    title: "Take a Short Break",
    content: "Step away from your work for 5-10 minutes. Stretch, walk around, or look out a window. A change of scenery can reset your focus.",
  },
  {
    title: "Connect with a Friend",
    content: "A quick chat with a friend or family member can provide support and perspective. You're not alone.",
  },
  {
    title: "Jot Down Your Thoughts",
    content: "Writing down what's bothering you can make it feel more manageable. It's like decluttering your mind.",
  },
];

export function HealthTips() {
  return (
    <DashboardCard title="Quick Mental Health Tips">
      <Accordion type="single" collapsible className="w-full">
        {tips.map((tip, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{tip.title}</AccordionTrigger>
            <AccordionContent>{tip.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </DashboardCard>
  );
}
