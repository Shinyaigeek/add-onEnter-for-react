import { ReactChild, ReactChildren } from "react";

export as namespace AddonEnter;

export interface AddonEnterProps {
	children: ReactChild | ReactChildren;
	onEnter?: Function;
	onShiftEnter?: Function;
	onControlEnter?: Function;
}

export default function AddonEnter(props:AddonEnterProps)