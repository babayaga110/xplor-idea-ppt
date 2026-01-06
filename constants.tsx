
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
  Sparkles
} from 'lucide-react';
import { SlideData } from './types';

export const SLIDES: SlideData[] = [
  {
    id: 1,
    type: 'cover',
    title: "25 Low-Infrastructure AR, VR & AI Engagement Ideas for Events",
    subtitle: "High Engagement • Minimal Hardware • Low Internet Dependency",
    footer: "Event Technology Innovation Deck",
    accentColor: "from-blue-600 to-cyan-400"
  },
  {
    id: 2,
    type: 'content',
    title: "The Event Engagement Problem",
    content: [
      "Traditional events lack interaction",
      "Heavy AR/VR hardware is expensive",
      "Internet failures at venues",
      "Attendees expect smart, digital experiences"
    ],
    visualType: 'graphic',
    accentColor: "from-red-500 to-orange-400"
  },
  {
    id: 3,
    type: 'content',
    title: "Our Solution Philosophy",
    content: [
      "Phone-first experiences",
      "QR-code based onboarding",
      "Offline-first or local Wi-Fi usage",
      "Easy setup, high engagement"
    ],
    visualType: 'graphic',
    accentColor: "from-emerald-500 to-teal-400"
  },
  {
    id: 4,
    type: 'grid',
    title: "AI-Powered Engagement (Low Hardware)",
    points: [
      { title: "AI Photo Booth", description: "Offline photo capture with instant stylized filters.", icon: "Camera" },
      { title: "Face-Based Finder", description: "Allow users to find their event photos using a selfie.", icon: "UserCheck" },
      { title: "AI Event Guide", description: "Local Wi-Fi chatbot for quick venue queries.", icon: "Sparkles" },
      { title: "AI Pronunciation", description: "Ensures hosts get speaker names right every time.", icon: "Cpu" }
    ],
    accentColor: "from-indigo-600 to-purple-400"
  },
  {
    id: 5,
    type: 'grid',
    title: "AI for Interaction & Insights",
    points: [
      { title: "AI Icebreaker", description: "Dynamic prompt generation based on attendee roles.", icon: "Users" },
      { title: "AI Resume Matcher", description: "Match candidates to booths at career fairs.", icon: "Box" },
      { title: "AI Feedback", description: "Real-time sentiment analysis from simple audio/text input.", icon: "BarChart3" }
    ],
    accentColor: "from-pink-600 to-rose-400"
  },
  {
    id: 6,
    type: 'grid',
    title: "Augmented Reality – Mobile Camera Only",
    points: [
      { title: "QR Welcome", description: "Personalized 3D greeting when scanning badge.", icon: "QrCode" },
      { title: "AR Business Card", description: "Digital overlays on physical contact cards.", icon: "Smartphone" },
      { title: "AR Direction Finder", description: "Overlay arrows on floor for easy navigation.", icon: "MapPin" }
    ],
    accentColor: "from-sky-500 to-blue-400"
  },
  {
    id: 7,
    type: 'grid',
    title: "Interactive AR Experiences",
    points: [
      { title: "AR Product Explainer", description: "Pop-up tech specs for exhibition products.", icon: "Box" },
      { title: "AR Theme Selfie", description: "Branded filters that don't require external apps.", icon: "Camera" },
      { title: "AR Sponsor Wall", description: "Turn static logos into interactive videos.", icon: "Globe" }
    ],
    accentColor: "from-violet-600 to-indigo-400"
  },
  {
    id: 8,
    type: 'grid',
    title: "Immersion Without VR Headsets",
    points: [
      { title: "360° Virtual Booth", description: "Rotate phone to explore products in 3D space.", icon: "Box" },
      { title: "360° Memory Wall", description: "Swipeable sphere of event memories.", icon: "Layers" },
      { title: "Virtual Venue Walkthrough", description: "Pre-event web-based exploration.", icon: "Globe" }
    ],
    accentColor: "from-cyan-500 to-blue-400"
  },
  {
    id: 9,
    type: 'grid',
    title: "Gamified Event Engagement",
    points: [
      { title: "QR Check-In Quest", description: "Reward points for visiting specific zones.", icon: "QrCode" },
      { title: "AR Scavenger Hunt", description: "Find hidden digital items around the hall.", icon: "Trophy" }
    ],
    accentColor: "from-amber-500 to-yellow-400"
  },
  {
    id: 10,
    type: 'grid',
    title: "Fun & Rewards (Offline Friendly)",
    points: [
      { title: "Spin-the-Wheel", description: "Local web-app based rewards engine.", icon: "Star" },
      { title: "Local Live Polling", description: "Host-run polls via a local Wi-Fi hotspot.", icon: "BarChart3" }
    ],
    accentColor: "from-emerald-500 to-green-400"
  },
  {
    id: 11,
    type: 'grid',
    title: "Smart Networking Experiences",
    points: [
      { title: "Smart Badge QR", description: "Instant digital profile exchange.", icon: "UserCheck" },
      { title: "Interest Match Wall", description: "Visual map of like-minded attendees.", icon: "Users" },
      { title: "Digital Autograph Wall", description: "Signature board for speakers and VIPs.", icon: "Box" }
    ],
    accentColor: "from-indigo-600 to-blue-500"
  },
  {
    id: 12,
    type: 'grid',
    title: "Memory & Post-Event Engagement",
    points: [
      { title: "Video Memory Capsule", description: "Short clips stitched into a daily wrap-up.", icon: "Camera" },
      { title: "AI Highlight Gen", description: "Automated event summaries for LinkedIn.", icon: "Share2" }
    ],
    accentColor: "from-orange-500 to-red-400"
  },
  {
    id: 13,
    type: 'content',
    title: "Why These 25 Ideas Work",
    content: [
      "No AR glasses or VR headsets required",
      "Uses attendee smartphones (BYOD)",
      "Works offline or on local Wi-Fi",
      "Fast setup and easy scaling",
      "High sponsor and attendee value"
    ],
    visualType: 'graphic',
    accentColor: "from-blue-600 to-indigo-500"
  },
  {
    id: 14,
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
    id: 15,
    type: 'content',
    title: "Technology Stack Overview",
    content: [
      "Web AR (QR + Camera + Three.js)",
      "AI Vision (Local inference) & NLP",
      "Local server / Wi-Fi Hotspot",
      "Post-event cloud synchronization"
    ],
    visualType: 'graphic',
    accentColor: "from-slate-400 to-slate-200"
  },
  {
    id: 16,
    type: 'content',
    title: "Business Impact",
    content: [
      "Higher average engagement time",
      "Better sponsor visibility & ROI",
      "Rich, actionable event data",
      "Viral, shareable digital memories"
    ],
    visualType: 'graphic',
    accentColor: "from-purple-600 to-pink-500"
  },
  {
    id: 17,
    type: 'grid',
    title: "Deployment Simplicity",
    points: [
      { title: "Setup Time", description: "1–2 hours total.", icon: "Clock" },
      { title: "Hardware", description: "Phones + 1 Laptop.", icon: "Smartphone" },
      { title: "Internet", description: "Completely Optional.", icon: "WifiOff" },
      { title: "Staff", description: "Minimal oversight required.", icon: "Users" }
    ],
    accentColor: "from-emerald-600 to-green-400"
  },
  {
    id: 18,
    type: 'closing',
    title: "Future-Ready Events Don’t Need Heavy Tech",
    subtitle: "Smart Ideas Create Powerful Experiences",
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
    Sparkles: <Sparkles className={className} />
  };
  return icons[name] || <Zap className={className} />;
};
