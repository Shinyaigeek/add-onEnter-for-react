import React, { useEffect, ReactChild, ReactChildren } from "react";

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

export default function AddOnEvent(props: {
	children: ReactChild | ReactChildren;
	onEnter: Function;
	onShiftEnter: Function;
	onControlEnter: Function;
}) {
	useEffect(() => {
		const targetDocument = ensure(document.querySelector(".AddonEventWrapper"));

		if (props.onEnter || props.onShiftEnter || props.onControlEnter) {
			targetDocument.addEventListener("keydown", (event: Keyboard) => {
				if (!event.isComposing) {
					if (event.code === "Enter") {
						if (event.shiftKey) {
							return props.onShiftEnter;
						} else if (event.metaKey) {
							return props.onControlEnter;
						} else {
							return props.onEnter;
						}
					}
				}
			});
		}
	});

	return <div className="AddonEventWrapper">{props.children}</div>;
}
