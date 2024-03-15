import overviewIcon from "@icons/overview.svg";
import overviewActive from "@icons/overview-active.svg";
import linksIcon from "@icons/links.svg";
import linksActive from "@icons/links-active.svg";
import analyticsIcon from "@icons/analytics.svg";
import analyticsActive from "@icons/analytics-active.svg";
import profileIcon from "@icons/profile.svg";
import profileActive from "@icons/profile-active.svg";
import imgAlexa from "@images/img-alexa.png";
import imgAndrew from "@images/img-andrew.png";
import imgJane from "@images/img-jane.png";
import imgJordan from "@images/img-jordan.png";
import imgPeter from "@images/img-peter.png";
import imgSamuel from "@images/img-samuel.png";
import twitter from "@icons/twitter-white.svg";
import linkedIn from "@icons/linkedin-white.svg";
import instagram from "@icons/instagram.svg";
import facebook from "@icons/facebook.svg";

export const links = [
    {
        id: 1,
        longUrl: "https://www.google.com/absclsijealjkjiaoja",
        shortUrl: "https://trimmer.com/abcde",
        date: "2024-01-01",
        clicks: 0,
    },
    {
        id: 2,
        longUrl: "https://www.facebook.com/klajiaoojalialj",
        shortUrl: "https://trimmer.com/fghij",
        date: "2024-01-05",
        clicks: 5,
    },
    {
        id: 3,
        longUrl: "https://www.twitter.com/kl46463gewtwfj",
        shortUrl: "https://trimmer.com/klmno",
        date: "2021-01-11",
        clicks: 2,
    },
    {
        id: 4,
        longUrl: "https://www.instagram.com/klaj90-938-jalialj",
        shortUrl: "https://trimmer.com/pqrst",
        date: "2021-01-19",
        clicks: 1,
    },
    {
        id: 5,
        longUrl: "https://www.discord.com/kl489908_iikj",
        shortUrl: "https://trimmer.com/uvwxy",
        date: "2024-01-24",
        clicks: 0,
    },
    {
        id: 6,
        longUrl: "https://www.google.com/klajiaoojalialj",
        shortUrl: "https://trimmer.com/z1234",
        date: "2024-01-29",
        clicks: 1,
    },
];

export const navbarLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Features", path: "/#features" },
    { id: 3, name: "Pricing", path: "/#pricing" },
    { id: 4, name: "FAQ", path: "/#faq" },
];

export const sidenavLinks = [
    {
        id: 1,
        name: "Overview",
        icon: overviewIcon,
        href: "/dashboard",
        activeIcon: overviewActive,
    },
    {
        id: 2,
        name: "Links",
        icon: linksIcon,
        href: "/dashboard/links",
        activeIcon: linksActive,
    },
    {
        id: 3,
        name: "Analytics",
        icon: analyticsIcon,
        href: "/dashboard/analytics",
        activeIcon: analyticsActive,
    },
    {
        id: 4,
        name: "Profile",
        icon: profileIcon,
        href: "/dashboard/profile",
        activeIcon: profileActive,
    },
];

export const pricingPlans = [
    {
        id: 1,
        title: "Starter",
        price: "Free",
        description: "Free plan for all users",
        features: [
            "Unlimited URL Shortening",
            "Basic Link Analytics",
            "Customizable Short Links",
            "Standard Support",
            "Ad Supported",
        ],
    },
    {
        id: 2,
        title: "Professional",
        price: "$15/month",
        description: "Ideal for business creators",
        features: [
            "Enhanced Link Analytics",
            "Custom Branded Domains",
            "Advanced Link Customization",
            "Priority Support",
            "Ad-free Experience",
        ],
    },
    {
        id: 3,
        title: "Premium",
        price: "$25/month",
        description: "Share with up to 10 users",
        features: [
            "Team Collaboration",
            "User Roles and Permissions",
            "Enhanced Security",
            "API Access",
            "Dedicated Account Manager",
        ],
    },
];

export const reviews = [
    {
        id: 1,
        rating: 5,
        text: '"This platform transformed the way we share links! The ability to customize and track our URLs has been invaluable for our marketing campaigns."',
        img: imgAndrew,
        name: "Andrew Mark",
        position: "Ceo, Marks Media",
    },
    {
        id: 2,
        rating: 4,
        text: '"I love the simplicity and effectiveness of this tool. Generating QR codes for my event promotions has never been easier!. Thank you Trimmer."',
        img: imgJane,
        name: "Jane Doe",
        position: "Event Organiser",
    },
    {
        id: 3,
        rating: 4,
        text: '"The insights provided by the analytics have helped us understand our audience better and optimize our content strategy accordingly."',
        img: imgPeter,
        name: "Peter Slide",
        position: "Digital Marketer",
    },

    {
        id: 4,
        rating: 5,
        text: "\"This platform's ability to customize URLs and generate QR codes has elevated our marketing materials. It's an indispensable tool for our digital strategy.\"",
        img: imgAlexa,
        name: "Alexa R.",
        position: "Boutique Owner",
    },
    {
        id: 5,
        rating: 3,
        text: '"The analytics feature has been a game changer for our online campaigns. Being able to track the performance of each link e allows us to quickly adjust our strategies and optimize our content."',
        img: imgJordan,
        name: "Jordan M.",
        position: "Digital Marketing Manager",
    },
    {
        id: 6,
        rating: 5,
        text: '"I was initially drawn to the platform because it was free to start, but I quickly saw the value in upgrading. The advanced features, have really set my freelance business apart."',
        img: imgSamuel,
        name: "Samuel T.",
        position: "Freelance Photographer",
    },
];

export const socialLinks = [
    { id: 1, name: "twitter", icon: twitter, href: "https://twitter.com" },
    {
        id: 2,
        name: "instagram",
        icon: instagram,
        href: "https://instagram.com",
    },
    { id: 3, name: "linkedIn", icon: linkedIn, href: "https://linkedin.com" },
    { id: 4, name: "facebook", icon: facebook, href: "https://facebook.com" },
];

export const footerLinks = [
    {
        id: 1,
        title: "Why Trimmer ?",
        links: ["Scissor 101", "Integrations & API", "Pricing"],
    },
    {
        id: 2,
        title: "Solutions",
        links: [
            "Social Media",
            "Digital Marketing",
            "Customer Service",
            "For Developers",
        ],
    },
    {
        id: 3,
        title: "Products",
        links: ["Link Management", "QR Codes", "Link-in-bio"],
    },
    {
        id: 4,
        title: "Company",
        links: [
            "About Trimmer",
            "Careers",
            "Partners",
            "Press",
            "Contact",
            "Reviews",
        ],
    },
    {
        id: 5,
        title: "Resources",
        links: [
            "Blog Resource",
            "Library",
            "Developers",
            "App",
            "Connectors",
            "Support",
            "Trust Center",
            "Browser Extension",
            "Mobile App",
        ],
    },
    {
        id: 6,
        title: "Features",
        links: [
            "Branded Links",
            "Mobile Links",
            "Campaign Management &",
            "Analytics",
            "QR Code generation",
        ],
    },
    {
        id: 7,
        title: "Legal",
        links: [
            "Privacy Policy",
            "Cookie Policy",
            "Terms of Service",
            "Acceptable Use Policy",
            "Code of Conduct",
        ],
    },
];
