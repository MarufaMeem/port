export type Language = "en" | "ar" | "bn";

export interface Translations {
    nav: {
        home: string;
        about: string;
        services: string;
        work: string;
        saudiReady: string;
        contact: string;
        cta: string;
    };
    hero: {
        badge: string;
        headline: string;
        headlineAccent: string;
        subtext: string;
        viewWork: string;
        letsWork: string;
        checklist: string[];
    };
    trust: {
        items: string[];
    };
    services: {
        label: string;
        title: string;
        description: string;
        items: { title: string; desc: string }[];
        viewAll: string;
        learnMore: string;
    };
    process: {
        label: string;
        title: string;
        description: string;
        steps: { number: string; title: string; desc: string }[];
    };
    saudi: {
        badge: string;
        title: string;
        titleAccent: string;
        description: string;
        checklist: string[];
        capabilities: { title: string; desc: string }[];
        ctaButton: string;
    };
    why: {
        label: string;
        title: string;
        items: { title: string; desc: string }[];
    };
    cta: {
        title: string;
        description: string;
        primary: string;
        secondary: string;
    };
    footer: {
        tagline: string;
        navigation: string;
        footerCta: string;
        footerCtaSub: string;
        footerCtaBtn: string;
        rights: string;
    };
    contact: {
        label: string;
        title: string;
        description: string;
        name: string;
        email: string;
        company: string;
        projectType: string;
        message: string;
        submit: string;
    };
    langDemo: {
        title: string;
        text: string;
    };
}

export const translations: Record<Language, Translations> = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            services: "Services",
            work: "Work",
            saudiReady: "Saudi Ready",
            contact: "Contact",
            cta: "Let's Work Together",
        },
        hero: {
            badge: "Available for new projects",
            headline: "Digital experiences that make",
            headlineAccent: "businesses stand out.",
            subtext:
                "I'm the developer behind ITHelper. I design and build modern, responsive websites that help businesses establish trust, communicate clearly, and turn visitors into customers.",
            viewWork: "View My Work",
            letsWork: "Let's Work Together",
            checklist: ["Business-first thinking", "Responsive on all devices", "Clean, modern design"],
        },
        trust: {
            items: ["Business Websites", "Landing Pages", "Portfolio Websites", "SaaS Interfaces", "E-commerce", "Custom Apps"],
        },
        services: {
            label: "Services",
            title: "Websites built around your business.",
            description: "From company websites to landing pages and web applications — every project is designed to support your goals.",
            items: [
                { title: "Business Websites", desc: "Professional websites for companies, agencies, and organizations." },
                { title: "Landing Pages", desc: "High-converting pages designed around a specific product or campaign." },
                { title: "Portfolio Websites", desc: "Personal and professional sites that communicate expertise." },
                { title: "SaaS / Web Interfaces", desc: "Modern interfaces for software products and web applications." },
                { title: "E-commerce Experiences", desc: "Clean, responsive online shopping experiences." },
                { title: "Website Redesign", desc: "Modernizing outdated websites with better design and usability." },
            ],
            viewAll: "All Services",
            learnMore: "Learn more",
        },
        process: {
            label: "How I Work",
            title: "From idea to a website your customers trust.",
            description: "A structured process that keeps you informed and delivers consistent results.",
            steps: [
                { number: "01", title: "Understand", desc: "I understand your business, audience, and what the website needs to accomplish." },
                { number: "02", title: "Plan", desc: "I organize the content, user journey, and website structure before development." },
                { number: "03", title: "Design", desc: "I create a clean, modern interface that represents your brand professionally." },
                { number: "04", title: "Develop", desc: "I build with responsive layouts, clean code and modern web technologies." },
                { number: "05", title: "Refine", desc: "I test across screen sizes and refine the details before delivery." },
                { number: "06", title: "Launch", desc: "The final website is optimized and ready for real customers." },
            ],
        },
        saudi: {
            badge: "🇸🇦 Saudi Ready",
            title: "Built for Businesses",
            titleAccent: "in Saudi Arabia.",
            description:
                "Your website should feel local, professional and effortless to use. I can build modern digital experiences tailored for Saudi audiences — from bilingual interfaces to mobile-first customer journeys.",
            checklist: [
                "Arabic + English bilingual support",
                "RTL layout compatibility",
                "WhatsApp contact integration",
                "SAR currency presentation",
                "Mobile-first for Saudi users",
                "Google Maps & location cards",
            ],
            capabilities: [
                { title: "Bilingual Experiences", desc: "Arabic + English interfaces with proper RTL support." },
                { title: "Mobile First", desc: "Designed for customers who primarily browse from smartphones." },
                { title: "Saudi-Friendly UX", desc: "Clear CTAs and familiar user journeys for Saudi customers." },
                { title: "WhatsApp Integration", desc: "Easy direct contact via WhatsApp." },
                { title: "SAR Support", desc: "Saudi Riyal pricing where required." },
                { title: "Location & Maps", desc: "Business locations presented clearly." },
                { title: "Fast & Responsive", desc: "Optimized experience across all devices." },
                { title: "Professional Branding", desc: "Built around your identity, not a generic template." },
            ],
            ctaButton: "Discuss Your Saudi Project",
        },
        why: {
            label: "Why ITHelper",
            title: "More than just development.",
            items: [
                { title: "Business-first thinking", desc: "Every decision supports your actual business goals — clarity, trust, and conversion." },
                { title: "Responsive everywhere", desc: "Your website performs excellently across phones, tablets, and desktops." },
                { title: "Detail-oriented execution", desc: "Spacing, typography, interactions, and visual polish all matter." },
                { title: "Built to evolve", desc: "Clean architecture means your site can grow with your business." },
            ],
        },
        cta: {
            title: "Let's build something your customers remember.",
            description: "Have a business idea, service, or brand that deserves a better digital presence?",
            primary: "Let's Work Together",
            secondary: "View My Work",
        },
        footer: {
            tagline: "Web design & development for businesses that want to stand out.",
            navigation: "Navigation",
            footerCta: "Have a project in mind?",
            footerCtaSub: "Let's create a digital experience that represents your business with clarity and confidence.",
            footerCtaBtn: "Let's work together",
            rights: "All rights reserved.",
        },
        contact: {
            label: "Contact",
            title: "Start a conversation.",
            description: "Tell me about your project and let's figure out how I can help.",
            name: "Your Name",
            email: "Email Address",
            company: "Business / Company",
            projectType: "What do you need?",
            message: "Tell me about your project",
            submit: "Start a Conversation →",
        },
        langDemo: {
            title: "Build your business online",
            text: "Professional websites for businesses of all sizes.",
        },
    },

    ar: {
        nav: {
            home: "الرئيسية",
            about: "من أنا",
            services: "الخدمات",
            work: "الأعمال",
            saudiReady: "جاهز للسوق السعودي",
            contact: "تواصل معنا",
            cta: "لنعمل معاً",
        },
        hero: {
            badge: "متاح لمشاريع جديدة",
            headline: "تجارب رقمية تجعل",
            headlineAccent: "أعمالك تبرز وتتميّز.",
            subtext:
                "أنا أميت، المطوّر وراء ITHelper. أصمّم وأبني مواقع إلكترونية حديثة وسريعة الاستجابة تساعد الشركات على بناء الثقة والتواصل بوضوح وتحويل الزوار إلى عملاء.",
            viewWork: "اعرض أعمالي",
            letsWork: "لنعمل معاً",
            checklist: ["تفكير يُعلي قيمة الأعمال", "متجاوب مع جميع الأجهزة", "تصميم حديث ونظيف"],
        },
        trust: {
            items: ["مواقع الأعمال", "صفحات الهبوط", "مواقع المحافظ", "واجهات SaaS", "التجارة الإلكترونية", "التطبيقات المخصصة"],
        },
        services: {
            label: "الخدمات",
            title: "مواقع مُصمَّمة حول أعمالك.",
            description: "من مواقع الشركات إلى صفحات الهبوط والتطبيقات — كل مشروع مُصمَّم لدعم أهدافك.",
            items: [
                { title: "مواقع الأعمال", desc: "مواقع احترافية للشركات والوكالات والمؤسسات." },
                { title: "صفحات الهبوط", desc: "صفحات عالية التحويل مُصمَّمة لحملات محددة." },
                { title: "مواقع المحافظ الشخصية", desc: "مواقع شخصية ومهنية تُبرز خبرتك." },
                { title: "واجهات SaaS / الويب", desc: "واجهات حديثة للبرامج وتطبيقات الويب." },
                { title: "تجارب التجارة الإلكترونية", desc: "تجارب تسوق نظيفة وسريعة الاستجابة." },
                { title: "إعادة تصميم المواقع", desc: "تحديث المواقع القديمة بتصميم وسهولة استخدام أفضل." },
            ],
            viewAll: "كل الخدمات",
            learnMore: "اعرف أكثر",
        },
        process: {
            label: "كيف أعمل",
            title: "من الفكرة إلى موقع يثق به عملاؤك.",
            description: "عملية منظمة تُبقيك على اطلاع وتُنتج نتائج ثابتة.",
            steps: [
                { number: "٠١", title: "الفهم", desc: "أفهم أعمالك وجمهورك وما يجب أن يُحقّقه الموقع." },
                { number: "٠٢", title: "التخطيط", desc: "أُنظّم المحتوى ورحلة المستخدم وهيكل الموقع قبل التطوير." },
                { number: "٠٣", title: "التصميم", desc: "أُنشئ واجهة حديثة ونظيفة تُمثّل علامتك التجارية باحترافية." },
                { number: "٠٤", title: "التطوير", desc: "أبني بتخطيطات متجاوبة وكود نظيف وتقنيات ويب حديثة." },
                { number: "٠٥", title: "التحسين", desc: "أختبر عبر أحجام الشاشات وأُحسّن التفاصيل قبل التسليم." },
                { number: "٠٦", title: "الإطلاق", desc: "الموقع النهائي مُحسَّن وجاهز للعملاء الحقيقيين." },
            ],
        },
        saudi: {
            badge: "🇸🇦 جاهز للسوق السعودي",
            title: "مُصمَّم للأعمال",
            titleAccent: "في المملكة العربية السعودية.",
            description:
                "يجب أن يكون موقعك محلياً واحترافياً وسهل الاستخدام. أستطيع بناء تجارب رقمية حديثة مُصمَّمة للجمهور السعودي.",
            checklist: [
                "دعم ثنائي اللغة عربي + إنجليزي",
                "توافق تخطيط RTL",
                "تكامل واتساب",
                "عرض أسعار بالريال السعودي",
                "تصميم أولي للجوال",
                "خرائط جوجل وبطاقات الموقع",
            ],
            capabilities: [
                { title: "تجارب ثنائية اللغة", desc: "واجهات عربية + إنجليزية مع دعم RTL الصحيح." },
                { title: "الجوال أولاً", desc: "مُصمَّم للعملاء الذين يتصفحون بشكل رئيسي من الهواتف." },
                { title: "تجربة مستخدم سعودية", desc: "رحلات مستخدم مألوفة للعملاء السعوديين." },
                { title: "تكامل واتساب", desc: "تواصل مباشر سهل عبر واتساب." },
                { title: "دعم الريال السعودي", desc: "عرض أسعار بالريال حيث يلزم." },
                { title: "الموقع والخرائط", desc: "مواقع الأعمال معروضة بوضوح." },
                { title: "سريع ومتجاوب", desc: "تجربة مُحسَّنة عبر جميع الأجهزة." },
                { title: "العلامة التجارية الاحترافية", desc: "مبني حول هويتك، وليس قالباً عاماً." },
            ],
            ctaButton: "ناقش مشروعك السعودي",
        },
        why: {
            label: "لماذا ITHelper",
            title: "أكثر من مجرد تطوير.",
            items: [
                { title: "تفكير يُعلي قيمة الأعمال", desc: "كل قرار يدعم أهدافك الفعلية — الوضوح والثقة والتحويل." },
                { title: "متجاوب في كل مكان", desc: "موقعك يعمل بشكل ممتاز على الهواتف والأجهزة اللوحية وأجهزة سطح المكتب." },
                { title: "تنفيذ دقيق التفاصيل", desc: "التباعد والطباعة والتفاعلات والصقل البصري كلها مهمة." },
                { title: "مبني للتطور", desc: "الهندسة النظيفة تعني أن موقعك يمكنه النمو مع أعمالك." },
            ],
        },
        cta: {
            title: "لنبني شيئاً يتذكره عملاؤك.",
            description: "هل لديك فكرة عمل أو خدمة أو علامة تجارية تستحق حضوراً رقمياً أفضل؟",
            primary: "لنعمل معاً",
            secondary: "اعرض أعمالي",
        },
        footer: {
            tagline: "تصميم وتطوير مواقع للشركات التي تريد التميز.",
            navigation: "التنقل",
            footerCta: "هل لديك مشروع في ذهنك؟",
            footerCtaSub: "لنُنشئ تجربة رقمية تُمثّل أعمالك بوضوح وثقة.",
            footerCtaBtn: "لنعمل معاً",
            rights: "جميع الحقوق محفوظة.",
        },
        contact: {
            label: "تواصل معنا",
            title: "ابدأ محادثة.",
            description: "أخبرني عن مشروعك ولنكتشف كيف يمكنني المساعدة.",
            name: "اسمك",
            email: "البريد الإلكتروني",
            company: "الشركة / العمل",
            projectType: "ماذا تحتاج؟",
            message: "أخبرني عن مشروعك",
            submit: "ابدأ المحادثة ←",
        },
        langDemo: {
            title: "طوّر أعمالك على الإنترنت.",
            text: "مواقع إلكترونية احترافية لجميع أنواع الأعمال.",
        },
    },

    bn: {
        nav: {
            home: "হোম",
            about: "আমার সম্পর্কে",
            services: "সেবাসমূহ",
            work: "কাজ",
            saudiReady: "সৌদি-প্রস্তুত",
            contact: "যোগাযোগ",
            cta: "চলুন কাজ করি",
        },
        hero: {
            badge: "নতুন প্রজেক্টের জন্য উপলব্ধ",
            headline: "ডিজিটাল অভিজ্ঞতা যা",
            headlineAccent: "আপনার ব্যবসাকে আলাদা করে তোলে।",
            subtext:
                "আমি অমিত, ITHelper-এর ডেভেলপার। আমি আধুনিক, রেসপন্সিভ ওয়েবসাইট ডিজাইন ও তৈরি করি যা ব্যবসাকে বিশ্বাস তৈরি করতে, স্পষ্টভাবে যোগাযোগ করতে এবং দর্শকদের গ্রাহকে রূপান্তরিত করতে সাহায্য করে।",
            viewWork: "আমার কাজ দেখুন",
            letsWork: "চলুন কাজ শুরু করি",
            checklist: ["ব্যবসামুখী চিন্তাভাবনা", "সব ডিভাইসে রেসপন্সিভ", "পরিষ্কার, আধুনিক ডিজাইন"],
        },
        trust: {
            items: ["ব্যবসায়িক ওয়েবসাইট", "ল্যান্ডিং পেজ", "পোর্টফোলিও", "SaaS ইন্টারফেস", "ই-কমার্স", "কাস্টম অ্যাপ"],
        },
        services: {
            label: "সেবাসমূহ",
            title: "আপনার ব্যবসার উপর ভিত্তি করে ওয়েবসাইট।",
            description: "কোম্পানির ওয়েবসাইট থেকে ল্যান্ডিং পেজ ও ওয়েব অ্যাপ — প্রতিটি প্রজেক্ট আপনার লক্ষ্য সমর্থন করতে ডিজাইন করা।",
            items: [
                { title: "ব্যবসায়িক ওয়েবসাইট", desc: "কোম্পানি, এজেন্সি ও প্রতিষ্ঠানের জন্য পেশাদার ওয়েবসাইট।" },
                { title: "ল্যান্ডিং পেজ", desc: "নির্দিষ্ট পণ্য বা ক্যাম্পেইনের জন্য উচ্চ-রূপান্তর পেজ।" },
                { title: "পোর্টফোলিও ওয়েবসাইট", desc: "দক্ষতা ও বিশ্বাসযোগ্যতা প্রকাশ করে এমন পেশাদার সাইট।" },
                { title: "SaaS / ওয়েব ইন্টারফেস", desc: "সফটওয়্যার পণ্য ও ওয়েব অ্যাপের জন্য আধুনিক ইন্টারফেস।" },
                { title: "ই-কমার্স অভিজ্ঞতা", desc: "পরিষ্কার, রেসপন্সিভ অনলাইন শপিং অভিজ্ঞতা।" },
                { title: "ওয়েবসাইট রিডিজাইন", desc: "পুরনো ওয়েবসাইটকে আধুনিক ডিজাইনে আপগ্রেড।" },
            ],
            viewAll: "সব সেবা",
            learnMore: "আরও জানুন",
        },
        process: {
            label: "আমি কীভাবে কাজ করি",
            title: "আইডিয়া থেকে গ্রাহকদের বিশ্বাসযোগ্য ওয়েবসাইট।",
            description: "একটি সুশৃঙ্খল প্রক্রিয়া যা আপনাকে সবসময় অবগত রাখে।",
            steps: [
                { number: "০১", title: "বোঝা", desc: "আপনার ব্যবসা, দর্শক ও ওয়েবসাইটের লক্ষ্য বুঝি।" },
                { number: "০২", title: "পরিকল্পনা", desc: "কন্টেন্ট, ব্যবহারকারীর যাত্রা ও ওয়েবসাইটের কাঠামো সাজাই।" },
                { number: "০৩", title: "ডিজাইন", desc: "আপনার ব্র্যান্ড পেশাদারভাবে উপস্থাপন করে এমন ইন্টারফেস তৈরি করি।" },
                { number: "০৪", title: "ডেভেলপ", desc: "রেসপন্সিভ লেআউট, পরিষ্কার কোড ও আধুনিক প্রযুক্তি দিয়ে তৈরি করি।" },
                { number: "০৫", title: "পরিমার্জন", desc: "বিভিন্ন স্ক্রিন সাইজে পরীক্ষা করি ও বিবরণ পরিমার্জন করি।" },
                { number: "০৬", title: "লঞ্চ", desc: "চূড়ান্ত ওয়েবসাইট অপ্টিমাইজড ও প্রকৃত গ্রাহকদের জন্য প্রস্তুত।" },
            ],
        },
        saudi: {
            badge: "🇸🇦 সৌদি-প্রস্তুত",
            title: "সৌদি আরবের",
            titleAccent: "ব্যবসার জন্য তৈরি।",
            description:
                "আপনার ওয়েবসাইট স্থানীয়, পেশাদার ও ব্যবহার করা সহজ হওয়া উচিত। আমি সৌদি দর্শকদের জন্য আধুনিক ডিজিটাল অভিজ্ঞতা তৈরি করতে পারি।",
            checklist: [
                "আরবী + ইংরেজি দ্বিভাষিক সমর্থন",
                "RTL লেআউট সামঞ্জস্যতা",
                "WhatsApp যোগাযোগ ইন্টিগ্রেশন",
                "SAR মুদ্রা উপস্থাপনা",
                "মোবাইল-ফার্স্ট ডিজাইন",
                "Google Maps ও লোকেশন কার্ড",
            ],
            capabilities: [
                { title: "দ্বিভাষিক অভিজ্ঞতা", desc: "সঠিক RTL সমর্থন সহ আরবী + ইংরেজি ইন্টারফেস।" },
                { title: "মোবাইল ফার্স্ট", desc: "প্রধানত স্মার্টফোন থেকে ব্রাউজকারী গ্রাহকদের জন্য ডিজাইন।" },
                { title: "সৌদি-বান্ধব UX", desc: "সৌদি গ্রাহকদের জন্য পরিচিত ব্যবহারকারীর যাত্রা।" },
                { title: "WhatsApp ইন্টিগ্রেশন", desc: "WhatsApp এর মাধ্যমে সরাসরি যোগাযোগ।" },
                { title: "SAR সমর্থন", desc: "প্রয়োজনে সৌদি রিয়ালে মূল্য।" },
                { title: "লোকেশন ও ম্যাপস", desc: "ব্যবসার অবস্থান স্পষ্টভাবে উপস্থাপিত।" },
                { title: "দ্রুত ও রেসপন্সিভ", desc: "সব ডিভাইসে অপ্টিমাইজড অভিজ্ঞতা।" },
                { title: "পেশাদার ব্র্যান্ডিং", desc: "আপনার পরিচয়কে কেন্দ্র করে, জেনেরিক টেম্পলেট নয়।" },
            ],
            ctaButton: "আপনার সৌদি প্রজেক্ট নিয়ে আলোচনা করুন",
        },
        why: {
            label: "কেন ITHelper",
            title: "শুধু ডেভেলপমেন্টের চেয়ে বেশি।",
            items: [
                { title: "ব্যবসামুখী চিন্তাভাবনা", desc: "প্রতিটি সিদ্ধান্ত আপনার প্রকৃত ব্যবসায়িক লক্ষ্য সমর্থন করে।" },
                { title: "সর্বত্র রেসপন্সিভ", desc: "আপনার ওয়েবসাইট ফোন, ট্যাবলেট ও ডেস্কটপে চমৎকারভাবে কাজ করে।" },
                { title: "বিস্তারিত-মনোযোগী কার্যকরী", desc: "স্পেসিং, টাইপোগ্রাফি, ইন্টারঅ্যাকশন — সব গুরুত্বপূর্ণ।" },
                { title: "বিকাশের জন্য তৈরি", desc: "পরিষ্কার আর্কিটেকচার মানে আপনার সাইট আপনার ব্যবসার সাথে বাড়তে পারে।" },
            ],
        },
        cta: {
            title: "চলুন এমন কিছু তৈরি করি যা আপনার গ্রাহকরা মনে রাখবে।",
            description: "কোনো ব্যবসায়িক আইডিয়া, সেবা বা ব্র্যান্ড যা আরও ভালো ডিজিটাল উপস্থিতি দাবি করে?",
            primary: "চলুন কাজ শুরু করি",
            secondary: "আমার কাজ দেখুন",
        },
        footer: {
            tagline: "ব্যবসার জন্য ওয়েব ডিজাইন ও ডেভেলপমেন্ট যারা আলাদা হতে চায়।",
            navigation: "নেভিগেশন",
            footerCta: "কোনো প্রজেক্ট মাথায় আছে?",
            footerCtaSub: "চলুন এমন একটি ডিজিটাল অভিজ্ঞতা তৈরি করি যা আপনার ব্যবসাকে স্পষ্টভাবে উপস্থাপন করে।",
            footerCtaBtn: "একসাথে কাজ করি",
            rights: "সর্বস্বত্ব সংরক্ষিত।",
        },
        contact: {
            label: "যোগাযোগ",
            title: "কথোপকথন শুরু করুন।",
            description: "আপনার প্রজেক্ট সম্পর্কে বলুন এবং চলুন দেখি আমি কীভাবে সাহায্য করতে পারি।",
            name: "আপনার নাম",
            email: "ইমেইল ঠিকানা",
            company: "ব্যবসা / কোম্পানি",
            projectType: "আপনার কী দরকার?",
            message: "আপনার প্রজেক্ট সম্পর্কে বলুন",
            submit: "কথোপকথন শুরু করুন →",
        },
        langDemo: {
            title: "আপনার ব্যবসাকে অনলাইনে এগিয়ে নিন।",
            text: "সব আকারের ব্যবসার জন্য পেশাদার ওয়েবসাইট।",
        },
    },
};

export const rtlLanguages: Language[] = ["ar"];
export const languageNames: Record<Language, string> = {
    en: "English",
    ar: "العربية",
    bn: "বাংলা",
};
