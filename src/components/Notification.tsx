import React from 'react';

import MuiAlert from '@material-ui/lab/Alert';
import { iMsgType } from '../utils/enum';

interface iNotificationProps {
    msgType: string,
    msgText: string
}

function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function Notification(props: iNotificationProps) {
    const { msgType, msgText } = props;
    if (!msgType) {
        return null;
    }

    return (
        <div className='notification'>
            <Alert severity={iMsgType.ERROR}>{msgText}</Alert>
        </div>
    );
}
