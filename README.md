# Add-onEnter-For-React
This module is React/Next Component, which enable you add onEnter/onShiftEnter/onControlEnter Method to ChildComponent.

# Installation
This module is available as an npm package.

```
// with npm
npm install add-onenter-for-react

// with yarn
yarn add add-onenter-for-react
```

# Usage
Here is a quick example to get you started, it's all you need:
```
import AddonEnter from "add-onenter-for-react"

function Enter(){
    alert('Enter!!')
}

function ShiftEnter(){
    alert('ShiftEnter!!')
}

function ControlEnter(){
    alert('ControlEnter!!')
}

function App() {
    return(
        <AddonEnter
          onEnter={Enter()}
          onShiftEnter={ShiftEnter()}
          onControlEnter={ControlEnter()}
        >
        <TextArea />
        </AddonEnter>
    )
}
```

# API

| Property | type |
|:--------:|:----:|
|onEnter   |?Function|
|onShiftEnter|?FUnction|
|onControlEnter|?Function|