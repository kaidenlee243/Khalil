export interface SkillItem {
  name: string;
  level?: 'Fluent' | 'Intermediate' | 'Proficient';
  category: 'core' | 'technical';
  description?: string;
  iconType: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  imageUrl?: string;
  responsibilities: string[];
}

export interface EducationItem {
  institution: string;
  qualification: string;
  level?: string;
  field?: string;
  board?: string;
  status: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  isPlaceholder: boolean;
}

export interface LanguageItem {
  language: string;
  proficiency: 'Fluent' | 'Intermediate';
  nativeScript?: string;
}

export interface InterestItem {
  name: string;
  iconName: 'Car' | 'Gamepad2' | 'Compass' | 'Waves';
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Khalil ur Rehman",
    professionalName: "Khalil Mirza",
    headline: "Data Entry Specialist | Computer Science Student | Aspiring IT Professional",
    location: "Rawalpindi, Punjab, Pakistan",
    email: "khalilmirza733@gmail.com",
    phone: "+92 335 5817727",
    linkedIn: "https://www.linkedin.com/in/khalil-mirza-8316043a8/",
    cvFileName: "Khalil_Mirza_CV.pdf",
    cvDownloadPath: "/Khalil_Mirza_CV.pdf",
    heroIntro: "I am Khalil ur Rehman, an Intermediate student at Allama Iqbal Open University and a Data Entry Specialist at 7star Digital Marketing Agency. I am a hardworking, responsible, and motivated individual who is passionate about developing technical skills, gaining professional experience, and growing in the IT field.",
    aboutBio: "My name is Khalil ur Rehman, also known professionally as Khalil Mirza. I am a Computer Science student and Data Entry Specialist from Rawalpindi, Pakistan. I am committed to improving my technical abilities, delivering accurate work, and building a strong professional career. I value responsibility, continuous learning, and personal development.",
    profileCard: {
      fullName: "Khalil ur Rehman",
      professionalName: "Khalil Mirza",
      location: "Rawalpindi, Punjab, Pakistan",
      currentStudy: "Intermediate at Allama Iqbal Open University",
      currentRole: "Data Entry Specialist",
      careerInterest: "Data Entry, Computer Operations, and IT"
    }
  },

  skills: [
    {
      name: "Computer Operations",
      level: "Fluent",
      category: "core",
      iconType: "Monitor",
      description: "Comprehensive operational proficiency in Windows OS, file structures, peripheral management, and digital workflows."
    },
    {
      name: "Microsoft Office",
      level: "Intermediate",
      category: "core",
      iconType: "FileSpreadsheet",
      description: "Data organization, spreadsheet formulas, structured document preparation in Excel and Word."
    },
    {
      name: "C++",
      level: "Intermediate",
      category: "technical",
      iconType: "Code2",
      description: "Structured programming fundamentals, procedural logic, problem solving, and object-oriented syntax."
    },
    {
      name: "Python",
      level: "Intermediate",
      category: "technical",
      iconType: "Terminal",
      description: "Data handling, scripting, automated text manipulation, and algorithmic foundations."
    },
    {
      name: "Online Data Entry",
      category: "core",
      iconType: "Database",
      description: "Accurate information transcription, web research, verification, and digital database input."
    },
    {
      name: "Computer Science",
      category: "technical",
      iconType: "Cpu",
      description: "Theoretical computation concepts, data structures fundamentals, binary arithmetic, and algorithms."
    }
  ] as SkillItem[],

  experience: [
    {
      company: "7star Digital Marketing Agency",
      position: "Data Entry Specialist",
      duration: "February 2023 – Present",
      location: "Islamabad, Pakistan",
      imageUrl: "/src/assets/images/agency_workspace_1793095178682.jpg",
      description: "Focused on accurate data entry operations, online information management, digital record keeping, and continuous professional development within the agency's data workflows.",
      responsibilities: [
        "Perform systematic data entry, data cleaning, and record verification across digital platforms.",
        "Maintain high accuracy and data integrity standards across high-volume digital datasets.",
        "Collaborate with marketing teams to organize structured client and operational information.",
        "Continuously develop technical workflow efficiencies and computer operation skills."
      ]
    }
  ] as ExperienceItem[],

  education: [
    {
      institution: "Allama Iqbal Open University (AIOU)",
      qualification: "Intermediate",
      level: "Intermediate",
      status: "Currently enrolled",
      field: "General / Computer Studies"
    },
    {
      institution: "Asif Public School System",
      qualification: "Matric",
      level: "Secondary School Certificate",
      field: "Computer Science",
      board: "Rawalpindi Board",
      status: "Completed"
    }
  ] as EducationItem[],

  languages: [
    {
      language: "Urdu",
      proficiency: "Fluent",
      nativeScript: "اردو"
    },
    {
      language: "English",
      proficiency: "Intermediate",
      nativeScript: "English"
    },
    {
      language: "Punjabi",
      proficiency: "Intermediate",
      nativeScript: "پنجابی"
    }
  ] as LanguageItem[],

  interests: [
    {
      name: "Driving",
      iconName: "Car",
      description: "Road trips and driving precision"
    },
    {
      name: "Gaming",
      iconName: "Gamepad2",
      description: "Strategic gameplay and PC gaming"
    },
    {
      name: "Travelling",
      iconName: "Compass",
      description: "Exploring scenic regions and cultures"
    },
    {
      name: "Swimming",
      iconName: "Waves",
      description: "Fitness and aquatic sports"
    }
  ] as InterestItem[],

  placeholderProjects: [
    {
      id: "project-1",
      title: "Data Entry & Automation Dashboard",
      description: "Python automation scripts and dashboard interface designed to clean, validate, and reformat high-volume records into standardized spreadsheets with error logging.",
      tags: ["Python", "Excel Automation", "Data Cleaning"],
      imageUrl: "/src/assets/images/data_automation_project_1793095152647.jpg",
      githubUrl: "https://github.com/",
      demoUrl: "#",
      isPlaceholder: true
    },
    {
      id: "project-2",
      title: "C++ Console Inventory & Record Manager",
      description: "A structured command-line algorithmic tool for managing store stock records, searching entries by ID, and computing inventory statistics efficiently.",
      tags: ["C++", "Data Structures", "File I/O"],
      imageUrl: "/src/assets/images/cs_programming_setup_1793095152625.jpg",
      githubUrl: "https://github.com/",
      demoUrl: "#",
      isPlaceholder: true
    },
    {
      id: "project-3",
      title: "Digital Agency Operational Records Portal",
      description: "A prototype database entry sheet and verification interface with built-in input formatting rules, data consistency checks, and audit trails.",
      tags: ["Spreadsheets", "Data Entry", "Verification"],
      imageUrl: "/src/assets/images/agency_workspace_1793095178682.jpg",
      githubUrl: "https://github.com/",
      demoUrl: "#",
      isPlaceholder: true
    }
  ] as ProjectItem[]
};
