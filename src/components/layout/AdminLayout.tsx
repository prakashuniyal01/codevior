import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarTrigger, 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton, 
  SidebarInset
} from "@/components/ui/sidebar";
import Logo from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Settings, 
  Briefcase, 
  FileCode2, 
  Users, 
  MessageSquare, 
  LogOut 
} from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
  title?: string;
}

const AdminLayout = ({ children, title = "Admin Dashboard" }: AdminLayoutProps) => {
  const { user, isAdmin, isLoading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && (!user || !isAdmin)) {
      navigate("/auth");
    }
  }, [user, isAdmin, isLoading, navigate]);

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!user || !isAdmin) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center justify-between px-4 py-2">
              <Logo />
              <SidebarTrigger />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => navigate("/admin")}
                  isActive={window.location.pathname === "/admin"}
                >
                  <LayoutDashboard className="mr-2" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => navigate("/admin/services")}
                  isActive={window.location.pathname === "/admin/services"}
                >
                  <Settings className="mr-2" />
                  <span>Services</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => navigate("/admin/technologies")}
                  isActive={window.location.pathname === "/admin/technologies"}
                >
                  <FileCode2 className="mr-2" />
                  <span>Technologies</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => navigate("/admin/partners")}
                  isActive={window.location.pathname === "/admin/partners"}
                >
                  <Users className="mr-2" />
                  <span>Partners</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => navigate("/admin/portfolio")}
                  isActive={window.location.pathname === "/admin/portfolio"}
                >
                  <Briefcase className="mr-2" />
                  <span>Portfolio</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => navigate("/admin/messages")}
                  isActive={window.location.pathname === "/admin/messages"}
                >
                  <MessageSquare className="mr-2" />
                  <span>Messages</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <div className="p-4">
              <Button 
                variant="outline" 
                onClick={handleSignOut} 
                className="flex items-center w-full"
              >
                <LogOut className="w-4 h-4 mr-2" />
                <span>Sign Out</span>
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <div className="flex flex-col min-h-screen">
            <header className="p-4 border-b bg-secondary/5">
              <h1 className="text-2xl font-bold">{title}</h1>
            </header>
            <main className="flex-1 p-6 overflow-auto">
              {children}
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;