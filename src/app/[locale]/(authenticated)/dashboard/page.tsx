import Page from "@/modules/dashboard/page";

export default function DashboardPage() {
    return (
        <div className="bg-background w-full flex min-h-svh flex-col items-center justify-center">
            <div className="w-full max-w-[1920px] flex items-center justify-center">
                <Page />
            </div>
        </div>
    )
}
