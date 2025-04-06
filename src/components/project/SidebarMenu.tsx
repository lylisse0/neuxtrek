
import { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton
} from "@/components/ui/sidebar";

interface MenuItem {
  label: string;
  icon?: ReactNode;
  isActive?: boolean;
  submenu?: {
    label: string;
    icon?: ReactNode;
    isActive?: boolean;
  }[];
}

interface SidebarMenuComponentProps {
  menuItems: MenuItem[];
}

const SidebarMenuComponent = ({ menuItems }: SidebarMenuComponentProps) => {
  return (
    <>
      {menuItems.map((item, index) => (
        <SidebarGroup key={`${item.label}-${index}`}>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton 
                isActive={item.isActive} 
                className={cn(
                  "transition-colors duration-300 hover:bg-[#3C3C3C] hover:text-[#E6C12E]",
                  item.isActive && "text-neuxtrek-gold"
                )}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.submenu && item.submenu.length > 0 && (
                  <ChevronRight size={14} className="ml-auto" />
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            {item.submenu && item.submenu.length > 0 && (
              <SidebarMenuSub>
                {item.submenu.map((subItem, subIndex) => (
                  <SidebarMenuSubItem key={`${subItem.label}-${subIndex}`}>
                    <SidebarMenuSubButton 
                      isActive={subItem.isActive}
                      className={cn(
                        "transition-colors duration-300 hover:bg-[#3C3C3C] hover:text-[#E6C12E]",
                        subItem.isActive && "text-neuxtrek-gold"
                      )}
                    >
                      {subItem.icon && subItem.icon}
                      <span>{subItem.label}</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            )}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  );
};

export default SidebarMenuComponent;
