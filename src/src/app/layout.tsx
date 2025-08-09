import { TempoInit } from "@/components/tempo-init";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Rootfuse - #1 Cannabis Operations Management Software | All-in-One Dashboard | METRC Integration",
  description:
    "Leading Cannabis Operations Management Software. Cultivation, Processing & Dispensary in one unified dashboard. METRC integration, compliance tracking, inventory management, AI automation. Replace 47 tabs with one secure platform. Trusted by cannabis businesses nationwide.",
  keywords:
    "cannabis software, cannabis operations management, METRC integration, cannabis compliance software, cultivation management software, dispensary management software, cannabis inventory management, seed to sale tracking, cannabis dashboard, cannabis business software, marijuana software, cannabis ERP, cannabis POS, cannabis CRM, cannabis tracking software, cannabis compliance tracking, cannabis business management, cannabis operations platform, cannabis technology, cannabis SaaS, cannabis workflow management, cannabis data management, cannabis reporting software, cannabis analytics, cannabis automation, cannabis AI, cannabis business intelligence, cannabis supply chain management, cannabis quality control, cannabis batch tracking, cannabis harvest management, cannabis processing software, cannabis retail software, cannabis point of sale, cannabis customer management, cannabis marketing automation, cannabis financial management, cannabis accounting software, cannabis tax compliance, 280E compliance, cannabis regulatory compliance, state cannabis compliance, cannabis license management, cannabis facility management, cannabis team management, cannabis task management, cannabis project management, cannabis document management, cannabis audit trail, cannabis security, cannabis data protection, cannabis cloud software, cannabis mobile app, cannabis integration platform, cannabis API, cannabis webhooks, cannabis third party integrations, cannabis QuickBooks integration, cannabis Slack integration, cannabis email integration, cannabis calendar integration, cannabis payment processing, cannabis e-commerce, cannabis online ordering, cannabis delivery management, cannabis wholesale management, cannabis B2B marketplace, cannabis supplier management, cannabis vendor management, cannabis procurement, cannabis logistics, cannabis transportation, cannabis distribution, cannabis manufacturing, cannabis extraction, cannabis testing, cannabis lab management, cannabis quality assurance, cannabis environmental monitoring, cannabis grow room management, cannabis climate control, cannabis irrigation management, cannabis nutrient management, cannabis pest management, cannabis harvest scheduling, cannabis curing management, cannabis packaging management, cannabis labeling compliance, cannabis product catalog, cannabis strain management, cannabis genetics tracking, cannabis phenotype tracking, cannabis clone management, cannabis mother plant management, cannabis flowering management, cannabis vegetative management, cannabis germination tracking, cannabis transplant management, cannabis waste tracking, cannabis disposal compliance, cannabis security compliance, cannabis video surveillance, cannabis access control, cannabis employee management, cannabis training management, cannabis certification tracking, cannabis background checks, cannabis payroll management, cannabis HR management, cannabis performance management, cannabis scheduling software, cannabis time tracking, cannabis attendance management, cannabis leave management, cannabis benefits management, cannabis onboarding, cannabis offboarding, cannabis policy management, cannabis procedure management, cannabis SOP management, cannabis knowledge base, cannabis training materials, cannabis compliance training, cannabis safety training, cannabis emergency procedures, cannabis incident management, cannabis corrective actions, cannabis preventive actions, cannabis risk management, cannabis insurance management, cannabis legal compliance, cannabis regulatory reporting, cannabis state reporting, cannabis tax reporting, cannabis financial reporting, cannabis operational reporting, cannabis performance reporting, cannabis analytics dashboard, cannabis KPI tracking, cannabis metrics, cannabis benchmarking, cannabis forecasting, cannabis budgeting, cannabis planning, cannabis strategy, cannabis growth management, cannabis scalability, cannabis multi-location management, cannabis franchise management, cannabis chain management, cannabis corporate management, cannabis enterprise software, cannabis white label, cannabis custom branding, cannabis API access, cannabis data export, cannabis data import, cannabis data migration, cannabis system integration, cannabis workflow automation, cannabis process automation, cannabis task automation, cannabis notification automation, cannabis alert management, cannabis escalation management, cannabis approval workflows, cannabis review processes, cannabis change management, cannabis version control, cannabis backup management, cannabis disaster recovery, cannabis business continuity, cannabis uptime monitoring, cannabis performance monitoring, cannabis security monitoring, cannabis compliance monitoring, cannabis audit management, cannabis inspection management, cannabis violation management, cannabis corrective action management, cannabis continuous improvement, cannabis best practices, cannabis industry standards, cannabis certification compliance, cannabis accreditation, cannabis validation, cannabis verification, cannabis testing compliance, cannabis lab results management, cannabis COA management, cannabis potency testing, cannabis pesticide testing, cannabis heavy metals testing, cannabis microbial testing, cannabis residual solvents testing, cannabis terpene analysis, cannabis cannabinoid analysis, cannabis product testing, cannabis batch testing, cannabis sample management, cannabis chain of custody, cannabis evidence management, cannabis documentation management, cannabis record keeping, cannabis archival management, cannabis retention policies, cannabis disposal policies, cannabis privacy policies, cannabis data governance, cannabis master data management, cannabis reference data management, cannabis metadata management, cannabis data quality, cannabis data integrity, cannabis data validation, cannabis data cleansing, cannabis data enrichment, cannabis data transformation, cannabis data mapping, cannabis data modeling, cannabis data architecture, cannabis database management, cannabis cloud infrastructure, cannabis scalable architecture, cannabis microservices, cannabis containerization, cannabis DevOps, cannabis CI/CD, cannabis automated testing, cannabis quality assurance, cannabis performance testing, cannabis load testing, cannabis security testing, cannabis penetration testing, cannabis vulnerability assessment, cannabis threat modeling, cannabis risk assessment, cannabis compliance assessment, cannabis gap analysis, cannabis maturity assessment, cannabis readiness assessment, cannabis implementation planning, cannabis project management, cannabis change management, cannabis training planning, cannabis go-live planning, cannabis support planning, cannabis maintenance planning, cannabis upgrade planning, cannabis migration planning, cannabis integration planning, cannabis customization, cannabis configuration, cannabis parameterization, cannabis localization, cannabis internationalization, cannabis multi-language support, cannabis multi-currency support, cannabis multi-timezone support, cannabis global deployment, cannabis regional compliance, cannabis local regulations, cannabis state-specific features, cannabis jurisdiction management, cannabis license type management, cannabis permit management, cannabis application management, cannabis renewal management, cannabis amendment management, cannabis transfer management, cannabis ownership change management, cannabis location change management, cannabis product change management, cannabis process change management, cannabis equipment change management, cannabis personnel change management, cannabis policy change management, cannabis procedure change management, cannabis system change management, cannabis technology change management, cannabis vendor change management, cannabis supplier change management, cannabis customer change management, cannabis market change management, cannabis regulatory change management, cannabis compliance change management, cannabis business change management, cannabis operational change management, cannabis strategic change management, cannabis digital transformation, cannabis modernization, cannabis optimization, cannabis efficiency improvement, cannabis cost reduction, cannabis revenue enhancement, cannabis profit maximization, cannabis ROI improvement, cannabis productivity enhancement, cannabis quality improvement, cannabis customer satisfaction, cannabis employee satisfaction, cannabis stakeholder satisfaction, cannabis competitive advantage, cannabis market leadership, cannabis innovation, cannabis technology leadership, cannabis best-in-class, cannabis industry-leading, cannabis award-winning, cannabis certified, cannabis validated, cannabis proven, cannabis trusted, cannabis reliable, cannabis secure, cannabis compliant, cannabis scalable, cannabis flexible, cannabis configurable, cannabis customizable, cannabis user-friendly, cannabis intuitive, cannabis easy-to-use, cannabis comprehensive, cannabis complete, cannabis integrated, cannabis unified, cannabis centralized, cannabis streamlined, cannabis automated, cannabis intelligent, cannabis smart, cannabis advanced, cannabis sophisticated, cannabis enterprise-grade, cannabis professional, cannabis commercial, cannabis business-ready, cannabis production-ready, cannabis mission-critical, cannabis high-availability, cannabis fault-tolerant, cannabis disaster-resistant, cannabis business-continuity, cannabis always-on, cannabis 24x7, cannabis real-time, cannabis near-real-time, cannabis batch processing, cannabis stream processing, cannabis event-driven, cannabis message-driven, cannabis API-first, cannabis cloud-native, cannabis mobile-first, cannabis responsive, cannabis cross-platform, cannabis multi-device, cannabis anywhere access, cannabis anytime access, cannabis secure access, cannabis role-based access, cannabis permission-based access, cannabis attribute-based access, cannabis policy-based access, cannabis context-aware access, cannabis adaptive access, cannabis zero-trust access, cannabis single sign-on, cannabis multi-factor authentication, cannabis biometric authentication, cannabis certificate-based authentication, cannabis token-based authentication, cannabis OAuth, cannabis SAML, cannabis LDAP, cannabis Active Directory, cannabis identity management, cannabis access management, cannabis privilege management, cannabis session management, cannabis audit logging, cannabis activity monitoring, cannabis behavior analytics, cannabis anomaly detection, cannabis fraud detection, cannabis threat detection, cannabis intrusion detection, cannabis malware detection, cannabis vulnerability detection, cannabis compliance violation detection, cannabis policy violation detection, cannabis data breach detection, cannabis incident response, cannabis forensic analysis, cannabis root cause analysis, cannabis impact analysis, cannabis risk analysis, cannabis threat analysis, cannabis vulnerability analysis, cannabis compliance analysis, cannabis performance analysis, cannabis trend analysis, cannabis predictive analysis, cannabis prescriptive analysis, cannabis descriptive analysis, cannabis diagnostic analysis, cannabis statistical analysis, cannabis machine learning, cannabis artificial intelligence, cannabis deep learning, cannabis neural networks, cannabis natural language processing, cannabis computer vision, cannabis robotic process automation, cannabis intelligent automation, cannabis cognitive automation, cannabis decision automation, cannabis workflow orchestration, cannabis process orchestration, cannabis service orchestration, cannabis data orchestration, cannabis integration orchestration, cannabis deployment orchestration, cannabis infrastructure orchestration, cannabis cloud orchestration, cannabis container orchestration, cannabis microservices orchestration, cannabis API orchestration, cannabis event orchestration, cannabis message orchestration, cannabis notification orchestration, cannabis alert orchestration, cannabis escalation orchestration, cannabis approval orchestration, cannabis review orchestration, cannabis testing orchestration, cannabis validation orchestration, cannabis verification orchestration, cannabis certification orchestration, cannabis accreditation orchestration, cannabis compliance orchestration, cannabis audit orchestration, cannabis inspection orchestration, cannabis monitoring orchestration, cannabis reporting orchestration, cannabis analytics orchestration, cannabis intelligence orchestration, cannabis insights orchestration, cannabis recommendations orchestration, cannabis optimization orchestration, cannabis improvement orchestration, cannabis innovation orchestration, cannabis transformation orchestration, cannabis modernization orchestration, cannabis digitization orchestration, cannabis automation orchestration",
  openGraph: {
    title:
      "Rootfuse - #1 Cannabis Operations Management Software | All-in-One Dashboard",
    description:
      "Leading Cannabis Operations Management Software. Cultivation, Processing & Dispensary in one unified dashboard. METRC integration, compliance tracking, inventory management, AI automation. Trusted by cannabis businesses nationwide.",
    type: "website",
    url: "https://rootfuse.com",
    siteName: "Rootfuse",
    images: [
      {
        url: "https://rootfuse.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rootfuse Cannabis Operations Management Software Dashboard",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rootfuse - #1 Cannabis Operations Management Software",
    description:
      "Leading Cannabis Operations Management Software. All-in-One Dashboard for Cannabis Businesses. METRC integration, compliance tracking, AI automation.",
    images: ["https://rootfuse.com/twitter-image.jpg"],
    creator: "@rootfuse",
    site: "@rootfuse",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rootfuse.com",
  },
  category: "Cannabis Software",
  classification: "Cannabis Operations Management Software",
  other: {
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="bg-background text-foreground"
    >
      <Script src="https://api.tempo.build/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body
        className={`${inter.className} bg-background text-foreground min-h-screen`}
      >
        {children}
        <TempoInit />
      </body>
    </html>
  );
}
