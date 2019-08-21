import React, { useEffect, ReactChild, ReactChildren, useState } from "react";

function ensure<T>(
	arg: T | undefined | null,
	message: string = "This value was promised to always be there"
) {
	if (arg == null) {
		throw new TypeError(message);
	}
	return arg;
}

interface Keyboard extends KeyboardEvent {
	isComposing: boolean;
}

// export default function AddOnEvent(props: {
// 	children: ReactChild | ReactChildren;
// 	onEnter?: () => void;
// 	onShiftEnter?: () => void;
// 	onControlEnter?: () => void;
// }) {

// 	useEffect(() => {
// 		const addTargetDocument = ensure(
// 			document.getElementsByClassName('AddEventWrapper')
// 		)
// 		Array.prototype.forEach.call(addTargetDocument, (target: Element) => {
// 			target.addEventListener('keyup',(event:Keyboard) => {
// 				console.log(event)
// 				if (!event.isComposing) {
// 					if (event.code === "Enter") {
// 						if (event.shiftKey && props.onShiftEnter) {
// 							return props.onShiftEnter();
// 						} else if (event.metaKey && props.onControlEnter) {
// 							return props.onControlEnter();
// 						} else if (props.onEnter) {
// 							return props.onEnter();
// 						} else {
// 							return null;
// 						}
// 					} else {
// 						return null;
// 					}
// 				} else {
// 					return null;
// 				}
// 			},{
// 				capture:true
// 			})
// 		});
// 	})

// 	return (
// 		<div className="AddEventWrapper">{props.children}</div>
// 	);
// }

interface Props {
	onEnter?:() => void,
	onShiftEnter?:() => void,
	onControlEnter?:() => void,
}

export default class addOnEvent extends React.Component<Props,{}> {
	componentDidMount() {
		const addTargetDocument = ensure(
			document.getElementsByClassName("AddEventWrapper")
		);
		Array.prototype.forEach.call(addTargetDocument, (target: Element) => {
			target.addEventListener(
				"keyup",
				(event: Keyboard) => {
					console.log(event);
					if (!event.isComposing) {
						if (event.code === "Enter") {
							if (event.shiftKey && this.props.onShiftEnter) {
								return this.props.onShiftEnter();
							} else if (event.metaKey && this.props.onControlEnter) {
								return this.props.onControlEnter();
							} else if (this.props.onEnter) {
								return this.props.onEnter();
							} else {
								return null;
							}
						} else {
							return null;
						}
					} else {
						return null;
					}
				},
				{
					capture: true
				}
			);
		});
	}

	componentWillUpdate() {
		const addTargetDocument = ensure(
			document.getElementsByClassName("AddEventWrapper")
		);
		Array.prototype.forEach.call(addTargetDocument, (target: Element) => {
			target.removeEventListener(
				"keyup",
				(event: Keyboard) => {
					console.log(event);
					if (!event.isComposing) {
						if (event.code === "Enter") {
							if (event.shiftKey && this.props.onShiftEnter) {
								return this.props.onShiftEnter();
							} else if (event.metaKey && this.props.onControlEnter) {
								return this.props.onControlEnter();
							} else if (this.props.onEnter) {
								return this.props.onEnter();
							} else {
								return null;
							}
						} else {
							return null;
						}
					} else {
						return null;
					}
				},
				{
					capture: true
				}
			);
		});
	}

	render() {
		return <div className="AddEventWrapper">{this.props.children}</div>;
	}
}
