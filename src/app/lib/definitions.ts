export type View = {
    date: string;
    location: string;
};

export type Link = {
    id: string;
    longLink: string;
    shortLink: string;
    timestamp: string;
    userId: string;
    views: View[];
};
