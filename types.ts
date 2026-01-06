
export interface SlideData {
  id: number;
  type: 'cover' | 'content' | 'grid' | 'closing';
  title: string;
  subtitle?: string;
  footer?: string;
  content?: string[];
  points?: { title: string; description: string; icon: string }[];
  visualType?: 'icon' | 'image' | 'graphic';
  accentColor?: string;
}

export interface PresentationState {
  currentSlide: number;
  totalSlides: number;
}
