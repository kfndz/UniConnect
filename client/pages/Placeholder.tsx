import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PlaceholderProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function Placeholder({ title, description, icon }: PlaceholderProps) {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[600px]">
        <div className="text-center max-w-md">
          {icon && (
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-2xl bg-primary-50 border border-primary-200 flex items-center justify-center text-primary-500">
                {icon}
              </div>
            </div>
          )}
          <h1 className="text-3xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-muted-foreground mb-8">{description}</p>
          <Button className="bg-primary-500 hover:bg-primary-600">
            Voltar ao Dashboard <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </Layout>
  );
}
