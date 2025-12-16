import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { SidebarProvider } from "@/components/sidebar";

export default function AuthenticatedLayout(
    {
        children,
    }: {
        children: React.ReactNode;
    }
) {

    return <SidebarProvider
        style={
            {
                "--sidebar-width": "140px",
            } as React.CSSProperties
        }
    >
        <Header />
        <AppSidebar />
        {children}
    </SidebarProvider>

}