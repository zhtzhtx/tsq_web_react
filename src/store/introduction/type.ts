export interface introductionInterFace {
    content: string;
    createTime: number;
    createBy: string;
    id: string;
    displayNo: number;
    title: string;
    titleImg: string;
    titleImgPath: string;
    updateBy: string;
    updateTime: number;
    validStatus: string;
}

export interface introductionState {
    list: introductionInterFace[];
    code: string;
    resultMsg: string;
}

export interface actionsInterFace {
    type: string;
    data: introductionState;
}

export interface Props {
    children?: JSX.Element[] | JSX.Element | React.ReactNode;
    className?: string;
}