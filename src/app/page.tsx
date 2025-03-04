'use client';

import Image from "next/image";
import { useState, useEffect } from 'react';

interface ServiceFeature {
  title: string;
  items: string[];
}

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  features?: string[] | ServiceFeature[];
}

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const locationData = {
    city: "Dilla",
    country: "Ethiopia",
    address: "Dilla University",
    coordinates: "6.3940° N, 38.3096° E",
    timezone: "EAT (UTC+3)",
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    if (sectionId === 'contact') {
      setShowContact(true);
      setShowIntro(false);
    }
  };

  const handleLocationClick = () => {
    setShowLocation(!showLocation);
  };

  const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const currentProgress = (window.pageYOffset / totalScroll) * 100;
        setScrollProgress(currentProgress);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    );
  };

  const services: Service[] = [
    {
      title: "State of Communication",
      description: "A comprehensive platform for sharing knowledge, skills, and advice through various communication channels. Connect with others to exchange expertise and learn together.",
      icon: (
        <div className="relative group">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main Circle - representing global connection */}
            <circle 
              cx="12" 
              cy="12" 
              r="10" 
              className="stroke-blue-400 stroke-2 fill-blue-400/10 group-hover:fill-blue-400/20 animate-pulse-slow"
            />
            
            {/* Connection Lines */}
            <path 
              d="M8 8l8 8M16 8l-8 8" 
              className="stroke-blue-400 stroke-2 group-hover:stroke-blue-300"
            />
            
            {/* Communication Icons */}
            <circle cx="8" cy="8" r="2" className="fill-blue-400 animate-bounce-slow"/>
            <circle cx="16" cy="16" r="2" className="fill-blue-400 animate-bounce-slow delay-100"/>
            <circle cx="16" cy="8" r="2" className="fill-blue-400 animate-bounce-slow delay-200"/>
            <circle cx="8" cy="16" r="2" className="fill-blue-400 animate-bounce-slow delay-300"/>
            
            {/* Central Hub */}
            <circle 
              cx="12" 
              cy="12" 
              r="3" 
              className="stroke-blue-400 stroke-2 fill-blue-400/20 group-hover:fill-blue-400/30"
            />
          </svg>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      ),
      features: [
        {
          title: "Knowledge Exchange",
          items: [
            "Real-time Information Sharing",
            "Expert Knowledge Database",
            "Skill Development Resources",
            "Interactive Learning Materials"
          ]
        },
        {
          title: "Communication Channels",
          items: [
            "Text-based Messaging",
            "Voice & Video Calls",
            "Group Discussions",
            "Private Consultations"
          ]
        },
        {
          title: "Skill Sharing",
          items: [
            "Mentor-Mentee Matching",
            "Skill Assessment Tools",
            "Practice Sessions",
            "Progress Tracking"
          ]
        },
        {
          title: "Advisory Services",
          items: [
            "Professional Guidance",
            "Peer Support Network",
            "Expert Consultations",
            "Community Advice Forums"
          ]
        },
        {
          title: "Platform Features",
          items: [
            "User Profiles & Ratings",
            "Resource Library",
            "Schedule Management",
            "Feedback System"
          ]
        }
      ] as ServiceFeature[]
    },
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      icon: (
        <div className="relative">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" className="fill-blue-400 group-hover:fill-blue-300 transition-colors"/>
            <path d="M4.415 16.015L8 14.558V13.382L3.72 15.115C3.27 15.285 3 15.715 3 16.195V20.232C3 20.712 3.27 21.142 3.72 21.312L8 23.045V21.868L4.415 20.412C4.162 20.322 4 20.082 4 19.815V16.612C4 16.345 4.162 16.105 4.415 16.015Z" className="fill-blue-500 group-hover:fill-blue-400 transition-colors"/>
            <path d="M19.585 16.015L16 14.558V13.382L20.28 15.115C20.73 15.285 21 15.715 21 16.195V20.232C21 20.712 20.73 21.142 20.28 21.312L16 23.045V21.868L19.585 20.412C19.838 20.322 20 20.082 20 19.815V16.612C20 16.345 19.838 16.105 19.585 16.015Z" className="fill-blue-500 group-hover:fill-blue-400 transition-colors"/>
          </svg>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      ),
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile applications using React Native and modern frameworks.",
      icon: (
        <div className="relative">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="2" width="14" height="20" rx="2" className="stroke-blue-400 stroke-2"/>
            <path d="M12 18H12.01" className="stroke-blue-400 stroke-2"/>
            <path d="M8 21H16" className="stroke-blue-400 stroke-2"/>
            <rect x="7" y="4" width="10" height="12" rx="1" className="fill-blue-400/20"/>
          </svg>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      ),
    },
    {
      title: "API Development",
      description: "Robust and scalable backend solutions with Node.js and modern databases.",
      icon: (
        <div className="relative">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4Z" className="stroke-blue-400 stroke-2"/>
            <path d="M12 12L8 8M12 12L16 8M12 12L8 16M12 12L16 16" className="stroke-blue-400 stroke-2"/>
          </svg>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      ),
    },
    {
      title: "CS Course Teaching",
      description: "Teaching computer science fundamentals including Data Structures, Algorithms, Programming Languages, and Software Engineering principles.",
      icon: (
        <div className="relative">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" className="fill-blue-400 group-hover:fill-blue-300 transition-colors"/>
            <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" className="stroke-blue-400 stroke-2"/>
            <path d="M15 4L18 7L21 4" className="stroke-blue-400 stroke-2 animate-bounce"/>
          </svg>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      ),
      features: [
        "Data Structures & Algorithms",
        "Programming Fundamentals",
        "Software Engineering",
        "Database Systems",
        "Computer Networks"
      ]
    },
    {
      title: "CS in Various Sectors",
      description: "Implementing computer science solutions across different sectors to drive innovation and efficiency.",
      icon: (
        <div className="relative group">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" className="stroke-blue-400 stroke-2 fill-none animate-spin-slow"/>
            <path d="M9 12H15M12 9V15" className="stroke-blue-400 stroke-2 group-hover:stroke-blue-300" />
            <path d="M12 3L4 7v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V7l-8-4z" 
                  className="stroke-blue-400 stroke-2 fill-blue-400/10 group-hover:fill-blue-400/20"
                  style={{ transform: 'scale(0.6) translate(8px, 8px)' }} />
            <circle cx="18" cy="6" r="2" className="fill-blue-400 animate-bounce-slow"/>
            <path d="M12 6v12M8 12h8" className="stroke-blue-400 stroke-2 group-hover:stroke-blue-300"
                  style={{ transform: 'scale(0.5) translate(24px, 0px)' }} />
            <path d="M3 21h18M4 18h16M6 15h12M8 12h8M10 9h4M12 6L12 3" 
                  className="stroke-blue-400 stroke-2 group-hover:stroke-blue-300"
                  style={{ transform: 'scale(0.4) translate(30px, 30px)' }} />
          </svg>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      ),
      features: [
        {
          title: "Healthcare",
          items: ["Medical Imaging Systems", "Patient Management", "Health Analytics"]
        },
        {
          title: "Military & Defense",
          items: ["Cybersecurity Solutions", "Tactical Systems", "Data Encryption"]
        },
        {
          title: "Sports Technology",
          items: ["Performance Analytics", "Game Statistics", "Training Systems"]
        },
        {
          title: "Religious Institutions",
          items: ["Community Management", "Digital Archives", "Online Services"]
        },
        {
          title: "Political Systems",
          items: ["Voting Systems", "Data Analysis", "Campaign Management"]
        }
      ] as ServiceFeature[]
    },
    {
      title: "Film & Video Technology Solutions",
      description: "Advanced computational solutions for film industry, video processing, and smart infrastructure integration.",
      icon: (
        <div className="relative group">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main camera body */}
            <path 
              d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3z" 
              className="fill-blue-400/20 stroke-blue-400 stroke-2 group-hover:fill-blue-400/30 transition-all"
            />
            <path 
              d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h18a2 2 0 012 2v11z" 
              className="stroke-blue-400 stroke-2 group-hover:stroke-blue-300 transition-colors"
            />
            {/* Lens animation */}
            <circle 
              cx="12" 
              cy="12" 
              r="5" 
              className="stroke-blue-400 stroke-2 fill-none animate-pulse-slow"
            />
            {/* Processing waves */}
            <path 
              d="M12 5V3M12 21v-2M5 12H3M21 12h-2" 
              className="stroke-blue-400 stroke-2 animate-spin-slow origin-center"
            />
            {/* Data flow lines */}
            <path 
              d="M17 7l2-2M7 7L5 5M17 17l2 2M7 17l-2 2" 
              className="stroke-blue-400 stroke-1 animate-pulse"
            />
          </svg>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      ),
      features: [
        {
          title: "Video Processing Algorithms",
          items: [
            "Real-time Motion Detection",
            "Advanced Object Recognition",
            "Automated Scene Analysis",
            "High-Performance Compression"
          ]
        },
        {
          title: "Smart Infrastructure Integration",
          items: [
            "Intelligent Traffic Monitoring",
            "Smart City Surveillance",
            "Automated Home Security",
            "Road Safety Systems"
          ]
        },
        {
          title: "Problem-Solving Solutions",
          items: [
            "Complex Pattern Recognition",
            "Predictive Analytics",
            "Resource Optimization",
            "Performance Scaling"
          ]
        },
        {
          title: "Security & Protection",
          items: [
            "Video Encryption",
            "Secure Data Transmission",
            "Access Control Systems",
            "Privacy Protection Protocols"
          ]
        },
        {
          title: "Smart Environment Systems",
          items: [
            "Environmental Monitoring",
            "Energy Usage Optimization",
            "Smart Building Integration",
            "Automated Response Systems"
          ]
        }
      ] as ServiceFeature[]
    },
    {
      title: "AI & Machine Learning Solutions",
      description: "Comprehensive artificial intelligence and machine learning solutions incorporating cutting-edge technologies and methodologies.",
      icon: (
        <div className="relative group">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Neural Network Nodes */}
            <circle cx="12" cy="4" r="2" className="fill-blue-400 animate-pulse-slow"/>
            <circle cx="6" cy="12" r="2" className="fill-blue-400 animate-pulse-slow delay-100"/>
            <circle cx="18" cy="12" r="2" className="fill-blue-400 animate-pulse-slow delay-200"/>
            <circle cx="12" cy="20" r="2" className="fill-blue-400 animate-pulse-slow delay-300"/>
            
            {/* Neural Network Connections */}
            <path d="M12 6L6 10M12 6L18 10M6 14L12 18M18 14L12 18" 
                  className="stroke-blue-400 stroke-2 animate-pulse-slow"
                  strokeDasharray="4 2"/>
            
            {/* Data Flow Animation */}
            <circle cx="9" cy="9" r="1" className="fill-blue-400 animate-bounce-slow"/>
            <circle cx="15" cy="15" r="1" className="fill-blue-400 animate-bounce-slow delay-200"/>
            
            {/* Processing Waves */}
            <path d="M3 12h18" className="stroke-blue-400/30 stroke-1"/>
            <path d="M4 9h16" className="stroke-blue-400/30 stroke-1"/>
            <path d="M4 15h16" className="stroke-blue-400/30 stroke-1"/>
          </svg>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      ),
      features: [
        {
          title: "Knowledge-Based Expert Systems",
          items: [
            "Rule-Based Reasoning Systems",
            "Expert System Development",
            "Knowledge Base Construction",
            "Inference Engine Design"
          ]
        },
        {
          title: "Machine Learning Paradigms",
          items: [
            "Supervised Learning Algorithms",
            "Unsupervised Learning Methods",
            "Reinforcement Learning",
            "Deep Learning Architectures"
          ]
        },
        {
          title: "Neural Network Technologies",
          items: [
            "Convolutional Neural Networks",
            "Recurrent Neural Networks",
            "Transformer Architectures",
            "Neural Network Optimization"
          ]
        },
        {
          title: "Natural Language Processing",
          items: [
            "Text Classification & Analysis",
            "Sentiment Analysis Systems",
            "Language Understanding Models",
            "Text Generation & Summarization"
          ]
        },
        {
          title: "AI Search & Planning",
          items: [
            "Heuristic Search Algorithms",
            "Automated Planning Systems",
            "Decision Support Systems",
            "Optimization Strategies"
          ]
        }
      ] as ServiceFeature[]
    },
    {
      title: "Cybersecurity & Resource Protection",
      description: "Advanced security solutions for protecting data, detecting malicious code, and securing computer resources across all systems.",
      icon: (
        <div className="relative group">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Shield Base */}
            <path 
              d="M12 3L4 7v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V7l-8-4z" 
              className="stroke-blue-400 stroke-2 fill-blue-400/10 group-hover:fill-blue-400/20 transition-all"
            />
            
            {/* Lock Symbol */}
            <path 
              d="M12 8v4M10 12h4" 
              className="stroke-blue-400 stroke-2 animate-pulse-slow"
            />
            <circle 
              cx="12" 
              cy="12" 
              r="3" 
              className="stroke-blue-400 stroke-2 fill-none"
            />
            
            {/* Scanning Animation */}
            <path 
              d="M4 12h16" 
              className="stroke-blue-400/30 stroke-1 animate-scan"
              strokeDasharray="2 2"
            />
            
            {/* Protection Waves */}
            <path 
              d="M12 3C7 3 3 7 3 12M12 3c5 0 9 4 9 9" 
              className="stroke-blue-400/40 stroke-1 animate-spin-slow"
              strokeDasharray="3 3"
            />
            
            {/* Alert Indicators */}
            <circle 
              cx="18" 
              cy="6" 
              r="1" 
              className="fill-blue-400 animate-ping-slow"
            />
            <circle 
              cx="6" 
              cy="6" 
              r="1" 
              className="fill-blue-400 animate-ping-slow delay-300"
            />
          </svg>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      ),
      features: [
        {
          title: "Access Control & Authentication",
          items: [
            "Multi-Factor Authentication Systems",
            "Role-Based Access Control",
            "Identity Management",
            "Access Monitoring & Logging"
          ]
        },
        {
          title: "Malicious Code Detection",
          items: [
            "Real-time Threat Detection",
            "Malware Analysis & Prevention",
            "Vulnerability Scanning",
            "Intrusion Detection Systems"
          ]
        },
        {
          title: "Data Protection",
          items: [
            "Encryption Protocols",
            "Secure Data Storage",
            "Communication Security",
            "Data Backup & Recovery"
          ]
        },
        {
          title: "Resource Security",
          items: [
            "Memory Protection",
            "Process Isolation",
            "File System Security",
            "Network Resource Protection"
          ]
        },
        {
          title: "Security Compliance",
          items: [
            "Security Auditing",
            "Compliance Monitoring",
            "Security Policy Implementation",
            "Incident Response Planning"
          ]
        }
      ] as ServiceFeature[]
    },
    {
      title: "Emerging Technologies & Hardware Solutions",
      description: "Comprehensive solutions for modern hardware systems, emerging technologies, and cutting-edge device implementations.",
      icon: (
        <div className="relative group">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main Device Icon */}
            <rect 
              x="2" 
              y="4" 
              width="20" 
              height="16" 
              className="stroke-blue-400 stroke-2 fill-blue-400/10 group-hover:fill-blue-400/20"
            />
            {/* Screen Animation */}
            <path 
              d="M6 8h12M6 12h8" 
              className="stroke-blue-400 stroke-2 animate-pulse-slow"
            />
            {/* Mobile Device */}
            <rect 
              x="16" 
              y="10" 
              width="4" 
              height="8" 
              className="stroke-blue-400 stroke-2 fill-blue-400/20"
            />
            {/* Connection Lines */}
            <path 
              d="M4 20h16M12 16v4" 
              className="stroke-blue-400 stroke-1 animate-pulse"
              strokeDasharray="2 2"
            />
            {/* Tech Waves */}
            <path 
              d="M2 12h2M20 12h2" 
              className="stroke-blue-400 stroke-1 animate-ping-slow"
            />
            <circle 
              cx="12" 
              cy="12" 
              r="8" 
              className="stroke-blue-400/30 stroke-1 animate-spin-slow"
              strokeDasharray="4 4"
            />
          </svg>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      ),
      features: [
        {
          title: "Mobile Technologies",
          items: [
            "Latest Smartphone Architecture",
            "Tablet & Wearable Solutions",
            "Mobile OS Optimization",
            "Cross-Platform Integration"
          ]
        },
        {
          title: "Computer Systems",
          items: [
            "Modern PC Architecture",
            "Server Infrastructure",
            "Workstation Optimization",
            "Hardware-Software Integration"
          ]
        },
        {
          title: "Hardware Equipment",
          items: [
            "Peripheral Device Management",
            "Network Hardware Solutions",
            "Storage Systems",
            "Processing Units"
          ]
        },
        {
          title: "Emerging Technologies",
          items: [
            "IoT Device Integration",
            "AR/VR Hardware Solutions",
            "Quantum Computing Basics",
            "Edge Computing Systems"
          ]
        },
        {
          title: "System Maintenance",
          items: [
            "Hardware Diagnostics",
            "Performance Optimization",
            "System Updates & Patches",
            "Equipment Lifecycle Management"
          ]
        }
      ] as ServiceFeature[]
    },
    {
      title: "International Communication & Knowledge Sharing",
      description: "Fostering global connections through respectful dialogue, cultural exchange, and collaborative learning platforms.",
      icon: (
        <div className="relative group">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Globe Base */}
            <circle 
              cx="12" 
              cy="12" 
              r="10" 
              className="stroke-blue-400 stroke-2 fill-blue-400/10 group-hover:fill-blue-400/20 animate-spin-slow"
            />
            
            {/* Meridians */}
            <path 
              d="M12 2v20M2 12h20" 
              className="stroke-blue-400 stroke-2 group-hover:stroke-blue-300"
            />
            
            {/* Connection Lines */}
            <path 
              d="M4 8c8-8 8 16 16 8M4 16c8 8 8-16 16-8" 
              className="stroke-blue-400/40 stroke-1 animate-pulse"
              strokeDasharray="2 2"
            />
            
            {/* People Icons */}
            <circle cx="8" cy="8" r="2" className="fill-blue-400 animate-pulse-slow"/>
            <circle cx="16" cy="8" r="2" className="fill-blue-400 animate-pulse-slow delay-100"/>
            <circle cx="8" cy="16" r="2" className="fill-blue-400 animate-pulse-slow delay-200"/>
            <circle cx="16" cy="16" r="2" className="fill-blue-400 animate-pulse-slow delay-300"/>
            
            {/* Heart Symbol */}
            <path 
              d="M12 13l1-1c1-1 2.5-1 3.5 0 1 1 1 2.5 0 3.5L12 20l-4.5-4.5c-1-1-1-2.5 0-3.5 1-1 2.5-1 3.5 0l1 1z"
              className="stroke-blue-400 stroke-2 fill-blue-400/20 group-hover:fill-blue-400/30"
            />
          </svg>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      ),
      features: [
        {
          title: "Global Knowledge Exchange",
          items: [
            "Cross-Cultural Learning Platforms",
            "International Skill Sharing",
            "Collaborative Research Networks",
            "Educational Resource Exchange"
          ]
        },
        {
          title: "Cultural Understanding",
          items: [
            "Cultural Sensitivity Training",
            "Diversity Appreciation",
            "Traditional Knowledge Integration",
            "Global Perspective Development"
          ]
        },
        {
          title: "Communication Tools",
          items: [
            "Multi-Language Support",
            "Real-time Translation Services",
            "Cross-Cultural Communication Guidelines",
            "Accessible Communication Platforms"
          ]
        },
        {
          title: "Community Building",
          items: [
            "Global Network Development",
            "Brotherhood & Sisterhood Programs",
            "Interfaith Dialogue Facilitation",
            "Community Engagement Initiatives"
          ]
        },
        {
          title: "Ethical Practices",
          items: [
            "Respectful Interaction Guidelines",
            "Cultural Property Protection",
            "Fair Knowledge Sharing",
            "Inclusive Participation Policies"
          ]
        }
      ] as ServiceFeature[]
    },
    {
      title: "Spiritual & Holistic Human Development",
      description: "Comprehensive guidance on spiritual development, human consciousness, and holistic well-being through integrated mind-body-spirit approaches.",
      icon: (
        <div className="relative group">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Spirit Circle */}
            <circle 
              cx="12" 
              cy="12" 
              r="10" 
              className="stroke-blue-400 stroke-2 fill-blue-400/10 group-hover:fill-blue-400/20 animate-pulse-slow"
            />
            
            {/* Body Symbol */}
            <path 
              d="M12 6v12M8 12h8" 
              className="stroke-blue-400 stroke-2 group-hover:stroke-blue-300"
            />
            
            {/* Soul Waves */}
            <path 
              d="M4 12c8-4 8 4 16 0" 
              className="stroke-blue-400/40 stroke-1 animate-pulse"
              strokeDasharray="2 2"
            />
            
            {/* Divine Light */}
            <circle 
              cx="12" 
              cy="4" 
              r="1" 
              className="fill-blue-400 animate-ping-slow"
            />
          </svg>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      ),
      features: [
        {
          title: "Religious Understanding",
          items: [
            "Interfaith dialogue and harmony",
            "Spiritual practices and meditation",
            "Religious text interpretation",
            "Community worship guidance"
          ]
        },
        {
          title: "Body Wellness",
          items: [
            "Physical health optimization",
            "Natural healing practices",
            "Energy flow and balance",
            "Holistic nutrition guidance"
          ]
        },
        {
          title: "Soul Development",
          items: [
            "Emotional intelligence growth",
            "Inner peace cultivation",
            "Personal values alignment",
            "Life purpose discovery"
          ]
        },
        {
          title: "Spirit Enhancement",
          items: [
            "Higher consciousness development",
            "Spiritual awareness practices",
            "Divine connection methods",
            "Transcendental experiences"
          ]
        },
        {
          title: "Integrated Teachings",
          items: [
            "Mind-Body-Spirit Harmony",
            "Balanced living practices",
            "Ethical conduct & service",
            "Spiritual growth methods"
          ]
        }
      ] as ServiceFeature[]
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <ScrollProgress />
      {/* Enhanced Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-blue-600/10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
              <span className="text-2xl">BF</span>
              <span className="text-sm text-gray-400">Portfolio</span>
            </a>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="nav-link text-gray-300 hover:text-blue-400 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="nav-link text-gray-300 hover:text-blue-400 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="nav-link text-gray-300 hover:text-blue-400 transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('services')} className="nav-link text-gray-300 hover:text-blue-400 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('projects')} className="nav-link text-gray-300 hover:text-blue-400 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('skills')} className="nav-link text-gray-300 hover:text-blue-400 transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('contact')} className="nav-link text-gray-300 hover:text-blue-400 transition-colors">
                Contact
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4 pb-2 border-t border-blue-600/10 mt-4`}>
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-blue-400 transition-colors text-left py-2 px-4 hover:bg-blue-600/10 rounded"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-blue-400 transition-colors text-left py-2 px-4 hover:bg-blue-600/10 rounded"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-gray-300 hover:text-blue-400 transition-colors text-left py-2 px-4 hover:bg-blue-600/10 rounded"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-blue-400 transition-colors text-left py-2 px-4 hover:bg-blue-600/10 rounded"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-blue-400 transition-colors text-left py-2 px-4 hover:bg-blue-600/10 rounded"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-blue-400 transition-colors text-left py-2 px-4 hover:bg-blue-600/10 rounded"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-blue-400 transition-colors text-left py-2 px-4 hover:bg-blue-600/10 rounded"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with id */}
      <section id="home" className="min-h-screen pt-20 flex flex-col justify-center items-center px-4 text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-float">
            Hi, I'm Bashe Fufa
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 animate-pulse-slow">
            Full-Stack Developer | Computer Science Graduate | Tech Enthusiast
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => {
                setShowIntro(!showIntro);
                setShowContact(false);
              }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
            >
              About Me
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 border border-blue-600 hover:bg-blue-600/10 rounded-full transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
            >
              Contact Me
            </button>
          </div>
          {showIntro && (
            <div className="mt-6 p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-blue-600/20">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-600/30 transform transition-all duration-500 hover:scale-105">
                  {/* Replace the div below with Image component once you have your image */}
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center text-gray-300">
                    <span className="text-sm">Add your photo as profile.jpg in public/images folder</span>
                  </div> */}
        <Image
                    src="/images/profile.jpg"
                    alt="Bashe Fufa"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, 192px"
          priority
        />
                </div>
                <div className="space-y-4 text-left flex-1">
                  <p className="text-lg text-gray-200">
                    <span className="block font-semibold text-xl mb-3">Education Background</span>
                    I graduated from Dilla University with a degree in Computer Science. My academic journey has equipped me with strong foundations in:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Software Development</li>
                    <li>Data Structures & Algorithms</li>
                    <li>Web Technologies</li>
                    <li>Database Management</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {showContact && (
            <div className="mt-6 p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-blue-600/20">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Let's Connect!</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a 
                    href="mailto:olifanfufa@gmail.com"
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all group"
                  >
                    <svg className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-300">olifanfufa@gmail.com</span>
                  </a>
                  <a 
                    href="https://github.com/bashe-fufa"
            target="_blank"
            rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all group"
                  >
                    <svg className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-gray-300">github.com/bashe-fufa</span>
          </a>
          <a
                    href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all group"
                  >
                    <svg className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-gray-300">LinkedIn</span>
                  </a>
                  <a 
                    href="https://t.me/beshana12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all group"
                  >
                    <svg className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.306.42.33c4.08.36 5.88 2.2 5.88 6.36 2.64.42-.48.72-.84.72-1.2.36-4.08-2.4-5.88-4.08-5.88-8.28-2.52-12.48.48.48 0 1.2.36 1.62.36z"/>
                    </svg>
                    <span className="text-gray-300">@beshana12</span>
                  </a>
                  <a 
                    href="https://facebook.com/your_facebook_username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all group"
                  >
                    <svg className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-gray-300">Facebook</span>
                  </a>
                  <a 
                    href="https://meet.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all group"
                  >
                    <svg className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-300">Video Conference</span>
                  </a>
                  <a 
                    href="https://zoom.us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all group"
                  >
                    <svg className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                    <span className="text-gray-300">Video Call</span>
                  </a>
                  <button
                    onClick={handleLocationClick}
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all group cursor-pointer w-full"
                  >
                    <svg className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-300">View Location</span>
                  </button>
                  <a 
                    href="https://github.com/bashe2-fufa2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all group"
                  >
                    <svg className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-gray-300">@bashe2-fufa2</span>
                  </a>
                </div>

                {/* Location Details */}
                {showLocation && (
                  <div className="mt-4 p-4 bg-gray-700/30 rounded-lg border border-blue-500/20 transform transition-all duration-300 animate-fade-in">
                    <div className="grid grid-cols-2 gap-4 text-left">
                      <div className="space-y-2">
                        <p className="text-gray-300">
                          <span className="font-semibold text-blue-400">City:</span> {locationData.city}
                        </p>
                        <p className="text-gray-300">
                          <span className="font-semibold text-blue-400">Country:</span> {locationData.country}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-gray-300">
                          <span className="font-semibold text-blue-400">Address:</span> {locationData.address}
                        </p>
                        <p className="text-gray-300">
                          <span className="font-semibold text-blue-400">Coordinates:</span> {locationData.coordinates}
                        </p>
                        <p className="text-gray-300">
                          <span className="font-semibold text-blue-400">Timezone:</span> {locationData.timezone}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-gray-300 mt-4">
                  Feel free to reach out for collaboration opportunities or just to say hello!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 scroll-mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] rounded-lg overflow-hidden bg-gray-800">
              <Image
                src="/images/profile.jpg"
                alt="Bashe Fufa"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="space-y-4">
              <p className="text-blue-600 text-lg animate-fade-in transition-all duration-500 hover:text-blue-700 bg-white/90 rounded-lg p-4 shadow-lg">
                I am a multifaceted professional with expertise spanning martial arts, medicine, social sciences, and technology. As a Computer Science graduate from Dilla University, I combine technical knowledge with diverse disciplines to create innovative solutions.
              </p>
              <p className="text-blue-600 text-lg animate-slide-in-right transition-all duration-500 hover:text-blue-700 delay-100 bg-white/90 rounded-lg p-4 shadow-lg">
                My journey includes mastery in Taekwondo martial arts, experience in pharmaceutical medicine, deep understanding of sociology and logic, religious and political studies, and proficiency in arts and music. This unique combination allows me to approach problem-solving from multiple perspectives.
              </p>
              <div className="bg-white/90 rounded-lg p-4 shadow-lg space-y-4">
                <h3 className="text-blue-600 font-semibold text-xl">Areas of Expertise:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4"/>
                      </svg>
                      <span className="text-blue-600">Taekwondo & Martial Arts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4"/>
                      </svg>
                      <span className="text-blue-600">Pharmaceutical Medicine</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4"/>
                      </svg>
                      <span className="text-blue-600">Sociology & Logic</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4"/>
                      </svg>
                      <span className="text-blue-600">Religious & Political Studies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4"/>
                      </svg>
                      <span className="text-blue-600">Arts & Music</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4"/>
                      </svg>
                      <span className="text-blue-600">Problem-Solving Methods</span>
                    </div>
                  </div>
                </div>
              </div>
              <style jsx global>{`
                @keyframes slide-in-right {
                  from {
                    transform: translateX(-20px);
                    opacity: 0;
                  }
                  to {
                    transform: translateX(0);
                    opacity: 1;
                  }
                }
                @keyframes fade-in {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
                .animate-slide-in-right {
                  animation: slide-in-right 0.8s ease-out;
                }
                .animate-fade-in {
                  animation: fade-in 0.8s ease-out;
                }
              `}</style>
              <div id="skills" className="flex flex-wrap gap-2 scroll-mt-16">
                {[
                  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB"
                ].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white/90 text-blue-600 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default hover:scale-110 transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-6">
                <h3 className="text-2xl font-semibold text-blue-400">Additional Expertise</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/90 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all">
                    <h4 className="text-blue-600 font-semibold mb-2">Martial Arts & Medicine</h4>
                    <ul className="text-blue-600 space-y-1">
                      <li>• Advanced Taekwondo techniques and training</li>
                      <li>• Pharmaceutical medicine knowledge</li>
                      <li>• Holistic healing approaches</li>
                      <li>• Traditional & modern medical practices</li>
                    </ul>
                  </div>

                  <div className="bg-white/90 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all">
                    <h4 className="text-blue-600 font-semibold mb-2">Social Sciences</h4>
                    <ul className="text-blue-600 space-y-1">
                      <li>• Sociology research and analysis</li>
                      <li>• Logical reasoning and critical thinking</li>
                      <li>• Religious studies and interpretation</li>
                      <li>• Political science and governance</li>
                    </ul>
                  </div>

                  <div className="bg-white/90 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all">
                    <h4 className="text-blue-600 font-semibold mb-2">Arts & Music</h4>
                    <ul className="text-blue-600 space-y-1">
                      <li>• Musical performance and theory</li>
                      <li>• Artistic expression and creativity</li>
                      <li>• Cultural arts appreciation</li>
                      <li>• Performance techniques</li>
                    </ul>
                  </div>

                  <div className="bg-white/90 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all">
                    <h4 className="text-blue-600 font-semibold mb-2">Problem-Solving Methods</h4>
                    <ul className="text-blue-600 space-y-1">
                      <li>• Analytical thinking frameworks</li>
                      <li>• Strategic decision-making</li>
                      <li>• Cross-disciplinary approaches</li>
                      <li>• Innovative solution development</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/90 rounded-lg p-6 shadow-lg mt-6">
                  <h4 className="text-blue-600 font-semibold mb-4">Integrated Expertise</h4>
                  <p className="text-blue-600">
                    My diverse background allows me to bring unique perspectives to problem-solving, combining technical knowledge with insights from martial arts discipline, medical understanding, sociological awareness, and artistic creativity. This multidisciplinary approach enables me to develop comprehensive solutions that consider both technical and human aspects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-900/30 scroll-mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-600/20 hover:border-blue-400/40 transition-all">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-semibold text-blue-400">Full Stack Developer</h3>
                <span className="text-gray-400">2022 - Present</span>
              </div>
              <p className="text-gray-300 mb-4">
                Developing modern web applications using React, Next.js, and Node.js. Leading projects and implementing best practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600/20 rounded-full text-sm text-blue-400">React</span>
                <span className="px-3 py-1 bg-blue-600/20 rounded-full text-sm text-blue-400">Next.js</span>
                <span className="px-3 py-1 bg-blue-600/20 rounded-full text-sm text-blue-400">Node.js</span>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-600/20 hover:border-blue-400/40 transition-all">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-semibold text-blue-400">Computer Science Research & Development</h3>
                <span className="text-gray-400">2021 - Present</span>
              </div>
              <p className="text-gray-300 mb-4">
                Conducting research and development in advanced computer science topics including:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Algorithm optimization and complexity analysis</li>
                <li>Distributed systems and parallel computing</li>
                <li>Machine learning and artificial intelligence applications</li>
                <li>Database management and data structures</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600/20 rounded-full text-sm text-blue-400">Algorithms</span>
                <span className="px-3 py-1 bg-blue-600/20 rounded-full text-sm text-blue-400">AI/ML</span>
                <span className="px-3 py-1 bg-blue-600/20 rounded-full text-sm text-blue-400">Data Structures</span>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-600/20 hover:border-blue-400/40 transition-all">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-semibold text-blue-400">Martial Arts & Combat Sports Advisor</h3>
                <span className="text-gray-400">2019 - Present</span>
              </div>
              <p className="text-gray-300 mb-4">
                Providing comprehensive guidance in martial arts techniques, combat sports strategy, and holistic training approaches:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-blue-400 font-medium mb-2">Taekwondo Expertise</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Advanced kicking techniques and combinations</li>
                      <li>Olympic-style sparring strategies</li>
                      <li>Form (Poomsae) execution and teaching</li>
                      <li>Competition preparation and tactics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-medium mb-2">Kung Fu Systems</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Traditional forms and applications</li>
                      <li>Internal energy cultivation methods</li>
                      <li>Close-range combat techniques</li>
                      <li>Weapon forms and adaptations</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-blue-400 font-medium mb-2">Karate Fundamentals</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Traditional forms and applications</li>
                      <li>Strike and block combinations</li>
                      <li>Tournament-style kumite training</li>
                      <li>Self-defense applications</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-medium mb-2">Combat Strategy</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Distance management and timing</li>
                      <li>Counter-attack methodologies</li>
                      <li>Defensive positioning systems</li>
                      <li>Energy conservation techniques</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-600/10 rounded-lg">
                <h4 className="text-blue-400 font-medium mb-2">Technical Breakdown</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="text-blue-300 mb-2">Attacking Techniques</h5>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Front leg snap kicks</li>
                      <li>• Spinning back kicks</li>
                      <li>• Combination strikes</li>
                      <li>• Power generation methods</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-blue-300 mb-2">Blocking Systems</h5>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• High/mid/low blocks</li>
                      <li>• Circular deflections</li>
                      <li>• Counter-strike blocks</li>
                      <li>• Evasive movements</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-blue-300 mb-2">Strategic Elements</h5>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Ring management</li>
                      <li>• Energy efficiency</li>
                      <li>• Tactical adaptation</li>
                      <li>• Mental preparation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-600/20 hover:border-blue-400/40 transition-all">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-semibold text-blue-400">Vocal Arts & Music Performance</h3>
                <span className="text-gray-400">2018 - Present</span>
              </div>
              <p className="text-gray-300 mb-4">
                Providing expertise in vocal techniques, music styles, and performance artistry across various genres and traditions:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-blue-400 font-medium mb-2">Vocal Techniques</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Breath control and support</li>
                      <li>Pitch accuracy and range extension</li>
                      <li>Voice projection and resonance</li>
                      <li>Vocal health and maintenance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-medium mb-2">Music Styles</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Traditional Ethiopian music</li>
                      <li>Contemporary pop and R&B</li>
                      <li>Classical vocal techniques</li>
                      <li>World music traditions</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-blue-400 font-medium mb-2">Performance Skills</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Stage presence and confidence</li>
                      <li>Emotional expression in music</li>
                      <li>Audience engagement</li>
                      <li>Performance preparation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-medium mb-2">Musical Theory</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Rhythm and timing</li>
                      <li>Harmony and chord progressions</li>
                      <li>Music composition basics</li>
                      <li>Scale and melody patterns</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-600/10 rounded-lg">
                <h4 className="text-blue-400 font-medium mb-2">Specialized Areas</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="text-blue-300 mb-2">Vocal Styles</h5>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Belting techniques</li>
                      <li>• Falsetto control</li>
                      <li>• Mixed voice mastery</li>
                      <li>• Dynamic control</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-blue-300 mb-2">Performance Types</h5>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Solo performances</li>
                      <li>• Ensemble singing</li>
                      <li>• Choral arrangements</li>
                      <li>• Live band integration</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-blue-300 mb-2">Cultural Elements</h5>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Traditional styles</li>
                      <li>• Cultural fusion</li>
                      <li>• Heritage preservation</li>
                      <li>• Modern adaptations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-600/20 hover:border-blue-400/40 transition-all">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-semibold text-blue-400">Spiritual & Holistic Human Development Advisor</h3>
                <span className="text-gray-400">2020 - Present</span>
              </div>
              <p className="text-gray-300 mb-4">
                Providing comprehensive guidance on spiritual development, human consciousness, and holistic well-being:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-blue-400 font-medium mb-2">Religious Understanding</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Interfaith dialogue and harmony</li>
                      <li>Spiritual practices and meditation</li>
                      <li>Religious text interpretation</li>
                      <li>Community worship guidance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-medium mb-2">Body Wellness</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Physical health optimization</li>
                      <li>Natural healing practices</li>
                      <li>Energy flow and balance</li>
                      <li>Holistic nutrition guidance</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-blue-400 font-medium mb-2">Soul Development</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Emotional intelligence growth</li>
                      <li>Inner peace cultivation</li>
                      <li>Personal values alignment</li>
                      <li>Life purpose discovery</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-medium mb-2">Spirit Enhancement</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Higher consciousness development</li>
                      <li>Spiritual awareness practices</li>
                      <li>Divine connection methods</li>
                      <li>Transcendental experiences</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-600/10 rounded-lg">
                <h4 className="text-blue-400 font-medium mb-2">Core Teachings</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="text-blue-300 mb-2">Mind-Body Connection</h5>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Mindfulness practices</li>
                      <li>• Body awareness</li>
                      <li>• Mental clarity</li>
                      <li>• Stress management</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-blue-300 mb-2">Spiritual Growth</h5>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Inner wisdom</li>
                      <li>• Divine guidance</li>
                      <li>• Sacred practices</li>
                      <li>• Spiritual healing</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-blue-300 mb-2">Life Integration</h5>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Daily practices</li>
                      <li>• Balanced living</li>
                      <li>• Ethical conduct</li>
                      <li>• Service to others</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 scroll-mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 rounded-lg p-6 border border-blue-600/20 hover:border-blue-400/40 transition-all group card-hover"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform animate-pulse-slow">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                {service.features && (
                  <div className="space-y-4">
                    {Array.isArray(service.features) && typeof service.features[0] === 'string' ? (
                      <ul className="space-y-2 text-gray-300">
                        {(service.features as string[]).map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4"/>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="space-y-4">
                        {(service.features as ServiceFeature[]).map((category, cIndex) => (
                          <div key={cIndex} className="space-y-2">
                            <h4 className="text-blue-400 font-semibold">{category.title}</h4>
                            <ul className="space-y-1 pl-4">
                              {category.items.map((item, iIndex) => (
                                <li key={iIndex} className="flex items-center gap-2 text-gray-300">
                                  <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4"/>
                                  </svg>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900/30 scroll-mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Portfolio Website",
                description: "A modern portfolio website built with Next.js and Tailwind CSS.",
                tags: ["Next.js", "Tailwind CSS", "TypeScript"],
                image: "/images/portfolio.jpg"
              },
              {
                title: "E-Commerce Platform",
                description: "A full-stack e-commerce solution with advanced features.",
                tags: ["React", "Node.js", "MongoDB"],
                image: "/images/ecommerce.jpg"
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 rounded-lg overflow-hidden border border-blue-600/20 hover:border-blue-400/40 transition-all group card-hover"
              >
                <div className="relative h-48 bg-gray-700 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                  <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500">
                    {/* Add project image here */}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-600/20 rounded-full text-sm text-blue-400 hover:bg-blue-600/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="text-blue-400 hover:text-blue-300 transition-colors hover:scale-110 inline-flex items-center gap-2"
                    >
                      <span>View Project</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
        </a>
        <a
                      href="#" 
                      className="text-blue-400 hover:text-blue-300 transition-colors hover:scale-110 inline-flex items-center gap-2"
                    >
                      <span>Source Code</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900/50 scroll-mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Let's Connect</h2>
          <p className="text-gray-300 mb-8 text-center">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          {/* Contact Form */}
          <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-blue-600/20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-gray-300 block">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 bg-gray-700/50 border border-blue-600/20 rounded-lg focus:outline-none focus:border-blue-400 text-gray-100 placeholder-gray-400"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-300 block">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-gray-700/50 border border-blue-600/20 rounded-lg focus:outline-none focus:border-blue-400 text-gray-100 placeholder-gray-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-gray-300 block">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-blue-600/20 rounded-lg focus:outline-none focus:border-blue-400 text-gray-100 placeholder-gray-400"
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-300 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-blue-600/20 rounded-lg focus:outline-none focus:border-blue-400 text-gray-100 placeholder-gray-400 resize-none"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
