"use client"

import { CalendarIcon, ChartIcon, ChatIcon, PeopleIcon, TicketIcon } from "@/components/Icons"
import * as React from "react"

import { NavUser } from "@/components//nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from "@/components//sidebar"
import Image from "next/image"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: ChartIcon,
      isActive: true,
    },
    {
      title: "Tickets",
      url: "#",
      icon: TicketIcon,
      isActive: false,
    },
    {
      title: "Chat",
      url: "#",
      icon: ChatIcon,
      isActive: false,
    },
    {
      title: "Perfil",
      url: "#",
      icon: PeopleIcon,
      isActive: false,
    },
    {
      title: "Simulação",
      url: "#",
      icon: CalendarIcon,
      isActive: false,
    },
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const [activeItem, setActiveItem] = React.useState(data.navMain[0])
  const { setOpen } = useSidebar()

  return (
    <Sidebar
      collapsible="none"
      className=" *:data-[sidebar=sidebar]:flex-row bg-foreground h-screen fixed rounded-br-3xl rounded-tr-3xl  shadow-[0px_0px_6px_0px_rgba(0,0,0,0.7)]"
    >
      <Sidebar
        collapsible="none"
        className="w-20! mx-auto bg-foreground "
      >
        <SidebarHeader className="self-start mx-auto mt-9">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="  md:h-8 md:p-0 hover:bg-transparent">
                <a href="#">
                  <Image src='/login/logo-icon.png' width={40} height={40} alt="Logo" />
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className="justify-center mx-auto">
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu className="mx-auto space-y-8">
                {data.navMain.map((item) => (
                  <SidebarMenuItem key={item.title} className="bg-button-third w-16 h-15 rounded-3xl flex items-center justify-center" >
                    <SidebarMenuButton
                      isActive={activeItem?.title === item.title}
                      className=" rounded-3xl flex items-center justify-center hover:bg-button-primary w-full h-full active:bg-button-primary/60 data-[active=true]:bg-button-primary data-[active=true]:shadow-[0px_0px_8px_0px_rgba(249,115,22,0.7)] shadow-button-primary"
                    >
                      <item.icon className="size-6!" />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="mb-20">
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>
    </Sidebar>
  )
}
