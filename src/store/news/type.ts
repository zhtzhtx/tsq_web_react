export interface newsInterFace {
    createBy: string;
    createTime: number;
    dynamicTime: number;
    htmlContent: string;
    id: string;
    pageView: number;
    textContent: string;
    title: string;
    titleImg: string;
    titleImgPath: string;
    type: string;
    typeName: string;
    updateBy: string;
    updateTime: number;
    validStatus: string;
}

export interface newsState {
    list: newsInterFace[];
    code: string;
    pageSize: number;
    totalCount: number;
}

export interface actionsInterFace {
    type: string;
    data: newsState;
}

export interface Props {
    children?: JSX.Element[] | JSX.Element | React.ReactNode;
    className?: string;
}