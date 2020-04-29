export interface Props {
    history: any,
    location: {
        hash: string;
        key: string;
        pathname: string;
        search: string;
        state: any;
    },
    match: {
        isExact: boolean;
        params: any;
        path: string;
        url: string;
    }
}
export interface NewsData{
    state:Props
}