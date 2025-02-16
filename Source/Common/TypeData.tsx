export type SupportDocument = {
    name: string;
    verify: boolean;
};

export type Experience = {
    title: string;
    description: string;
};

export type Interpreter = {
    id: number;
    name: string;
    phoneNumber: string;
    language: string[];
    vote: number;
    location: string;
    birth?: string;
    place_birth?: string;
    suppor_doc: SupportDocument[];
    exp: Experience[];
};

export type Mission = {
    name: string;
    language: string;
    status: number;
    time: string;
    addreess: string;
    icon: any;
};
