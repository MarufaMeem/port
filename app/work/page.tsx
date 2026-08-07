import { createMetadata } from "@/lib/metadata";
import { WorkGrid } from "@/components/projects/WorkGrid";

export const metadata = createMetadata({
  title: "Selected Work — ITHelper",
  description:
    "Explore selected web development projects and digital experiences built by ITHelper.",
  path: "/work",
});

export default function WorkPage() {
  return <WorkGrid />;
}
