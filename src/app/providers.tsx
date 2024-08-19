import { ThemeProvider } from '@/app/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  )
}
