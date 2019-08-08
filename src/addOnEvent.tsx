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

export default function AddOnEvent(props: {
	children: ReactChild | ReactChildren;
	onEnter?: Function;
	onShiftEnter?: Function;
	onControlEnter?: Function;
}) {
	const [flag, handleFlag] = useState(false);
	useEffect(() => {
		const targetDocument = ensure(document.querySelector(".AddonEventWrapper"));

		if (props.onEnter || props.onShiftEnter || props.onControlEnter) {
			targetDocument.addEventListener("keydown", async (event: Keyboard) => {
				if (!flag) {
					await handleFlag(true);
					if (!event.isComposing) {
						if (event.code === "Enter") {
							if (event.shiftKey && props.onShiftEnter) {
								await props.onShiftEnter();
								return handleFlag(false);
							} else if (event.metaKey && props.onControlEnter) {
								await props.onControlEnter();
								return handleFlag(false);
							} else if (props.onEnter) {
								await props.onEnter();
								return handleFlag(false);
							}
						}
					}
				}
			});
		}
	});

	return <div className="AddonEventWrapper">{props.children}</div>;
}
