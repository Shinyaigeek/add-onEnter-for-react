import * as React from 'react';

interface Props {
    onEnter?:Function,
    onShiftEnter?:Function,
    onControlEnter?:Function,
    ChildComponent:React.ComponentType
}

export {
    Props
};
