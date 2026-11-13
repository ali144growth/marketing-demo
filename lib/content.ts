export type Locale = 'en' | 'ar';

export interface CampaignItem {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  category: {
    en: string;
    ar: string;
  };
  role: {
    en: string;
    ar: string;
  };
  platforms: {
    en: string;
    ar: string;
  };
  goal: {
    en: string;
    ar: string;
  };
  whatIDid: {
    en: string[];
    ar: string[];
  };
  results: {
    en: string;
    ar: string;
  };
  tools: {
    en: string;
    ar: string;
  };
  image: string;
}

export const CAMPAIGNS: CampaignItem[] = [
  {
    id: 'account-management',
    title: {
      en: '[Brand] Social Account Management',
      ar: '[Brand] إدارة حسابات التواصل',
    },
    category: {
      en: 'Account Management',
      ar: 'إدارة الحسابات',
    },
    role: {
      en: 'Social Media Manager',
      ar: 'إدارة وسائل التواصل الاجتماعي',
    },
    platforms: {
      en: 'Instagram, TikTok',
      ar: 'إنستغرام، تيك توك',
    },
    goal: {
      en: 'Build consistent brand presence, grow active organic community, and increase profile engagement.',
      ar: 'بناء حضور متناسق للعلامة، تنمية المجتمع الرقمي، وزيادة معدل التفاعل العضوي.',
    },
    whatIDid: {
      en: [
        'Developed a monthly content calendar aligned with brand visual identity',
        'Managed daily community interactions, audience messages, and comments',
        'Created high-engagement carousel posts, stories, and platform-native formats',
        'Analyzed weekly engagement metrics to refine posting schedules and pillars',
      ],
      ar: [
        'إعداد جدول محتوى شهري متكامل متوافق مع الهوية البصرية للعلامة',
        'إدارة التفاعل اليومي المباشر، والرد على الرسائل والتعليقات لبناء الولاء',
        'إنتاج تصاميم ومنشورات تفاعلية وقصص يومية موجهة لجمهور الحساب',
        'تحليل دوري لمؤشرات الأداء لتحسين مواعيد النشر ومحاور المحتوى',
      ],
    },
    results: {
      en: 'Reach: [Add result] • Followers: [Add result] • Engagement Rate: [Add result]',
      ar: 'الوصول: [Add result] • المتابعون: [Add result] • معدل التفاعل: [Add result]',
    },
    tools: {
      en: 'Meta Business Suite, Instagram, TikTok, Canva, CapCut',
      ar: 'ميتا بيزنس، إنستغرام، تيك توك، كانفا، كاب كت',
    },
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'meta-ads',
    title: {
      en: '[Brand] Meta Ads Campaign',
      ar: '[Brand] حملة إعلانات ميتا',
    },
    category: {
      en: 'Meta Ads',
      ar: 'إعلانات ميتا',
    },
    role: {
      en: 'Meta Ads Specialist',
      ar: 'أخصائية إعلانات ميتا',
    },
    platforms: {
      en: 'Facebook, Instagram',
      ar: 'فيسبوك، إنستغرام',
    },
    goal: {
      en: 'Drive high-intent qualified leads and conversions with cost-efficient acquisition.',
      ar: 'توليد عملاء محتملين ذوي اهتمام عالٍ وتحقيق تحويلات بتكلفة اكتساب منخفضة.',
    },
    whatIDid: {
      en: [
        'Structured full-funnel ad campaigns separating prospecting and retargeting sets',
        'A/B tested creative hooks, visual formats, ad copy, and call-to-actions',
        'Configured detailed custom audiences, lookalikes, and demographic targeting',
        'Monitored daily ad spend, paused underperforming sets, and scaled winners',
      ],
      ar: [
        'بناء هيكل إعلاني كامل يربط بين استقطاب الجماهير الجديدة وإعادة الاستهداف',
        'إجراء اختبارات A/B للخطافات المرئية، النصوص الإعلانية، ونقاط الحث على الإجراء',
        'تحديد الجماهير المخصصة والشبيهة بناءً على الاهتمامات وسلوك الشراء',
        'مراقبة الميزانية اليومية وإيقاف الإعلانات منخفضة الكفاءة وتوسيع الناجحة',
      ],
    },
    results: {
      en: 'Leads: [Add result] • CTR: [Add result] • CPC: [Add result] • ROAS: [Add result]',
      ar: 'العملاء المحتملون: [Add result] • نسبة النقر CTR: [Add result] • تكلفة النقرة CPC: [Add result] • العائد ROAS: [Add result]',
    },
    tools: {
      en: 'Meta Ads Manager, Meta Pixel, Canva, Google Sheets',
      ar: 'مدير إعلانات ميتا، بيكسل ميتا، كانفا، جداول جوجل',
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'google-ads',
    title: {
      en: '[Brand] Google Search Ads',
      ar: '[Brand] إعلانات بحث جوجل',
    },
    category: {
      en: 'Google Ads',
      ar: 'إعلانات جوجل',
    },
    role: {
      en: 'Paid Search Specialist',
      ar: 'أخصائية إعلانات البحث المدفوع',
    },
    platforms: {
      en: 'Google Ads (Search & Performance Max)',
      ar: 'إعلانات جوجل (البحث والأداء الأقصى)',
    },
    goal: {
      en: 'Capture bottom-of-funnel high purchase intent search queries and maximize conversions.',
      ar: 'استقطاب طلبات البحث ذات النية الشرائية العالية وتحقيق أعلى معدل تحويل.',
    },
    whatIDid: {
      en: [
        'Conducted keyword research focusing on commercial and transactional search terms',
        'Structured tightly themed ad groups with phrase and exact match targeting',
        'Crafted responsive search ads with dynamic headlines and sitelink extensions',
        'Managed negative keyword lists to prevent wasted ad spend on irrelevant queries',
      ],
      ar: [
        'إجراء بحث دقيق للكلمات المفتاحية التجارية والشرائية المباشرة',
        'هيكلة مجموعات إعلانية دقيقة بحسب نية البحث ونوع المطابقة',
        'صياغة إعلانات بحث متجاوبة مع روابط إضافية وميزات ترويجية',
        'إدارة مستمرة للكلمات المفتاحية السلبية لحماية الميزانية من النقرات غير المجدية',
      ],
    },
    results: {
      en: 'Clicks: [Add result] • Impressions: [Add result] • CTR: [Add result] • Conversions: [Add result]',
      ar: 'النقرات: [Add result] • مرات الظهور: [Add result] • نسبة النقر CTR: [Add result] • التحويلات: [Add result]',
    },
    tools: {
      en: 'Google Ads, Google Keyword Planner, Google Analytics 4',
      ar: 'إعلانات جوجل، مخطط الكلمات المفتاحية، تحليلات جوجل 4',
    },
    image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'content-creation',
    title: {
      en: '[Brand] Reels Content Creation',
      ar: '[Brand] صناعة محتوى ريلز',
    },
    category: {
      en: 'Content Creation',
      ar: 'صناعة المحتوى',
    },
    role: {
      en: 'Content Creator & Video Editor',
      ar: 'صانعة محتوى ومونتيرة فيديو',
    },
    platforms: {
      en: 'Instagram Reels, TikTok',
      ar: 'إنستغرام ريلز، تيك توك',
    },
    goal: {
      en: 'Produce trend-aligned short-form video series to increase organic reach and awareness.',
      ar: 'إنتاج سلسلة مقاطع فيديو قصيرة تفاعلية لتعزيز الوصول العضوي والوعي بالعلامة.',
    },
    whatIDid: {
      en: [
        'Researched viral short-form hooks, audio trends, and industry-specific themes',
        'Scripted, storyboarded, and recorded original short-form product videos',
        'Edited fast-paced cuts with synchronized audio, dynamic captions, and overlays',
        'Optimized video covers, description copy, and hashtags for platform discovery',
      ],
      ar: [
        'رصد خطافات الفيديو الرائجة والأصوات الشائعة الأكثر توافقاً مع العلامة',
        'كتابة السيناريو وتصوير مقاطع منتجات مرئية بأسلوب سردي سريع وجذاب',
        'مونتاج احترافي مع مزامنة الصوت وإضافة نصوص توضيحية وتأثيرات بصرية',
        'تحسين أغلفة الفيديوهات والنصوص المرافقة والوسوم لزيادة الاكتشاف العضوي',
      ],
    },
    results: {
      en: 'Views: [Add result] • Saves: [Add result] • Shares: [Add result] • Reach: [Add result]',
      ar: 'المشاهدات: [Add result] • الحفظ: [Add result] • المشاركات: [Add result] • الوصول: [Add result]',
    },
    tools: {
      en: 'CapCut, Canva, Instagram Reels, TikTok',
      ar: 'كاب كت، كانفا، إنستغرام ريلز، تيك توك',
    },
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'brand-launch',
    title: {
      en: '[Brand] Product Launch Campaign',
      ar: '[Brand] حملة إطلاق منتج',
    },
    category: {
      en: 'Brand & Launch',
      ar: 'إطلاق وتدشين',
    },
    role: {
      en: 'Campaign Strategist',
      ar: 'استراتيجية الحملات التسويقية',
    },
    platforms: {
      en: 'Meta Ads, Instagram, TikTok',
      ar: 'إعلانات ميتا، إنستغرام، تيك توك',
    },
    goal: {
      en: 'Execute a full-funnel product launch synchronizing teaser content and targeted ads.',
      ar: 'تنفيذ إطلاق متكامل للمنتج يربط بين المحتوى التشويقي والإعلانات الموجهة.',
    },
    whatIDid: {
      en: [
        'Planned 3-stage campaign roadmap: Teaser, Reveal Day, and Conversion Sustaining',
        'Coordinated visual branding assets, reveal countdowns, and launch posts',
        'Aligned targeted conversion ads to launch timing for maximum impact',
        'Monitored real-time inbound inquiries and campaign customer sentiment',
      ],
      ar: [
        'تخطيط مسار الحملة عبر ثلاث مراحل: التشويق، يوم الكشف، وتثبيت المبيعات',
        'تنسيق مواد الهوية البصرية والعد التنازلي ونشر الإعلانات في توقيت متزامن',
        'توجيه الإعلانات المدفوعة لدعم مرحلة الإطلاق وتحقيق أسرع استجابة شرائية',
        'متابعة تفاعل العملاء في يوم الإطلاق وإدارة الاستفسارات المباشرة',
      ],
    },
    results: {
      en: 'Launch Reach: [Add result] • Orders / Leads: [Add result] • ROAS: [Add result]',
      ar: 'وصول الإطلاق: [Add result] • الطلبات / العملاء: [Add result] • العائد ROAS: [Add result]',
    },
    tools: {
      en: 'Meta Ads Manager, Canva, CapCut, Google Sheets',
      ar: 'مدير إعلانات ميتا، كانفا، كاب كت، جداول جوجل',
    },
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'analytics-report',
    title: {
      en: '[Brand] Analytics & Growth Audit',
      ar: '[Brand] تدقيق وتحليل النمو',
    },
    category: {
      en: 'Analytics & Audit',
      ar: 'تحليل وتدقيق الأداء',
    },
    role: {
      en: 'Marketing Analyst',
      ar: 'محللة تسويق ونمو',
    },
    platforms: {
      en: 'Google Analytics 4, Meta Ads Manager',
      ar: 'تحليلات جوجل 4، مدير إعلانات ميتا',
    },
    goal: {
      en: 'Audit digital channels, evaluate marketing performance, and provide actionable growth steps.',
      ar: 'تدقيق القنوات الرقمية، تقييم مؤشرات الأداء التسويقي، وتقديم خطة نمو عملية.',
    },
    whatIDid: {
      en: [
        'Audited multichannel traffic flow, conversion funnels, and bounce drop-offs',
        'Consolidated monthly performance data across ads, reach, and conversion costs',
        'Identified high-ROI channels, underperforming assets, and budget efficiency wins',
        'Delivered an actionable performance report with concrete next-quarter actions',
      ],
      ar: [
        'تدقيق مصادر الزيارات ومسارات التحويل ونقاط انسحاب الزوار من الموقع',
        'تجميع بيانات الأداء الشهري للوصول، تكلفة التحويل، والعائد الاستثماري',
        'تحديد القنوات الأعلى عائداً والفرص العملية لخفض تكلفة اكتساب العميل',
        'تقديم تقرير تنفيذي شامل يتضمن توصيات واضحة ومحددة للفترة القادمة',
      ],
    },
    results: {
      en: 'Sessions Analyzed: [Add result] • Efficiency Identified: [Add result] • Report Delivered: [Add result]',
      ar: 'الزيارات المحللة: [Add result] • وفورات الميزانية: [Add result] • مخرجات التقرير: [Add result]',
    },
    tools: {
      en: 'Google Analytics 4, Meta Ads Manager, Google Sheets, Canva',
      ar: 'تحليلات جوجل 4، مدير إعلانات ميتا، جداول جوجل، كانفا',
    },
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
  },
];

export const CONTENT = {
  en: {
    nav: {
      name: 'Noura Al-Ajmi',
      badge: 'Marketing Student • GUST',
      work: 'Work',
      contact: 'Contact',
      langToggle: 'العربية',
    },
    hero: {
      statusBadge: 'Marketing Student, Gulf University for Science and Technology',
      headline: 'Passionate about digital marketing and growth strategy',
      primaryCta: 'View My Work',
      secondaryCta: 'Get in Touch',
      universityTag: 'GUST • 3rd Year',
    },
    work: {
      title: 'Campaigns & Case Studies',
      subtitle: "Real accounts, ad campaigns, and content I've managed and created for brands.",
    },
    contact: {
      title: 'Contact',
      subtitle: 'Available for marketing internships, case competitions, and collaborative campaigns.',
      phoneLabel: 'Phone',
      phoneValue: '+965 5511 8899',
      whatsappLabel: 'WhatsApp',
      whatsappValue: '+965 5511 8899',
      emailLabel: 'Email',
      emailValue: 'noura.alajmi@example.com',
      locationLabel: 'Location',
      locationValue: 'Kuwait City, Kuwait',
      linkedinLabel: 'LinkedIn',
      linkedinDisplay: 'linkedin.com/in/noura-alajmi',
      linkedinUrl: 'https://linkedin.com/in/noura-alajmi',
      instagramLabel: 'Instagram',
      instagramDisplay: 'instagram.com/noura.marketing',
      instagramUrl: 'https://instagram.com/noura.marketing',
      directAction: 'Tap to connect',
    },
    whatsapp: {
      buttonLabel: 'Chat on WhatsApp',
      hoverTooltip: 'Direct WhatsApp: +965 5511 8899',
    },
    footer: {
      rights: '© 2026 Noura Al-Ajmi • Gulf University for Science and Technology • Marketing Portfolio',
    },
  },
  ar: {
    nav: {
      name: 'نورة العجمي',
      badge: 'طالبة تسويق • جامعة الخليج',
      work: 'الحملات',
      contact: 'تواصل معي',
      langToggle: 'English',
    },
    hero: {
      statusBadge: 'طالبة تسويق، جامعة الخليج للعلوم والتقنية',
      headline: 'شغوفة بالتسويق الرقمي واستراتيجيات النمو',
      primaryCta: 'عرض الحملات',
      secondaryCta: 'تواصل معي',
      universityTag: 'جامعة الخليج • سنة ثالثة',
    },
    work: {
      title: 'الحملات ودراسات الحالة',
      subtitle: 'حسابات حقيقية، حملات إعلانية، ومحتوى قمت بإدارته وصناعته للعلامات التجارية.',
    },
    contact: {
      title: 'تواصل معي',
      subtitle: 'متاحة لفرص التدريب الميداني ومسابقات دراسات الحالة ومشاريع النمو.',
      phoneLabel: 'الهاتف',
      phoneValue: '+965 5511 8899',
      whatsappLabel: 'واتساب',
      whatsappValue: '+965 5511 8899',
      emailLabel: 'البريد الإلكتروني',
      emailValue: 'noura.alajmi@example.com',
      locationLabel: 'الموقع',
      locationValue: 'مدينة الكويت، الكويت',
      linkedinLabel: 'لينكد إن',
      linkedinDisplay: 'linkedin.com/in/noura-alajmi',
      linkedinUrl: 'https://linkedin.com/in/noura-alajmi',
      instagramLabel: 'إنستغرام',
      instagramDisplay: 'instagram.com/noura.marketing',
      instagramUrl: 'https://instagram.com/noura.marketing',
      directAction: 'اضغط للتواصل المباشر',
    },
    whatsapp: {
      buttonLabel: 'محادثة عبر واتساب',
      hoverTooltip: 'واتساب مباشر: +965 5511 8899',
    },
    footer: {
      rights: '© ٢٠٢٦ نورة العجمي • جامعة الخليج للعلوم والتقنية • ملف أعمال التسويق',
    },
  },
};
