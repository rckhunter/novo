import { Role } from "@/types/domain";

export const permissions: Record<Role, string[]> = {
  CEO:["*"] , Manager:["dashboard.view","finance.manage","recruitment.manage"], Coach:["players.note","performance.manage","attendance.manage"], Scout:["tryouts.manage","recruitment.manage"], Media:["announcements.manage"], Player:["profile.self","attendance.self"], Viewer:["dashboard.read"]
};
