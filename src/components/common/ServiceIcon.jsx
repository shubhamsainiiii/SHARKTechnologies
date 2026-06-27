/* eslint-disable react-refresh/only-export-components */
import {
    Globe, Smartphone, Palette, Settings, Cloud, TrendingUp,
    Shield, ShoppingCart, BarChart2, Bot, Rocket, Lightbulb,
    Wrench, Target, Monitor, Code, Database, Zap, Lock, Star
} from 'lucide-react';

export const SERVICE_ICONS = {
    Globe, Smartphone, Palette, Settings, Cloud, TrendingUp,
    Shield, ShoppingCart, BarChart2, Bot, Rocket, Lightbulb,
    Wrench, Target, Monitor, Code, Database, Zap, Lock, Star
};

export function ServiceIcon({ name, size = 20, color = 'currentColor' }) {
    const Icon = SERVICE_ICONS[name];
    if (!Icon) return null;
    return <Icon size={size} color={color} />;
}