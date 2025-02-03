import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleAlert, Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

function DemoLayout({
  title,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { title: string }) {
  return (
    <section className="w-full max-w-none space-y-4 sm:max-w-xl">
      <h2 className="px-4 text-3xl font-semibold tracking-tight sm:px-8">
        {title}
      </h2>
      <div
        className={cn(
          "bg-background ring-foreground/10 px-4 py-8 shadow ring-1 sm:rounded-2xl sm:p-8",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </section>
  );
}

function AccordionDemo() {
  return (
    <DemoLayout title="Accordion">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            {
              "Yes. It's animated by default, but you can disable it if you prefer."
            }
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </DemoLayout>
  );
}

function AlertDemo() {
  return (
    <DemoLayout title="Alert" className="space-y-4">
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <CircleAlert className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    </DemoLayout>
  );
}

export default function HomePage() {
  return (
    <main className="bg-secondary flex min-h-screen flex-col items-center justify-center space-y-16 py-16">
      <AccordionDemo />
      <AlertDemo />
    </main>
  );
}
