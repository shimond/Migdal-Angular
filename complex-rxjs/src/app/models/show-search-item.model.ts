
    export interface Schedule {
        time: string;
        days: string[];
    }

    export interface Rating {
        average?: any;
    }

    export interface WebChannel {
        id: number;
        name: string;
        country?: any;
    }

    export interface Externals {
        tvrage?: any;
        thetvdb: number;
        imdb: string;
    }

    export interface Image {
        medium: string;
        original: string;
    }

    export interface Self {
        href: string;
    }

    export interface Previousepisode {
        href: string;
    }

    export interface Links {
        self: Self;
        previousepisode: Previousepisode;
    }

    export interface Show {
        id: number;
        url: string;
        name: string;
        type: string;
        language: string;
        genres: any[];
        status: string;
        runtime: number;
        premiered: string;
        officialSite: string;
        schedule: Schedule;
        rating: Rating;
        weight: number;
        network?: any;
        webChannel: WebChannel;
        externals: Externals;
        image: Image;
        summary: string;
        updated: number;
        _links: Links;
    }

    export interface ShowResultItem {
        score: number;
        show: Show;
    }
