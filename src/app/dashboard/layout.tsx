import Sidebar from "@/components/dashboard/global/Sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-screen max-w-screen-2xl"
    >
      <ResizablePanel defaultSize={25}>
        <Sidebar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <ScrollArea className="flex h-screen items-center justify-center p-6">
          {children}
        </ScrollArea>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
