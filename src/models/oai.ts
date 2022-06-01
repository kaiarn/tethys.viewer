export interface OaiDataset {
    doi: string;
    title: string;
    creator: string;
    contributor: string;
    subject: string;
    north: number;
    south: number;
    east: number;
    west: number;
}

export interface OaiPerson {
    contributorName: string;
    creatorName: string;
}
