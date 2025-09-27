import SideNav from "@/components/SideNav"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
        <div>
             <SideNav />
        </div>
    </div>
  )
}
