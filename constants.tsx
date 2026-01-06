import React from 'react';
import { 
  Zap, 
  Smartphone, 
  Cpu, 
  QrCode, 
  WifiOff, 
  Camera, 
  UserCheck, 
  MapPin, 
  Box, 
  Trophy, 
  Users, 
  Star, 
  BarChart3, 
  Globe, 
  Layers, 
  Share2,
  Clock,
  Sparkles,
  Monitor,
  Layout
} from 'lucide-react';
import { SlideData } from './types';

export const SLIDES: SlideData[] = [
  {
    id: 1,
    type: 'cover',
    title: "26 Low-Infrastructure AR, VR & AI Engagement Ideas for Events",
    subtitle: "High Engagement • Minimal Hardware • Low Internet Dependency",
    footer: "Event Technology Innovation Deck",
    accentColor: "from-blue-600 to-cyan-400"
  },
  {
    id: 2,
    type: 'content',
    title: "Event Engagement Challenges",
    content: [
      "Low attendee interaction",
      "High cost of AR/VR hardware",
      "Internet instability at venues",
      "Limited personalization"
    ],
    visualType: 'graphic',
    accentColor: "from-red-500 to-orange-400"
  },
  {
    id: 3,
    type: 'content',
    title: "Our Engagement Philosophy",
    content: [
      "Smartphone-first experiences",
      "QR-based onboarding",
      "Offline-first / Local Wi-Fi",
      "Fast setup, scalable deployment"
    ],
    visualType: 'graphic',
    accentColor: "from-emerald-500 to-teal-400"
  },
  {
    id: 4,
    type: 'grid',
    title: "AI Engagement Ideas (1–4)",
    points: [
      { title: "AI Photo Booth", description: "Offline capture with instant stylized filters.", icon: "Camera" },
      { title: "Face-Based Finder", description: "Allow users to find their event photos via selfie.", icon: "UserCheck" },
      { title: "AI Event Guide", description: "Local Wi-Fi chatbot for venue navigation.", icon: "Sparkles" },
      { title: "AI Pronunciation", description: "Ensures hosts get speaker names right.", icon: "Cpu" }
    ],
    accentColor: "from-indigo-600 to-purple-400"
  },
  {
    id: 5,
    type: 'grid',
    title: "AI Engagement Ideas (5–7)",
    points: [
      { title: "AI Icebreaker", description: "Dynamic networking prompts for attendees.", icon: "Users" },
      { title: "AI Resume Matcher", description: "Match candidates to booths at career fairs.", icon: "Box" },
      { title: "AI Feedback Analyzer", description: "Real-time sentiment from short clips.", icon: "BarChart3" }
    ],
    accentColor: "from-pink-600 to-rose-400"
  },
  {
    id: 6,
    type: 'grid',
    title: "AR Engagement Ideas (8–10)",
    points: [
      { title: "QR AR Welcome", description: "Personalized 3D greeting on scan.", icon: "QrCode" },
      { title: "AR Business Card", description: "Interactive overlays on physical cards.", icon: "Smartphone" },
      { title: "AR Direction Finder", description: "Indoor navigation via mobile camera.", icon: "MapPin" }
    ],
    accentColor: "from-sky-500 to-blue-400"
  },
  {
    id: 7,
    type: 'grid',
    title: "AR Engagement Ideas (11–13)",
    points: [
      { title: "AR Product Explainer", description: "Floating tech specs for exhibition gear.", icon: "Box" },
      { title: "AR Theme Selfie", description: "Branded filters without app installs.", icon: "Camera" },
      { title: "AR Sponsor Wall", description: "Interactive videos layered over logos.", icon: "Globe" }
    ],
    accentColor: "from-violet-600 to-indigo-400"
  },
  {
    id: 8,
    type: 'grid',
    title: "VR & Immersive (14–16)",
    points: [
      { title: "360° Virtual Booth", description: "Explore 3D space via phone gyroscope.", icon: "Box" },
      { title: "360° Memory Wall", description: "Spherical gallery of event highlights.", icon: "Layers" },
      { title: "Venue Walkthrough", description: "Immersive pre-event web-based tours.", icon: "Globe" }
    ],
    accentColor: "from-cyan-500 to-blue-400"
  },
  {
    id: 9,
    type: 'grid',
    title: "Immersive VR Experience Booth (17)",
    points: [
      { title: "Full VR Immersion", description: "Meta Quest headsets transport users to underwater or space worlds.", icon: "Box" },
      { title: "Audience Mirroring", description: "Large screens display the VR user's view for spectators.", icon: "Monitor" },
      { title: "Simple Interaction", description: "Intuitive hand controllers or gaze-based navigation.", icon: "Smartphone" },
      { title: "Offline Reliability", description: "Preloaded assets ensure a smooth lag-free event experience.", icon: "WifiOff" }
    ],
    accentColor: "from-fuchsia-600 to-purple-500"
  },
  {
    id: 10,
    type: 'grid',
    title: "Gamification Ideas (18–19)",
    points: [
      { title: "QR Check-In Quest", description: "Reward points for visiting specific zones.", icon: "QrCode" },
      { title: "AR Scavenger Hunt", description: "Find hidden digital items around the venue.", icon: "Trophy" }
    ],
    accentColor: "from-amber-500 to-yellow-400"
  },
  {
    id: 11,
    type: 'grid',
    title: "Gamification Ideas (20–21)",
    points: [
      { title: "Spin-the-Wheel", description: "Web-app based reward engine.", icon: "Star" },
      { title: "Local Live Polling", description: "Host polls via a local hotspot.", icon: "BarChart3" }
    ],
    accentColor: "from-emerald-500 to-green-400"
  },
  {
    id: 12,
    type: 'grid',
    title: "Social & Networking (22–24)",
    points: [
      { title: "Smart Badge QR", description: "Instant digital profile exchange.", icon: "UserCheck" },
      { title: "Interest Match Wall", description: "Visual map of matching attendees.", icon: "Users" },
      { title: "Digital Autograph", description: "Sign-in board for VIPs and speakers.", icon: "Box" }
    ],
    accentColor: "from-indigo-600 to-blue-500"
  },
  {
    id: 13,
    type: 'grid',
    title: "Memory & Engagement (25–26)",
    points: [
      { title: "Memory Capsule", description: "Short clips for daily wrap-up videos.", icon: "Camera" },
      { title: "AI Highlight Gen", description: "Automated event summaries for socials.", icon: "Share2" }
    ],
    accentColor: "from-orange-500 to-red-400"
  },
  {
    id: 14,
    type: 'content',
    title: "Why These 26 Ideas Work",
    content: [
      "No high-end PC required for most ideas",
      "Uses attendee smartphones (BYOD)",
      "Offline or local Wi-Fi compatible",
      "Sponsor-friendly & scalable",
      "Easy attendee onboarding"
    ],
    visualType: 'graphic',
    accentColor: "from-blue-600 to-indigo-500"
  },
  {
    id: 15,
    type: 'grid',
    title: "Ideal Event Use Cases",
    points: [
      { title: "Corporate Events", description: "Internal conferences and team building.", icon: "Users" },
      { title: "Exhibitions & Expos", description: "High-traffic commercial shows.", icon: "Box" },
      { title: "College Fests", description: "Tech-savvy youth gatherings.", icon: "Globe" },
      { title: "Startup & Tech", description: "Networking-focused innovation meetups.", icon: "Zap" }
    ],
    accentColor: "from-cyan-500 to-emerald-400"
  },
  {
    id: 16,
    type: 'content',
    title: "Technology Stack Overview",
    content: [
      "Web AR + QR codes (Three.js)",
      "AI Vision & NLP (Local inference)",
      "Local server / Wi-Fi Hotspot",
      "Post-event cloud synchronization"
    ],
    visualType: 'graphic',
    accentColor: "from-slate-400 to-slate-200"
  },
  {
    id: 17,
    type: 'content',
    title: "Business Impact",
    content: [
      "Higher average engagement time",
      "Better sponsor ROI & visibility",
      "Rich, actionable event analytics",
      "Viral, shareable digital memories"
    ],
    visualType: 'graphic',
    accentColor: "from-purple-600 to-pink-500"
  },
  {
    id: 18,
    type: 'grid',
    title: "Deployment Simplicity",
    points: [
      { title: "Setup Time", description: "1–2 hours total.", icon: "Clock" },
      { title: "Hardware", description: "Phones + 1 Laptop + Screen.", icon: "Smartphone" },
      { title: "Internet", description: "Completely Optional.", icon: "WifiOff" },
      { title: "Staff", description: "Minimal oversight required.", icon: "Users" }
    ],
    accentColor: "from-emerald-600 to-green-400"
  },
  {
    id: 19,
    type: 'closing',
    title: "Smart Events Don’t Need Heavy Tech",
    subtitle: "Experiences Matter More Than Hardware",
    accentColor: "from-blue-600 to-purple-600"
  }
];

export const getIcon = (name: string, className?: string) => {
  const icons: Record<string, React.ReactNode> = {
    Zap: <Zap className={className} />,
    Smartphone: <Smartphone className={className} />,
    Cpu: <Cpu className={className} />,
    QrCode: <QrCode className={className} />,
    WifiOff: <WifiOff className={className} />,
    Camera: <Camera className={className} />,
    UserCheck: <UserCheck className={className} />,
    MapPin: <MapPin className={className} />,
    Box: <Box className={className} />,
    Trophy: <Trophy className={className} />,
    Users: <Users className={className} />,
    Star: <Star className={className} />,
    BarChart3: <BarChart3 className={className} />,
    Globe: <Globe className={className} />,
    Layers: <Layers className={className} />,
    Share2: <Share2 className={className} />,
    Clock: <Clock className={className} />,
    Sparkles: <Sparkles className={className} />,
    Monitor: <Monitor className={className} />,
    Layout: <Layout className={className} />
  };
  return icons[name] || <Zap className={className} />;
};
