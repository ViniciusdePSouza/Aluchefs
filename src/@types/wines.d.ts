export interface WineProps {
    id:         number;
    attributes: Attributes;
}

 interface Attributes {
    name:        string;
    description: string;
    createdAt:   Date;
    updatedAt:   Date;
}