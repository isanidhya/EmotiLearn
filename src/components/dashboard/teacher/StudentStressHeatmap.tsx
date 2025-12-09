import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const students = [
  { id: "1", name: "Alice", emotion: "stressed", confidence: 0.92 },
  { id: "2", name: "Bob", emotion: "neutral", confidence: 0.85 },
  { id: "3", name: "Charlie", emotion: "happy", confidence: 0.98 },
  { id: "4", name: "Diana", emotion: "stressed", confidence: 0.78 },
  { id: "5", name: "Ethan", emotion: "stressed", confidence: 0.95 },
  { id: "6", name: "Fiona", emotion: "confused", confidence: 0.65 },
];

const getEmotionBadgeVariant = (emotion: string) => {
  switch (emotion) {
    case "stressed": return "destructive";
    case "happy": return "secondary"; // Using secondary for green
    case "confused": return "default";
    case "sad": return "outline";
    default: return "default";
  }
};

const getConfidenceColor = (confidence: number) => {
    if (confidence > 0.9) return "bg-red-500/20";
    if (confidence > 0.75) return "bg-orange-500/20";
    if (confidence > 0.6) return "bg-yellow-500/20";
    return "bg-green-500/20";
}


export function StudentStressHeatmap() {
  return (
    <div className="h-[350px] overflow-y-auto">
        <Table>
        <TableHeader>
            <TableRow>
            <TableHead>Student</TableHead>
            <TableHead>Emotion</TableHead>
            <TableHead className="text-right">Confidence</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {students.map((student) => (
            <TableRow key={student.id} className={student.emotion === 'stressed' ? getConfidenceColor(student.confidence) : ''}>
                <TableCell>
                    <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={`https://i.pravatar.cc/32?u=${student.id}`} />
                        <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{student.name}</span>
                    </div>
                </TableCell>
                <TableCell>
                <Badge variant={getEmotionBadgeVariant(student.emotion)} className="capitalize">
                    {student.emotion}
                </Badge>
                </TableCell>
                <TableCell className="text-right font-medium">
                {(student.confidence * 100).toFixed(0)}%
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </div>
  );
}
