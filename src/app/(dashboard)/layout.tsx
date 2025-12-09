

"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  Bell,
  BarChart2,
  PieChart,
  Users,
  Settings,
  ShieldAlert,
  LayoutDashboard,
  LogOut,
  User,
  HeartPulse,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Role = "student" | "teacher" | "admin" | null;

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [role, setRole] = useState<Role>(null);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole") as Role;
    const storedName = localStorage.getItem("userName");
    if (!storedRole) {
      router.replace("/");
    } else {
      setRole(storedRole);
      setUserName(storedName);
    }
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("userRole");
      localStorage.removeItem("userName");
      router.replace("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  
  if (!role) {
    return (
      <div className="flex h-screen items-center justify-center">
        {/* You can add a loading spinner here */}
      </div>
    );
  }

  const getNavItems = (role: Role) => {
    const commonItems = [
      {
        href: `/${role}`,
        icon: LayoutDashboard,
        label: "Dashboard",
        isActive: pathname === `/${role}`,
      },
    ];

    switch (role) {
      case "student":
        return [
          ...commonItems,
          {
            href: "/student/well-being",
            icon: HeartPulse,
            label: "Well-being",
            isActive: pathname.startsWith("/student/well-being"),
          },
        ];
      case "teacher":
        return [
          ...commonItems,
          {
            href: "/teacher/classes",
            icon: Users,
            label: "Classes",
            isActive: pathname.startsWith("/teacher/classes"),
          },
          {
            href: "/teacher/alerts",
            icon: Bell,
            label: "Alerts",
            isActive: pathname.startsWith("/teacher/alerts"),
          },
        ];
      case "admin":
        return [
          ...commonItems,
          {
            href: "/admin/analytics",
            icon: BarChart2,
            label: "Analytics",
            isActive: pathname.startsWith("/admin/analytics"),
          },
          {
            href: "/admin/incidents",
            icon: ShieldAlert,
            label: "Incidents",
            isActive: pathname.startsWith("/admin/incidents"),
          },
          {
            href: "/admin/users",
            icon: Users,
            label: "User Management",
            isActive: pathname.startsWith("/admin/users"),
          },
          {
            href: "/admin/settings",
            icon: Settings,
            label: "Settings",
            isActive: pathname.startsWith("/admin/settings"),
          },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems(role);
  const profileItem = {
    href: "/profile",
    icon: User,
    label: "Profile",
    isActive: pathname === "/profile",
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <PieChart className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-headline font-semibold">EmotiLearn</h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href}>
                  <SidebarMenuButton
                    isActive={item.isActive}
                    tooltip={{ children: item.label }}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
             <SidebarMenuItem>
              <Link href={profileItem.href}>
                <SidebarMenuButton
                  isActive={profileItem.isActive}
                  tooltip={{ children: profileItem.label }}
                >
                  <profileItem.icon />
                  <span>{profileItem.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarSeparator />
           <div className="flex items-center gap-3 p-2">
            <Avatar>
              <AvatarImage src={`https://i.pravatar.cc/40?u=${userName}`} />
              <AvatarFallback>{userName?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col overflow-hidden">
                <span className="font-semibold truncate">{userName}</span>
                <span className="text-xs text-muted-foreground capitalize">{role}</span>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto" onClick={handleLogout} >
                <LogOut className="w-4 h-4"/>
            </Button>
           </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center justify-between p-4 border-b bg-card md:bg-transparent md:border-none">
          <SidebarTrigger className="md:hidden"/>
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-headline text-2xl font-semibold capitalize">
              {role} Dashboard
            </h2>
          </div>
          <Button variant="ghost" size="icon">
            <Bell />
          </Button>
        </header>
        <main className="flex-1 p-4 md:p-6 bg-background">
          {children}
          <footer className="text-center mt-8 text-sm text-muted-foreground">
            Disclaimer: This tool assists awareness, not medical diagnosis.
          </footer>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
