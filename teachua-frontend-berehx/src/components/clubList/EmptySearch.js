import {Empty} from 'antd';
import React from "react";
import './css/EmptySearch.less';

const EmptySearch = () => {
    return (
        <div className="empty-box">
            <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                description={
                    <span>
                    Нічого не знайдено :(
                </span>
                }
            >
            </Empty>
        </div>
    )
};

export default EmptySearch;