import React from 'react';
import moment from 'moment';
import 'moment/locale/ko';

export default function Week(props) {
    const {
        date,
    } = props;

    const Sunday = () => {
        if (moment(date).format('dd') === "일") {
            return <div style={{ color: '#F85835' }}>일</div>;
        } else {
            return <div>{moment(date).format('dd')}</div>;
        }
    };

    return (
        <div>
            {Sunday()}
        </div>
    );
}
