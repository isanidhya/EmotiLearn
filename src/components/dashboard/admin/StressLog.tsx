import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

const incidents = [
    { id: 'inc-001', student: 'Diana', class: 'Grade 10 - Math', date: '2023-10-27 11:30', status: 'pending' },
    { id: 'inc-002', student: 'Ethan', class: 'Grade 10 - Math', date: '2023-10-27 11:28', status: 'reviewed' },
    { id: 'inc-003', student: 'Alice', class: 'Grade 9 - Science', date: '2023-10-27 09:15', status: 'resolved' },
    { id: 'inc-004', student: 'Gary', class: 'Grade 11 - English', date: '2023-10-26 14:05', status: 'resolved' },
    { id: 'inc-005', student: 'Helen', class: 'Grade 10 - Math', date: '2023-10-26 10:00', status: 'reviewed' },
];

const getStatusBadgeVariant = (status: string) => {
    switch (status) {
        case 'pending': return 'destructive';
        case 'reviewed': return 'default';
        case 'resolved': return 'secondary';
        default: return 'outline';
    }
}

export function StressLog() {
  return (
    <div className="max-h-[400px] overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
                <Button variant="ghost" size="sm">
                    Student <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            </TableHead>
            <TableHead>Class</TableHead>
            <TableHead>
                 <Button variant="ghost" size="sm">
                    Date <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {incidents.map((incident) => (
            <TableRow key={incident.id}>
              <TableCell className="font-medium">{incident.student}</TableCell>
              <TableCell>{incident.class}</TableCell>
              <TableCell>{incident.date}</TableCell>
              <TableCell>
                  <Badge variant={getStatusBadgeVariant(incident.status)} className="capitalize">{incident.status}</Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm">View Details</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
