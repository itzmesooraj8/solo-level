import { createFileRoute } from "@tanstack/react-router";
import { CalendarGrid } from "@/components/CalendarGrid";
import { DayDetailSheet } from "@/components/DayDetailSheet";
import { useState } from "react";
import { format } from "date-fns";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "Calendar — Hunter System" },
      {
        name: "description",
        content: "Visualize daily performance with a neon Hunter heatmap.",
      },
      { property: "og:title", content: "Hunter Calendar" },
      {
        property: "og:description",
        content: "Monthly heatmap of perfect, partial and failed days.",
      },
    ],
  }),
  component: CalendarPage,
});

function CalendarPage() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <CalendarGrid onDayClick={(date) => setSelectedDay(format(date, "yyyy-MM-dd"))} />
      <DayDetailSheet dateKey={selectedDay} onClose={() => setSelectedDay(null)} />
    </div>
  );
}
