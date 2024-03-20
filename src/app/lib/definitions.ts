export type View = {
    date: string;
    location: string;
};

export type Links = {
    id: string;
    longLink: string;
    shortLink: string;
    timestamp: number;
    views: View[];
};
