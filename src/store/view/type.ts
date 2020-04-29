export interface viewInterFace {
    content: string;
    updateTime: number;
    id: string;
    title: string;
    img: string;
    viewTypeName: string;
}

export interface viewState {
    list: viewInterFace[];
    code: string;
    pageSize: number;
    totalCount: number;
}

export interface actionsInterFace {
    type: string;
    data: viewState;
}

export interface Props {
    children?: JSX.Element[] | JSX.Element | React.ReactNode;
    className?: string;
}