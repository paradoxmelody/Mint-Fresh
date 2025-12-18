// src/types/icon.ts

export type IconType = 'internal' | 'external' | 'app';

export interface DesktopIconData {
  id: number;
  label: string;
  iconUrl: string; // Path to your icon image (e.g., '/assets/icons/anime.ico')
  type: IconType;
  linkUrl: string; // URL for navigation or internal component key
  description: string;
}