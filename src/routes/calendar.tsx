import { createFileRoute } from "@tanstack/react-router";
import { CalendarGrid } from "@/components/CalendarGrid";

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
  component: CalendarPage,
});

function CalendarPage() {
  return <CalendarGrid />;
}
