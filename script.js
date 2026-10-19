const translations = {
  bn: {
    navHome: "হোম",
    navServices: "সার্ভিস",
    navContact: "যোগাযোগ",
    heroTitle: "সেরা ভিডিও এডিটর খুঁজুন সহজেই",
    heroDesc: "ইউটিউব শর্টস, রিলস কিংবা ডাবিং এর জন্য প্রফেশনাল এডিটরদের সাথে যুক্ত হোন।",
    btnCustomer: "কাস্টমার অ্যাকাউন্ট",
    btnEditor: "এডিটর অ্যাকাউন্ট",
    serviceTitle: "আমাদের সেবাসমূহ",
    s1Desc: "আকর্ষণীয় শর্ট ভিডিও এডিটিং ও ক্যাপশন সার্ভিস।",
    s2Desc: "যেকোনো ভাষার নিখুঁত ডাবিং এবং সাউন্ড এডিটিং।",
    s3Desc: "ইউটিউব ও প্রফেশনাল ভিডিওর ফুল প্রসেসিং।"
  },
  en: {
    navHome: "Home",
    navServices: "Services",
    navContact: "Contact",
    heroTitle: "Find Top Video Editors Easily",
    heroDesc: "Connect with professional editors for YouTube Shorts, Reels, or Dubbing.",
    btnCustomer: "Customer Account",
    btnEditor: "Editor Account",
    serviceTitle: "Our Services",
    s1Desc: "Engaging short video editing & caption services.",
    s2Desc: "Flawless dubbing and sound editing in any language.",
    s3Desc: "Full processing for YouTube and professional videos."
  }
};

function changeLanguage() {
  const lang = document.getElementById("lang-switcher").value;
  
  document.getElementById("nav-home").innerText = translations[lang].navHome;
  document.getElementById("nav-services").innerText = translations[lang].navServices;
  document.getElementById("nav-contact").innerText = translations[lang].navContact;
  document.getElementById("hero-title").innerText = translations[lang].heroTitle;
  document.getElementById("hero-desc").innerText = translations[lang].heroDesc;
  document.getElementById("btn-customer").innerText = translations[lang].btnCustomer;
  document.getElementById("btn-editor").innerText = translations[lang].btnEditor;
  document.getElementById("service-title").innerText = translations[lang].serviceTitle;
  document.getElementById("s1-desc").innerText = translations[lang].s1Desc;
  document.getElementById("s2-desc").innerText = translations[lang].s2Desc;
  document.getElementById("s3-desc").innerText = translations[lang].s3Desc;
}