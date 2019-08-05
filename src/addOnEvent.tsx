import React, { useEffect } from "react";

export default function addOnEvent(
	ChildComponent: React.ComponentType,
	onEnter: Function | null = null,
	onShiftEnter: Function | null = null,
	onControlEnter: Function | null = null
) {
    function ensure<T>(
        argument: T | undefined | null,
        message: string = 'This value was promised to always be there'
    ) {
        if (argument === undefined || argument === null) {
            throw new TypeError(message);
        }
        return argument;
    }

	useEffect(() => {
        const targetDocument = ensure(document.querySelector('.AddonEventWrapper'))
		if(onEnter){
            targetDocument.addEventListener("keyup",() => {

            })
        }
	});

	return (
		<div className="AddonEventWrapper">
			<ChildComponent />
		</div>
	);
}
